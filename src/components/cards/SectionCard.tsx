import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './SectionCard.css'

interface SectionCardProps {
  title: string
  action?: {
    label: string
    href: string
  }
  children: ReactNode
}

export default function SectionCard({ title, action, children }: SectionCardProps) {
  return (
    <section className="section-card">
      <div className="section-card__header">
        <h2 className="section-card__title">
          <span className="section-card__hash"># </span>
          {title}
        </h2>
        {action && (
          <Link to={action.href} className="section-card__action">
            {action.label} →
          </Link>
        )}
      </div>
      <div className="section-card__content">{children}</div>
    </section>
  )
}
