import { feedSources } from '../data/feeds'
import { posts as localPosts } from './posts'

// Standard schema all sites must publish in /api/posts.json
export interface ExternalPost {
  slug: string
  title: string
  description: string
  date: string
  keywords: string[]
  readTime: string | null
  url: string
  product: string
}

// Unified post type used in the blog page
export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  readTime: string | null
  url: string
  source: string
  product: string
  external: boolean
}

function localPostsToBlogPosts(): BlogPost[] {
  return localPosts.map(post => ({
    slug: post.slug,
    title: post.title,
    description: post.description ?? '',
    date: post.date,
    tags: post.tags ?? [],
    readTime: null,
    url: `/writing/${post.slug}`,
    source: 'portfolio',
    product: 'portfolio',
    external: false,
  }))
}

async function fetchFeed(source: { id: string; url: string }): Promise<BlogPost[]> {
  try {
    const res = await fetch(source.url)
    if (!res.ok) return []
    const posts: ExternalPost[] = await res.json()
    return posts.map(post => ({
      slug: post.slug,
      title: post.title,
      description: post.description,
      date: post.date,
      tags: post.keywords,
      readTime: post.readTime,
      url: post.url,
      source: source.id,
      product: post.product,
      external: true,
    }))
  } catch {
    return []
  }
}

export async function fetchAllPosts(): Promise<BlogPost[]> {
  const feeds = await Promise.all(feedSources.map(fetchFeed))
  const allPosts = [...localPostsToBlogPosts(), ...feeds.flat()]
  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

// Build unique filter options from all loaded posts
export function getFilterOptions(posts: BlogPost[]): { id: string; label: string }[] {
  const seen = new Map<string, string>()
  for (const post of posts) {
    const key = post.external ? post.product : 'portfolio'
    if (!seen.has(key)) {
      seen.set(key, getProductLabel(key))
    }
  }
  return [{ id: 'all', label: 'all' }, ...Array.from(seen, ([id, label]) => ({ id, label }))]
}

const productLabels: Record<string, string> = {
  portfolio: 'gavyncaldwell.com',
  harknotes: 'HarkNotes',
  farscry: 'Farscry',
  'harknotes-vs': 'HarkNotes vs',
}

export function getProductLabel(product: string): string {
  return productLabels[product] ?? product
}
