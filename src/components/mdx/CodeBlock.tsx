import { ReactNode } from 'react'

interface CodeBlockProps {
  children: ReactNode
  className?: string
}

export default function CodeBlock({ children, className }: CodeBlockProps) {
  const language = className?.replace('language-', '') || ''

  return (
    <div className="code-block">
      {language && (
        <div className="code-block__header">
          <span className="code-block__language">{language}</span>
        </div>
      )}
      <pre className={className}>
        <code>{children}</code>
      </pre>
    </div>
  )
}
