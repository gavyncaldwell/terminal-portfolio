import { ReactNode } from 'react'
import '../../styles/terminal.css'

interface TerminalWindowProps {
  title?: string
  children: ReactNode
  className?: string
}

export default function TerminalWindow({ title = '~', children, className = '' }: TerminalWindowProps) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <div className="terminal-dots">
          <span className="terminal-dot terminal-dot--close" />
          <span className="terminal-dot terminal-dot--minimize" />
          <span className="terminal-dot terminal-dot--maximize" />
        </div>
        <span className="terminal-title">{title}</span>
      </div>
      <div className="terminal-content">
        {children}
      </div>
    </div>
  )
}
