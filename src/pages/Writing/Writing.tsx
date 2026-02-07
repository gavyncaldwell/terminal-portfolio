import { Prompt } from '../../components/terminal'
import { PostCard } from '../../components/cards'
import { SEO } from '../../components/seo'
import { posts } from '../../utils/posts'
import './Writing.css'

export default function Writing() {
  return (
    <div className="writing">
      <SEO
        title="Writing"
        canonical="/writing"
        description="Blog posts and articles by Gavyn Caldwell on frontend development, React, TypeScript, AI tooling, and more."
      />

      <header className="writing__header">
        <Prompt command="ls" args="./writing" />
      </header>

      <div className="writing__list">
        {posts.length > 0 ? (
          posts.map(post => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              tags={post.tags}
            />
          ))
        ) : (
          <p className="writing__empty">
            No posts yet. Check back soon!
          </p>
        )}
      </div>
    </div>
  )
}
