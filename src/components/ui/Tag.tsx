import { ReactNode } from 'react'
import './Tag.css'

interface TagProps {
  children: ReactNode
}

export default function Tag({ children }: TagProps) {
  return <span className="tag">{children}</span>
}
