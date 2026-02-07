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
    company: 'Koddi',
    role: 'Senior Frontend Developer',
    period: '2023 - Present',
    description:
      'Building enterprise advertising analytics dashboards and leading significant modernization efforts.',
    highlights: [
      'Spearheaded AI tooling adoption across engineering teams, training 8+ developers on Claude, GitHub Copilot, and custom GPT workflows',
      'Built 5+ custom AI agents, hooks, and skills; designed dual-purpose documentation for developers and AI assistants',
      'Rebuilt legacy Angular 1 application from the ground up using React, Vite, TypeScript, and Chakra UI',
      'Developed hybrid architecture allowing Angular and React to operate side by side during migration',
      'Built complex data visualization features using AG Grid and Highcharts',
    ],
    current: true,
  },
  {
    company: 'Ask Hoodie',
    role: 'Senior Frontend Developer',
    period: '2022 - 2023',
    description:
      'Drove success in consumer-facing and white-label applications using Next.js and React.',
    highlights: [
      'Boosted daily impressions from 50 to over 50,000 within six months via SEO and SSR with Next.js',
      'Integrated Algolia search for fast, relevant results across thousands of content items',
      'Enhanced test coverage by over 50% using Cypress, Jest, and React Testing Library',
    ],
  },
  {
    company: 'Quivers',
    role: 'Lead UI Engineer',
    period: '2018 - 2022',
    description:
      'Led a distributed frontend team of 5 developers building multiple e-commerce products.',
    highlights: [
      'Rebuilt legacy Angular 1 e-commerce application from the ground up using React, Redux, and Material UI',
      'Built scalable, reusable component solutions that optimized development efficiency',
      'Collaborated closely with stakeholders, backend developers, and designers',
    ],
  },
  {
    company: 'Clearlink',
    role: 'Frontend Developer',
    period: '2018',
    description: 'Developed high-converting SEO and PPC landing pages for Verizon.',
    highlights: [
      'Contributed to breaking multiple conversion, SEO, PPC, and revenue records',
      'Collaborated with designers, copywriters, SEO specialists, and PPC managers',
    ],
  },
  {
    company: 'Nav',
    role: 'Associate Software Engineer',
    period: '2016 - 2017',
    description: 'Developed fintech web applications with React, Redux, and Node.js.',
    highlights: [
      'Collaborated across departments to create enterprise applications establishing a new revenue stream',
      'Developed custom UI components as part of a shared UI library',
      'Built internal tools and automation scripts for CSS cleanup and visual regression testing',
    ],
  },
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
    name: 'terminal-portfolio',
    description:
      "This portfolio site you're looking at — terminal aesthetic with React and TypeScript",
    github: 'https://github.com/gavyncaldwell/terminal-portfolio',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    name: 'Unclouded',
    description: 'A degoogling resource site with interconnected privacy-focused products',
    tags: ['Privacy', 'FOSS', 'Web'],
  },
  {
    name: 'Homelab Infrastructure',
    description: 'Self-hosted services on Unraid including Nextcloud, Immich, and Vaultwarden',
    tags: ['Docker', 'Unraid', 'Self-hosted'],
  },
]
