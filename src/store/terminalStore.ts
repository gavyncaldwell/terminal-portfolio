import { create } from 'zustand'

export interface HistoryEntry {
  command: string
  output: string[]
  isError?: boolean
}

interface TerminalState {
  history: HistoryEntry[]
  isOpen: boolean
  addCommand: (entry: HistoryEntry) => void
  clearHistory: () => void
  toggleTerminal: () => void
  setTerminalOpen: (open: boolean) => void
}

export const useTerminalStore = create<TerminalState>((set) => ({
  history: [],
  isOpen: false,
  addCommand: (entry) =>
    set((state) => ({
      history: [...state.history, entry]
    })),
  clearHistory: () => set({ history: [] }),
  toggleTerminal: () => set((state) => ({ isOpen: !state.isOpen })),
  setTerminalOpen: (open) => set({ isOpen: open })
}))

// Available commands and their handlers
export const AVAILABLE_COMMANDS = [
  'help',
  'ls',
  'cd',
  'clear',
  'whoami',
  'pwd',
  'cat'
] as const

export type CommandName = (typeof AVAILABLE_COMMANDS)[number]

export const ROUTES: Record<string, string> = {
  home: '/',
  about: '/about',
  work: '/work',
  gear: '/gear',
  gallery: '/gallery',
  contact: '/contact'
}

export const ROUTE_NAMES = Object.keys(ROUTES)
