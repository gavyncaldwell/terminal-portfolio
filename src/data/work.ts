export interface WorkExperience {
  company: string
  role: string
  period: string
  description: string
  highlights?: string[]
  current?: boolean
}

export const workExperience: WorkExperience[] = [
  {
    company: "Acme Corp",
    role: "Senior Software Engineer",
    period: "2023 - Present",
    description: "Building scalable web applications and leading frontend architecture decisions.",
    highlights: [
      "Led migration from legacy codebase to React",
      "Implemented CI/CD pipeline reducing deploy time by 60%",
      "Mentored junior developers"
    ],
    current: true
  },
  {
    company: "StartupXYZ",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    description: "Developed customer-facing features and internal tools.",
    highlights: [
      "Built real-time collaboration features",
      "Designed and implemented REST APIs",
      "Reduced page load time by 40%"
    ]
  },
  {
    company: "TechCo",
    role: "Junior Developer",
    period: "2019 - 2021",
    description: "Started career building web applications with React and Node.js.",
    highlights: [
      "Contributed to open source projects",
      "Built internal dashboard tools"
    ]
  }
]

export interface Project {
  name: string
  description: string
  url?: string
  github?: string
  tags: string[]
}

export const projects: Project[] = [
  {
    name: "terminal-portfolio",
    description: "This portfolio site you're looking at",
    github: "https://github.com/gavyncaldwell/terminal-portfolio",
    tags: ["React", "TypeScript", "Vite"]
  },
  {
    name: "homelab-configs",
    description: "Infrastructure as code for my homelab setup",
    github: "https://github.com/gavyncaldwell/homelab-configs",
    tags: ["Docker", "Ansible", "Linux"]
  }
]
