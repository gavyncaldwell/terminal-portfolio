import { Link } from 'react-router-dom'
import Tag from '../ui/Tag'
import { formatDate } from '../../utils/formatDate'
import './PostCard.css'

interface PostCardProps {
  slug: string
  title: string
  date: string
  tags?: string[]
}

export default function PostCard({ slug, title, date, tags }: PostCardProps) {
  return (
    <article className="post-card">
      <Link to={`/writing/${slug}`} className="post-card__link">
        <span className="post-card__hash">#</span>
        <span className="post-card__title">{title}</span>
        <span className="post-card__date">{formatDate(date)}</span>
      </Link>
      {tags && tags.length > 0 && (
        <div className="post-card__tags">
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      )}
    </article>
  )
}
