export interface GearCategory {
  name: string
  items: GearItem[]
}

export interface GearItem {
  name: string
  description?: string
  url?: string
}

export const gearData: GearCategory[] = [
  {
    name: 'Development',
    items: [
      {
        name: 'Zed',
        description: 'Primary editor — fast, collaborative, Rust-based',
        url: 'https://zed.dev',
      },
      {
        name: 'Neovim',
        description: 'Learning and customizing for terminal-native editing',
        url: 'https://neovim.io',
      },
      {
        name: 'Ghostty',
        description: 'GPU-accelerated terminal emulator',
        url: 'https://ghostty.org',
      },
      {
        name: 'Zellij',
        description: 'Terminal multiplexer with a modern UI',
        url: 'https://zellij.dev',
      },
      {
        name: 'Oh My Zsh',
        description: 'Zsh framework for managing shell configuration',
        url: 'https://ohmyz.sh',
      },
      {
        name: 'lazygit',
        description: 'Terminal UI for git',
        url: 'https://github.com/jesseduffield/lazygit',
      },
      {
        name: 'fzf',
        description: 'Command-line fuzzy finder',
        url: 'https://github.com/junegunn/fzf',
      },
      {
        name: 'ripgrep',
        description: 'Fast recursive search tool',
        url: 'https://github.com/BurntSushi/ripgrep',
      },
      {
        name: 'zoxide',
        description: 'Smarter cd command',
        url: 'https://github.com/ajeetdsouza/zoxide',
      },
      { name: 'yazi', description: 'Terminal file manager', url: 'https://github.com/sxyazi/yazi' },
      { name: 'Claude Code', description: 'AI-powered CLI for development' },
    ],
  },
  {
    name: 'Hardware',
    items: [
      {
        name: 'Custom SFF PC',
        description:
          'Fractal Terra, Ryzen 7 7700X, 32GB RAM, RX 7800 XT, ASRock A620I Lightning WiFi',
        url: 'https://www.fractal-design.com/products/cases/terra/terra/jade/',
      },
      {
        name: 'ErgoDox EZ',
        description: 'Split ergonomic mechanical keyboard',
        url: 'https://ergodox-ez.com',
      },
      {
        name: 'Ploopy Adept',
        description: 'Open-source trackball mouse',
        url: 'https://ploopy.co/adept-trackball',
      },
      { name: 'Acer XR382CQK', description: '38" curved ultrawide monitor' },
    ],
  },
  {
    name: 'Software',
    items: [
      { name: 'Fedora Linux', description: 'Daily driver OS' },
      { name: 'Helium', description: 'Privacy-focused browser' },
      {
        name: 'GrapheneOS',
        description: 'Completely degoogled mobile OS',
        url: 'https://grapheneos.org',
      },
      {
        name: 'Tailscale',
        description: 'Mesh VPN for secure networking',
        url: 'https://tailscale.com',
      },
    ],
  },
  {
    name: 'Homelab',
    items: [
      {
        name: 'Unraid',
        description: 'NAS OS running on home server "Isengard"',
        url: 'https://unraid.net',
      },
      {
        name: 'Nextcloud',
        description: 'Self-hosted cloud storage and productivity',
        url: 'https://nextcloud.com',
      },
      {
        name: 'Immich',
        description: 'Self-hosted Google Photos alternative',
        url: 'https://immich.app',
      },
      {
        name: 'Home Assistant',
        description: 'Home automation and smart home control',
        url: 'https://www.home-assistant.io',
      },
      { name: 'Vaultwarden', description: 'Self-hosted Bitwarden server' },
      { name: 'Docker', description: 'Container runtime for all services' },
    ],
  },
  {
    name: 'Coffee',
    items: [
      {
        name: 'Flair 58 Pro',
        description: 'Manual lever espresso — SOUP method brewing',
        url: 'https://flairespresso.com/product/flair-58',
      },
      { name: 'Turin DM47', description: 'Single-dose low-RPM grinder (discontinued)' },
      {
        name: 'Hario Switch',
        description: 'Immersion/pour-over hybrid dripper',
        url: 'https://www.hario-usa.com/collections/switch',
      },
      {
        name: 'AeroPress',
        description: 'Versatile travel-friendly brewer',
        url: 'https://aeropress.com',
      },
      { name: 'Third Wave Water', description: 'Mineral packets for consistent brewing' },
      {
        name: 'Black and White Roasters',
        description: 'Exclusively — naturally processed, funky and fruity',
        url: 'https://www.blackwhiteroasters.com',
      },
    ],
  },
  {
    name: 'RC Drift',
    items: [
      {
        name: 'Reve D RDX',
        description: 'Primary RWD drift chassis — GR Corolla body',
        url: 'https://www.amainhobbies.com/reve-d-rdx-1-10-rwd-electric-drift-car-kit-no-body-rv-rkd-rdx/p1464559',
      },
      {
        name: '3Racing Sakura D6',
        description: 'Secondary chassis — 240Z body',
        url: 'https://supergdrift.com/products/sakura-d6-1-10-rwd-drift-chassis-kit-3racing-3r-d6kit',
      },
      {
        name: 'Futaba 6PV',
        description: '6-channel surface transmitter',
        url: 'https://futabausa.com/product/6pv',
      },
      {
        name: 'Futaba Servos',
        description: 'High-precision steering servos',
        url: 'https://futabausa.com/product-category/servos',
      },
      {
        name: 'Hobbywing Electronics',
        description: 'ESCs and brushless motors',
        url: 'https://www.hobbywingdirect.com',
      },
      { name: 'Slide Logic', description: 'Drift team membership' },
    ],
  },
  {
    name: 'GTI Build',
    items: [
      { name: '2003 VW GTI 1.8T', description: 'MK4 chassis — heavily modified' },
      { name: 'Target: 600-700hp', description: 'Fully forged 1.8T motor build' },
      { name: '3576 Turbo', description: 'Big turbo upgrade planned' },
      { name: 'Built 02M Transmission', description: 'Strengthened gearbox for power' },
    ],
  },
]
