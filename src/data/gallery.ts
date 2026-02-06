export interface GalleryImage {
  src: string
  alt: string
  caption?: string
  category: 'setup' | 'coffee' | 'life'
  size?: 'featured' | 'wide' | 'tall'
}

export const galleryImages: GalleryImage[] = [
  // Setup - Desk
  {
    src: '/images/gallery/desk-setup-3.webp',
    alt: 'Full desk setup with ultrawide monitor and speakers',
    caption: 'The command center — 38" ultrawide, ErgoDox EZ, and studio monitors',
    category: 'setup',
    size: 'featured'
  },
  {
    src: '/images/gallery/desk-setup-4.webp',
    alt: 'Desk setup front view',
    caption: 'Front view — Fractal Terra, split keyboard, and way too many plants',
    category: 'setup',
    size: 'wide'
  },
  {
    src: '/images/gallery/pc-build-gpu.webp',
    alt: 'Fractal Terra PC build GPU side',
    caption: 'GPU side — RX 7800 XT fitting perfectly',
    category: 'setup'
  },
  {
    src: '/images/gallery/desk-setup-5.webp',
    alt: 'Full room view with standing desk',
    caption: 'The full setup — standing desk life',
    category: 'setup',
    size: 'tall'
  },
  {
    src: '/images/gallery/desk-setup-1.webp',
    alt: 'Desk setup angle with Fractal Terra',
    caption: 'Close up on the Fractal Terra and Ploopy trackball',
    category: 'setup'
  },
  {
    src: '/images/gallery/desk-setup-2.webp',
    alt: 'Desk setup with plants and guitar',
    caption: 'Where the magic happens — plants, guitar, and code',
    category: 'setup'
  },
  {
    src: '/images/gallery/pc-build-internals.webp',
    alt: 'Fractal Terra PC build internals showing PSU and cooling',
    caption: 'Fractal Terra internals — 850W SFX, big tower cooler in a tiny case',
    category: 'setup'
  },
  {
    src: '/images/gallery/linux-desktop.jpeg',
    alt: 'Fedora Linux desktop screenshot',
    caption: 'Fedora + GNOME — terminal-native everything',
    category: 'setup',
    size: 'wide'
  },
  // Coffee
  {
    src: '/images/gallery/coffee-station-2.jpeg',
    alt: 'Coffee station alternate angle',
    caption: 'Where I spend too much time dialing in shots',
    category: 'coffee',
    size: 'featured'
  },
  {
    src: '/images/gallery/coffee-station.jpg',
    alt: 'Coffee station with Flair 58 and grinder',
    caption: 'The coffee corner — Flair 58, Turin DM47, and too many beans',
    category: 'coffee'
  },
  {
    src: '/images/gallery/coffee-beans.jpg',
    alt: 'Black and White Roasters coffee bags',
    caption: 'The good stuff — Black and White Roasters naturals',
    category: 'coffee',
    size: 'tall'
  },
  // Life
  {
    src: '/images/gallery/headshot.jpg',
    alt: 'Gavyn Caldwell',
    caption: 'That\'s me',
    category: 'life'
  },
  {
    src: '/images/gallery/snake-plant.jpg',
    alt: 'Flowering snake plant',
    caption: 'When your snake plant flowers, you\'re doing something right',
    category: 'life',
    size: 'tall'
  },
  {
    src: '/images/gallery/car.jpeg',
    alt: 'Blue Kia Stinger',
    caption: 'The daily — Kia Stinger GT',
    category: 'life',
    size: 'wide'
  },
  {
    src: '/images/gallery/garden.jpeg',
    alt: 'Front garden',
    caption: 'The garden — growing my own food',
    category: 'life'
  }
]
