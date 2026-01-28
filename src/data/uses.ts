export interface UsesCategory {
  name: string
  items: UsesItem[]
}

export interface UsesItem {
  name: string
  description?: string
  url?: string
}

export const usesData: UsesCategory[] = [
  {
    name: "Development",
    items: [
      { name: "Neovim", description: "Primary editor, heavily customized", url: "https://neovim.io" },
      { name: "VS Code", description: "For larger projects and debugging", url: "https://code.visualstudio.com" },
      { name: "Wezterm", description: "GPU-accelerated terminal", url: "https://wezfurlong.org/wezterm" },
      { name: "tmux", description: "Terminal multiplexer for session management" },
      { name: "lazygit", description: "Terminal UI for git", url: "https://github.com/jesseduffield/lazygit" }
    ]
  },
  {
    name: "Hardware",
    items: [
      { name: "Custom PC", description: "Ryzen 9 5900X, 64GB RAM, RTX 3080" },
      { name: "Keychron K2", description: "Mechanical keyboard with Gateron Browns" },
      { name: "Logitech MX Master 3", description: "Best mouse for productivity" },
      { name: "Dell U2720Q", description: "27\" 4K monitor" }
    ]
  },
  {
    name: "Software",
    items: [
      { name: "Fedora Linux", description: "Daily driver OS" },
      { name: "Firefox", description: "Primary browser" },
      { name: "Obsidian", description: "Notes and knowledge management", url: "https://obsidian.md" },
      { name: "Bitwarden", description: "Password manager", url: "https://bitwarden.com" }
    ]
  },
  {
    name: "Homelab",
    items: [
      { name: "Proxmox VE", description: "Hypervisor for VMs and containers" },
      { name: "TrueNAS", description: "Network storage with ZFS" },
      { name: "Traefik", description: "Reverse proxy and load balancer" },
      { name: "Docker", description: "Container runtime for services" }
    ]
  },
  {
    name: "Coffee",
    items: [
      { name: "Baratza Encore", description: "Reliable burr grinder" },
      { name: "AeroPress", description: "Quick and clean brewing" },
      { name: "Chemex", description: "For weekend pour-overs" },
      { name: "Local roaster beans", description: "Supporting local businesses" }
    ]
  }
]
