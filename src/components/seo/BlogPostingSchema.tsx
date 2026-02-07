import JsonLd from './JsonLd'

interface BlogPostingSchemaProps {
  title: string
  description?: string
  datePublished: string
  dateModified?: string
  slug: string
  tags?: string[]
}

export default function BlogPostingSchema({
  title,
  description,
  datePublished,
  dateModified,
  slug,
  tags,
}: BlogPostingSchemaProps) {
  const blogPostData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description: description,
    datePublished: datePublished,
    dateModified: dateModified || datePublished,
    url: `https://gavyncaldwell.com/writing/${slug}`,
    author: {
      '@type': 'Person',
      name: 'Gavyn Caldwell',
      url: 'https://gavyncaldwell.com',
    },
    publisher: {
      '@type': 'Person',
      name: 'Gavyn Caldwell',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://gavyncaldwell.com/writing/${slug}`,
    },
    keywords: tags?.join(', '),
  }

  return <JsonLd data={blogPostData} />
}
