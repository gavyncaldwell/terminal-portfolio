import { useParams, Link } from 'react-router-dom'
import { Prompt } from '../../components/terminal'
import { SEO, BlogPostingSchema } from '../../components/seo'
import { getPostBySlug, getAdjacentPosts } from '../../utils/posts'
import { formatDate } from '../../utils/formatDate'
import '../../styles/mdx.css'
import './WritingPost.css'

export default function WritingPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getPostBySlug(slug) : null
  const { prev, next } = slug ? getAdjacentPosts(slug) : { prev: null, next: null }

  if (!post) {
    return (
      <div className="writing-post">
        <SEO title="Post Not Found" noindex />
        <header className="writing-post__header">
          <Prompt command="cat" args={`./writing/${slug || 'unknown'}.mdx`} />
        </header>
        <div className="writing-post__error">
          <p>Post not found.</p>
          <Link to="/writing">← Back to all posts</Link>
        </div>
      </div>
    )
  }

  const PostContent = post.component

  return (
    <div className="writing-post">
      <SEO
        title={post.title}
        description={post.description}
        canonical={`/writing/${slug}`}
        ogType="article"
        article={{
          publishedTime: post.date,
          author: 'Gavyn Caldwell',
          tags: post.tags,
        }}
      />
      <BlogPostingSchema
        title={post.title}
        description={post.description}
        datePublished={post.date}
        slug={slug!}
        tags={post.tags}
      />

      <header className="writing-post__header">
        <Prompt command="cat" args={`./writing/${slug}.mdx`} />
      </header>

      <article className="writing-post__article">
        <div className="writing-post__meta">
          <h1 className="writing-post__title">{post.title}</h1>
          <time className="writing-post__date">{formatDate(post.date)}</time>
          {post.tags && post.tags.length > 0 && (
            <div className="writing-post__tags">
              {post.tags.map(tag => (
                <span key={tag} className="writing-post__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mdx-content">
          <PostContent />
        </div>
      </article>

      <nav className="writing-post__nav">
        <div className="writing-post__nav-prev">
          {prev && (
            <Link to={`/writing/${prev.slug}`}>
              <span className="writing-post__nav-label">← Previous</span>
              <span className="writing-post__nav-title">{prev.title}</span>
            </Link>
          )}
        </div>
        <div className="writing-post__nav-next">
          {next && (
            <Link to={`/writing/${next.slug}`}>
              <span className="writing-post__nav-label">Next →</span>
              <span className="writing-post__nav-title">{next.title}</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}
