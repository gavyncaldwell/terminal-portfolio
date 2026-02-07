import { ReactNode } from 'react'
import './ExternalLink.css'

interface ExternalLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export default function ExternalLink({ href, children, className = '' }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`external-link ${className}`}
    >
      {children}
      <span className="external-link__icon" aria-hidden="true">
        ↗
      </span>
    </a>
  )
}
