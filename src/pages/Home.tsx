import { TerminalWindow, Prompt, Cursor } from '../components/terminal'
import { SectionCard, PostCard } from '../components/cards'
import { ExternalLink } from '../components/ui'
import { socialLinks } from '../data/social'
import { posts } from '../utils/posts'
import './Home.css'

export default function Home() {
  const recentPosts = posts.slice(0, 4)

  return (
    <div className="home">
      {/* Hero Terminal */}
      <TerminalWindow title="~/gavyncaldwell">
        <div className="home__hero">
          <Prompt command="whoami" />
          <div className="terminal-output">
            <p>Gavyn Caldwell — Software Engineer</p>
          </div>

          <Prompt command="cat" args="./bio.md" />
          <div className="terminal-output">
            <p>
              I build things on the web. Currently focused on frontend development,
              developer tooling, and exploring the intersection of great UX and
              engineering.
            </p>
            <p>
              When I'm not coding, you'll find me tinkering with my homelab,
              brewing coffee, or working on my car.
            </p>
          </div>

          <div className="prompt">
            <span className="prompt__chevron">❯</span>
            <Cursor />
          </div>
        </div>
      </TerminalWindow>

      {/* Two Column Grid */}
      <div className="home__grid">
        <SectionCard title="status">
          <ul className="home__status-list">
            <li>
              <span className="home__status-label">location</span>
              <span className="home__status-value">United States</span>
            </li>
            <li>
              <span className="home__status-label">role</span>
              <span className="home__status-value">Senior Software Engineer</span>
            </li>
            <li>
              <span className="home__status-label">focus</span>
              <span className="home__status-value">Frontend & DevX</span>
            </li>
          </ul>
        </SectionCard>

        <SectionCard title="currently">
          <ul className="home__currently-list">
            <li>
              <span className="home__currently-label">building</span>
              <span className="home__currently-value">developer tools</span>
            </li>
            <li>
              <span className="home__currently-label">learning</span>
              <span className="home__currently-value">Rust & systems programming</span>
            </li>
            <li>
              <span className="home__currently-label">reading</span>
              <span className="home__currently-value">Designing Data-Intensive Apps</span>
            </li>
          </ul>
        </SectionCard>
      </div>

      {/* Recent Writing */}
      <SectionCard title="writing" action={{ label: "all posts", href: "/writing" }}>
        <div className="home__posts">
          {recentPosts.length > 0 ? (
            recentPosts.map(post => (
              <PostCard
                key={post.slug}
                slug={post.slug}
                title={post.title}
                date={post.date}
                tags={post.tags}
              />
            ))
          ) : (
            <p className="home__empty">No posts yet. Check back soon!</p>
          )}
        </div>
      </SectionCard>

      {/* Connect */}
      <SectionCard title="connect">
        <ul className="home__social-list">
          {socialLinks.map(link => (
            <li key={link.name}>
              <ExternalLink href={link.url}>
                {link.name}
              </ExternalLink>
              <span className="home__social-username">{link.username}</span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  )
}
