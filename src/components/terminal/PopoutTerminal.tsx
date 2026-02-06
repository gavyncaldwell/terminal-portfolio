import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { useTerminalStore } from '../../store/terminalStore'
import InteractiveTerminal from './InteractiveTerminal'
import './PopoutTerminal.css'

export default function PopoutTerminal() {
  const { isOpen, toggleTerminal, setTerminalOpen } = useTerminalStore()
  const location = useLocation()
  const terminalRef = useRef<HTMLDivElement>(null)
  const isHomePage = location.pathname === '/'

  // Handle keyboard shortcut (only on non-home pages)
  useEffect(() => {
    if (isHomePage) return

    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl/Cmd + ` to toggle terminal
      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault()
        toggleTerminal()
      }
      // Escape to close
      if (e.key === 'Escape' && isOpen) {
        setTerminalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isHomePage, isOpen, toggleTerminal, setTerminalOpen])

  // Handle click outside (only on non-home pages)
  useEffect(() => {
    if (isHomePage) return

    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        terminalRef.current &&
        !terminalRef.current.contains(e.target as Node)
      ) {
        setTerminalOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isHomePage, isOpen, setTerminalOpen])

  // Don't render on home page since it has its own terminal
  if (isHomePage) {
    return null
  }

  return (
    <>
      <button
        className="popout-terminal__trigger"
        onClick={toggleTerminal}
        title="Toggle terminal (Ctrl + `)"
      >
        <span className="popout-terminal__trigger-icon">{'>'}_</span>
      </button>

      {isOpen && (
        <div className="popout-terminal__container" ref={terminalRef}>
          <div className="popout-terminal__header">
            <span className="popout-terminal__title">terminal</span>
            <div className="popout-terminal__controls">
              <span className="popout-terminal__hint">esc to close</span>
              <button
                className="popout-terminal__close"
                onClick={() => setTerminalOpen(false)}
              >
                ×
              </button>
            </div>
          </div>
          <InteractiveTerminal autoFocus showHistory />
        </div>
      )}
    </>
  )
}
