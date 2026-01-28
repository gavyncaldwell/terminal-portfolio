import { ReactNode } from 'react'

interface CalloutProps {
  type?: 'note' | 'warning' | 'error'
  title?: string
  children: ReactNode
}

export default function Callout({ type = 'note', title, children }: CalloutProps) {
  const defaultTitles = {
    note: 'Note',
    warning: 'Warning',
    error: 'Error',
  }

  return (
    <div className={`callout callout--${type}`}>
      <div className="callout__title">{title || defaultTitles[type]}</div>
      <div className="callout__content">{children}</div>
    </div>
  )
}
