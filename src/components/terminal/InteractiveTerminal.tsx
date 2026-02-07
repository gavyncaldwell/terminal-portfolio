import { useState, useRef, useEffect, KeyboardEvent } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useTerminalStore, ROUTES, ROUTE_NAMES, HistoryEntry } from '../../store/terminalStore'
import './InteractiveTerminal.css'

interface InteractiveTerminalProps {
  autoFocus?: boolean
  showHistory?: boolean
}

export default function InteractiveTerminal({
  autoFocus = false,
  showHistory = true,
}: InteractiveTerminalProps) {
  const [input, setInput] = useState('')
  const [commandHistory, setCommandHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { history, addCommand, clearHistory } = useTerminalStore()

  const getCurrentDir = () => {
    const path = location.pathname
    if (path === '/') return '~'
    return '~' + path
  }

  const processCommand = (cmd: string): HistoryEntry => {
    const trimmed = cmd.trim().toLowerCase()
    const [command, ...args] = trimmed.split(' ')
    const arg = args.join(' ')

    switch (command) {
      case 'help':
        return {
          command: cmd,
          output: [
            'Available commands:',
            '  help          - Show this help message',
            '  ls            - List available pages',
            '  cd <page>     - Navigate to a page (e.g., cd about)',
            '  pwd           - Show current page',
            '  whoami        - About me',
            '  cat readme    - View site info',
            '  clear         - Clear terminal history',
          ],
        }

      case 'ls':
        return {
          command: cmd,
          output: ['', ...ROUTE_NAMES.map(name => `  ${name}/`), ''],
        }

      case 'cd':
        if (!arg || arg === '~' || arg === '/') {
          navigate('/')
          return { command: cmd, output: [''] }
        }

        const targetRoute = arg.replace(/^\//, '').replace(/\/$/, '')
        if (ROUTES[targetRoute]) {
          navigate(ROUTES[targetRoute])
          return { command: cmd, output: [''] }
        }

        if (arg === '..') {
          navigate('/')
          return { command: cmd, output: [''] }
        }

        return {
          command: cmd,
          output: [`cd: ${arg}: No such directory`],
          isError: true,
        }

      case 'pwd':
        return {
          command: cmd,
          output: [getCurrentDir()],
        }

      case 'whoami':
        return {
          command: cmd,
          output: [
            'Gavyn Caldwell',
            'Senior Frontend Developer',
            'Privacy advocate & serial hobbyist',
          ],
        }

      case 'cat':
        if (arg === 'readme' || arg === 'readme.md') {
          return {
            command: cmd,
            output: [
              '# gavyncaldwell.com',
              '',
              'Personal portfolio built with React, TypeScript, and Vite.',
              'Terminal aesthetic because why not.',
              '',
              'Type "ls" to see pages, "cd <page>" to navigate.',
            ],
          }
        }
        return {
          command: cmd,
          output: [`cat: ${arg || '(missing file)'}: No such file`],
          isError: true,
        }

      case 'clear':
        clearHistory()
        return { command: cmd, output: [] }

      case '':
        return { command: '', output: [] }

      default:
        return {
          command: cmd,
          output: [`command not found: ${command}`, 'Type "help" for available commands.'],
          isError: true,
        }
    }
  }

  const handleSubmit = () => {
    if (!input.trim() && input === '') {
      addCommand({ command: '', output: [] })
      return
    }

    const result = processCommand(input)
    if (input.trim()) {
      setCommandHistory(prev => [...prev, input])
    }

    if (result.command !== 'clear' || result.output.length > 0) {
      addCommand(result)
    }

    setInput('')
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      if (commandHistory.length > 0) {
        const newIndex =
          historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(newIndex)
        setInput(commandHistory[newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1)
          setInput('')
        } else {
          setHistoryIndex(newIndex)
          setInput(commandHistory[newIndex])
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault()
      // Simple tab completion for cd
      const trimmed = input.trim().toLowerCase()
      if (trimmed.startsWith('cd ')) {
        const partial = trimmed.slice(3)
        const match = ROUTE_NAMES.find(name => name.startsWith(partial))
        if (match) {
          setInput(`cd ${match}`)
        }
      }
    }
  }

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight
    }
  }, [history])

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus()
    }
  }, [autoFocus])

  const focusInput = () => {
    inputRef.current?.focus()
  }

  return (
    <div className="interactive-terminal" onClick={focusInput} ref={terminalRef}>
      {showHistory &&
        history.map((entry, i) => (
          <div key={i} className="interactive-terminal__entry">
            {entry.command !== '' && (
              <div className="interactive-terminal__command">
                <span className="interactive-terminal__prompt">
                  <span className="interactive-terminal__user">visitor</span>
                  <span className="interactive-terminal__at">@</span>
                  <span className="interactive-terminal__host">gavyncaldwell.com</span>
                  <span className="interactive-terminal__colon">:</span>
                  <span className="interactive-terminal__path">{getCurrentDir()}</span>
                  <span className="interactive-terminal__chevron">$</span>
                </span>
                <span className="interactive-terminal__input-text">{entry.command}</span>
              </div>
            )}
            {entry.output.length > 0 && (
              <div
                className={`interactive-terminal__output ${entry.isError ? 'interactive-terminal__output--error' : ''}`}
              >
                {entry.output.map((line, j) => (
                  <div key={j}>{line || '\u00A0'}</div>
                ))}
              </div>
            )}
          </div>
        ))}

      <div className="interactive-terminal__input-line">
        <span className="interactive-terminal__prompt">
          <span className="interactive-terminal__user">visitor</span>
          <span className="interactive-terminal__at">@</span>
          <span className="interactive-terminal__host">gavyncaldwell.com</span>
          <span className="interactive-terminal__colon">:</span>
          <span className="interactive-terminal__path">{getCurrentDir()}</span>
          <span className="interactive-terminal__chevron">$</span>
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="interactive-terminal__input"
          spellCheck={false}
          autoComplete="off"
          autoCapitalize="off"
        />
      </div>
    </div>
  )
}
