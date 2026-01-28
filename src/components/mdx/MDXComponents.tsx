import { ComponentPropsWithoutRef } from 'react'
import CodeBlock from './CodeBlock'
import Callout from './Callout'

// Define MDX component mappings
export const mdxComponents = {
  // Override code blocks
  pre: ({ children, ...props }: ComponentPropsWithoutRef<'pre'>) => {
    return <pre {...props}>{children}</pre>
  },
  code: ({ children, className, ...props }: ComponentPropsWithoutRef<'code'>) => {
    // If it's an inline code block (no className), render normally
    if (!className) {
      return <code {...props}>{children}</code>
    }
    // Otherwise it's a code block
    return <CodeBlock className={className}>{children}</CodeBlock>
  },
  // Custom components
  Callout,
}
