import { ComponentType } from 'react'

export interface Post {
  slug: string
  title: string
  date: string
  description?: string
  tags?: string[]
  component: ComponentType
}

// Import all MDX posts
// Note: In a real setup, you'd use import.meta.glob
// For now, we'll manually import posts
import HelloWorld, { frontmatter as helloWorldMeta } from '../content/posts/hello-world.mdx'
import BuildingTerminalPortfolio, { frontmatter as terminalPortfolioMeta } from '../content/posts/building-a-terminal-portfolio.mdx'

const postModules = [
  { component: HelloWorld, frontmatter: helloWorldMeta, slug: 'hello-world' },
  { component: BuildingTerminalPortfolio, frontmatter: terminalPortfolioMeta, slug: 'building-a-terminal-portfolio' },
]

export const posts: Post[] = postModules
  .map(({ component, frontmatter, slug }) => ({
    slug,
    title: (frontmatter?.title as string) || slug,
    date: (frontmatter?.date as string) || new Date().toISOString(),
    description: frontmatter?.description as string | undefined,
    tags: frontmatter?.tags as string[] | undefined,
    component,
  }))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug)
}

export function getAdjacentPosts(slug: string): { prev: Post | null; next: Post | null } {
  const index = posts.findIndex(post => post.slug === slug)
  if (index === -1) return { prev: null, next: null }

  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  }
}
