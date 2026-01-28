interface PromptProps {
  command: string
  args?: string
}

export default function Prompt({ command, args }: PromptProps) {
  return (
    <div className="prompt">
      <span className="prompt__chevron">❯</span>
      <span className="prompt__command">{command}</span>
      {args && <span className="prompt__args">{args}</span>}
    </div>
  )
}
