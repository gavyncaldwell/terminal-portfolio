export interface Video {
  id: string
  title: string
  description?: string
  date: string
  featured?: boolean
}

export const videos: Video[] = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Building a Terminal Portfolio Site',
    description: 'A walkthrough of building this portfolio site from scratch.',
    date: '2024-01-15',
    featured: true,
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'My Development Setup',
    description: 'Tour of my development environment and tools.',
    date: '2024-01-01',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Getting Started with Homelab',
    description: 'How to set up your first homelab server.',
    date: '2023-12-15',
  },
]
