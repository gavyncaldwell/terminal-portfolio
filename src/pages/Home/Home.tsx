import { useEffect, useState } from 'react'
import { TerminalWindow, InteractiveTerminal, Prompt, Cursor } from '../../components/terminal'
import { SectionCard } from '../../components/cards'
import { ExternalLink } from '../../components/ui'
import { SEO, PersonSchema } from '../../components/seo'
import { socialLinks } from '../../data/social'
import { getYearsOfExperience } from '../../utils/experience'
import './Home.css'

const DESKTOP_BREAKPOINT = 768

export default function Home() {
  const yearsExperience = getYearsOfExperience()
  const [isDesktop, setIsDesktop] = useState(true)
  const [mounted, setMounted] = useState(false)

  // Handle mount and resize
  useEffect(() => {
    setMounted(true)
    setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= DESKTOP_BREAKPOINT)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Static welcome content that appears before the interactive terminal
  const staticWelcome = (
    <div className="home__static-terminal">
      <Prompt command="whoami" />
      <div className="terminal-output">
        <p>Gavyn Caldwell — Senior Frontend Developer, privacy advocate, and serial hobbyist.</p>
        <p>
          {yearsExperience} years building for the web. React, TypeScript, Next.js. Currently
          leading AI tooling adoption at Koddi.
        </p>
      </div>

      <Prompt command="cat" args="./bio.md" />
      <div className="terminal-output">
        <p>
          I specialize in large-scale application modernization—rebuilding legacy Angular apps with
          modern React architecture. I've trained teams on AI-assisted development workflows and
          built custom agents to accelerate how we ship code.
        </p>
        <p>
          Strong believer in owning your data. I run a degoogled phone, self-host everything I can,
          and prefer terminal-native workflows. When I'm not coding, I'm brewing specialty coffee,
          drifting RC cars, or wrenching on my GTI.
        </p>
      </div>

      <div className="terminal-output terminal-output--hint">
        <p>Type "help" for commands, or "ls" to see pages.</p>
      </div>
    </div>
  )

  return (
    <div className="home">
      <SEO
        canonical="/"
        description="Senior Frontend Developer specializing in React, TypeScript, and Next.js. Leading AI tooling adoption at Koddi."
      />
      <PersonSchema />

      {/* Hero Terminal */}
      <TerminalWindow title="~/gavyncaldwell">
        {staticWelcome}
        {mounted && isDesktop ? (
          <InteractiveTerminal autoFocus />
        ) : (
          <div className="home__hero">
            <div className="prompt">
              <span className="prompt__chevron">❯</span>
              <Cursor />
            </div>
          </div>
        )}
      </TerminalWindow>

      {/* Two Column Grid */}
      <div className="home__grid">
        <SectionCard title="status">
          <ul className="home__status-list">
            <li>
              <span className="home__status-label">location</span>
              <span className="home__status-value">Ogden, Utah (Remote)</span>
            </li>
            <li>
              <span className="home__status-label">role</span>
              <span className="home__status-value">Senior Frontend Developer @ Koddi</span>
            </li>
            <li>
              <span className="home__status-label">focus</span>
              <span className="home__status-value">React, AI Tooling & Modernization</span>
            </li>
          </ul>
        </SectionCard>

        <SectionCard title="currently">
          <ul className="home__currently-list">
            <li>
              <span className="home__currently-label">building</span>
              <span className="home__currently-value">Claude Code plugins & custom AI agents</span>
            </li>
            <li>
              <span className="home__currently-label">shipping</span>
              <span className="home__currently-value">React modernization at Koddi</span>
            </li>
            <li>
              <span className="home__currently-label">tinkering</span>
              <span className="home__currently-value">Unclouded — a degoogling resource</span>
            </li>
            <li>
              <span className="home__currently-label">learning</span>
              <span className="home__currently-value">Neovim & terminal-native workflows</span>
            </li>
            <li>
              <span className="home__currently-label">exploring</span>
              <span className="home__currently-value">Pico-8 & Godot game dev</span>
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Connect */}
      <SectionCard title="connect">
        <ul className="home__social-list">
          {socialLinks.map(link => (
            <li key={link.name}>
              <ExternalLink href={link.url}>{link.name}</ExternalLink>
              <span className="home__social-username">{link.username}</span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  )
}
