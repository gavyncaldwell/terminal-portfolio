// Feed registry — add a new site by adding a URL here.
// Each site must serve /api/posts.json matching the BlogPost schema.

export interface FeedSource {
  id: string
  name: string
  url: string
  siteUrl: string
}

export const feedSources: FeedSource[] = [
  {
    id: 'loosewire',
    name: 'Loosewire',
    url: 'https://loosewire.dev/api/posts.json',
    siteUrl: 'https://loosewire.dev',
  },
  // When unclouded launches, add it here:
  // {
  //   id: 'unclouded',
  //   name: 'Unclouded',
  //   url: 'https://unclouded.dev/api/posts.json',
  //   siteUrl: 'https://unclouded.dev',
  // },
]
