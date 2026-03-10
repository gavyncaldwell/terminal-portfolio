import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Prompt } from '../../components/terminal'
import { SEO } from '../../components/seo'
import Tag from '../../components/ui/Tag'
import { formatDate } from '../../utils/formatDate'
import { fetchAllPosts, getFilterOptions, getProductLabel } from '../../utils/blogFeed'
import type { BlogPost } from '../../utils/blogFeed'
import { feedSources } from '../../data/feeds'
import './Blog.css'

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [filter, setFilter] = useState('all')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAllPosts().then(allPosts => {
      setPosts(allPosts)
      setLoading(false)
    })
  }, [])

  const filters = getFilterOptions(posts)
  const filtered = filter === 'all' ? posts : posts.filter(p => p.product === filter)

  return (
    <div className="blog">
      <SEO
        title="Blog"
        canonical="/blog"
        description="Articles on privacy-first software, frontend development, local AI, self-hosted tools, and more by Gavyn Caldwell."
      />

      <header className="blog__header">
        <Prompt command="ls" args="-la ./blog" />
      </header>

      <section className="blog__intro">
        <p className="blog__intro-text">
          Writing from across my projects —{' '}
          {feedSources.map((source, i) => (
            <span key={source.id}>
              {i > 0 && ', '}
              <a href={source.siteUrl} target="_blank" rel="noopener noreferrer">
                {source.name}
              </a>
            </span>
          ))}
          , and here.
        </p>
      </section>

      {!loading && posts.length > 0 && (
        <div className="blog__filters">
          {filters.map(f => (
            <button
              key={f.id}
              className={`blog__filter ${filter === f.id ? 'blog__filter--active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>
      )}

      <div className="blog__list">
        {loading && <p className="blog__status">Loading posts...</p>}
        {!loading &&
          filtered.map(post => (
            <article key={`${post.source}-${post.slug}`} className="blog-card">
              <div className="blog-card__header">
                <span className="blog-card__product">{getProductLabel(post.product)}</span>
                <span className="blog-card__date">{formatDate(post.date)}</span>
              </div>
              {post.external ? (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-card__link"
                >
                  <h3 className="blog-card__title">
                    {post.title}
                    <span className="blog-card__external" aria-hidden="true">
                      {' '}
                      ↗
                    </span>
                  </h3>
                </a>
              ) : (
                <Link to={post.url} className="blog-card__link">
                  <h3 className="blog-card__title">{post.title}</h3>
                </Link>
              )}
              {post.description && <p className="blog-card__description">{post.description}</p>}
              {post.tags.length > 0 && (
                <div className="blog-card__tags">
                  {post.tags.map(tag => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              )}
              {post.readTime && <span className="blog-card__read-time">{post.readTime}</span>}
            </article>
          ))}
      </div>
    </div>
  )
}
