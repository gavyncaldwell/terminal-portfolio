import { Prompt } from '../components/terminal'
import { PostCard } from '../components/cards'
import { posts } from '../utils/posts'
import './Writing.css'

export default function Writing() {
  return (
    <div className="writing">
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
