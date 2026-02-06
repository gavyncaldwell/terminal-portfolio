import { Prompt } from '../components/terminal'
import { getYearsOfExperience } from '../utils/experience'
import './About.css'

export default function About() {
  const yearsExperience = getYearsOfExperience()

  return (
    <div className="about">
      <header className="about__header">
        <Prompt command="cat" args="./about.md" />
      </header>

      <div className="about__content">
        {/* Intro with headshot */}
        <section className="about__section about__section--intro">
          <div className="about__intro-content">
            <img
              src="/images/gallery/headshot.jpg"
              alt="Gavyn Caldwell"
              className="about__headshot"
            />
            <div className="about__intro-text">
              <h2 className="about__section-title"># who i am</h2>
              <p className="about__text">
                I'm Gavyn Caldwell, a Senior Frontend Developer based in Ogden, Utah with {yearsExperience} years
                of experience building for the web. I specialize in React, TypeScript, and Next.js, with a
                focus on large-scale application modernization and developer experience.
              </p>
              <p className="about__text">
                Currently at Koddi, I'm leading AI tooling adoption across engineering teams and rebuilding
                legacy Angular applications with modern React architecture.
              </p>
            </div>
          </div>
        </section>

        {/* Setup image */}
        <figure className="about__figure">
          <img
            src="/images/gallery/desk-setup-4.webp"
            alt="My desk setup"
            className="about__image"
          />
          <figcaption className="about__figcaption">The command center — where I spend most of my time</figcaption>
        </figure>

        <section className="about__section">
          <h2 className="about__section-title"># what drives me</h2>
          <p className="about__text">
            I'm passionate about building high-quality, scalable web solutions that drive both business
            growth and developer productivity. I believe in the power of modern tooling and AI-assisted
            workflows to transform how we build software—but I also know when human judgment and domain
            expertise are irreplaceable.
          </p>
          <p className="about__text">
            I'm a strong advocate for privacy and FOSS (Free and Open Source Software). I run a completely
            degoogled phone on GrapheneOS and maintain an extensive self-hosted infrastructure on my home
            server. I prefer terminal-native workflows and believe in owning your own data.
          </p>
        </section>

        <section className="about__section">
          <h2 className="about__section-title"># technical philosophy</h2>
          <div className="about__columns">
            <div className="about__column">
              <p className="about__list-header">Where I leverage AI:</p>
              <ul className="about__list">
                <li>Accelerating boilerplate code generation</li>
                <li>Generating test cases and documentation</li>
                <li>Rubber-ducking complex architecture decisions</li>
                <li>Rapid prototyping and exploration</li>
              </ul>
            </div>
            <div className="about__column">
              <p className="about__list-header">Where I rely on human expertise:</p>
              <ul className="about__list">
                <li>Nuanced code review requiring domain knowledge</li>
                <li>Business logic where institutional context is critical</li>
                <li>Architectural decisions with long-term implications</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Coffee setup */}
        <figure className="about__figure">
          <img
            src="/images/gallery/coffee-station-2.jpeg"
            alt="Coffee station"
            className="about__image"
          />
          <figcaption className="about__figcaption">The coffee corner — where I dial in shots and procrastinate</figcaption>
        </figure>

        <section className="about__section">
          <h2 className="about__section-title"># beyond the keyboard</h2>
          <p className="about__text">
            When I'm not writing code, I have a few obsessions that keep me busy:
          </p>
          <div className="about__hobbies-grid">
            <div className="about__hobby-card">
              <span className="about__hobby-label">coffee</span>
              <p className="about__hobby-desc">
                Specialty coffee brewing with a Flair 58 Pro, Hario Switch, and AeroPress.
                Exclusively drinking Black and White Roasters—naturally processed, funky and fruity.
              </p>
            </div>
            <div className="about__hobby-card">
              <span className="about__hobby-label">rc drift</span>
              <p className="about__hobby-desc">
                Member of the Slide Logic drift team. Running a Reve D RDX (GR Corolla) and
                3Racing Sakura D6 (240Z) with Futaba and Hobbywing electronics.
              </p>
            </div>
            <div className="about__hobby-card">
              <span className="about__hobby-label">cars</span>
              <p className="about__hobby-desc">
                Building a 2003 GTI 1.8T — planning a fully forged motor, 3576 turbo,
                and built 02M transmission targeting 600-700hp.
              </p>
            </div>
            <div className="about__hobby-card">
              <span className="about__hobby-label">homelab</span>
              <p className="about__hobby-desc">
                Self-hosted infrastructure on Unraid including Nextcloud, Immich, Home Assistant,
                and Vaultwarden. Privacy-focused and fully self-sufficient.
              </p>
            </div>
            <div className="about__hobby-card">
              <span className="about__hobby-label">creative</span>
              <p className="about__hobby-desc">
                Watercolor painting, drawing, sculpting. Playing guitar, Irish whistle,
                and ravvast drum.
              </p>
            </div>
            <div className="about__hobby-card">
              <span className="about__hobby-label">plants</span>
              <p className="about__hobby-desc">
                Growing my own food and collecting indoor plants—snake plants, haworthias,
                monsteras, and a bioactive rainbow boa enclosure.
              </p>
            </div>
          </div>
        </section>

        {/* Desktop screenshot */}
        <figure className="about__figure">
          <img
            src="/images/gallery/linux-desktop.jpeg"
            alt="Linux desktop"
            className="about__image"
          />
          <figcaption className="about__figcaption">Fedora + GNOME — terminal-native everything</figcaption>
        </figure>

        <section className="about__section">
          <h2 className="about__section-title"># key differentiators</h2>
          <ul className="about__list about__list--numbered">
            <li><strong>AI Leadership</strong> — One of the few frontend developers actively leading AI adoption, building custom agents, and training teams</li>
            <li><strong>Modernization Expert</strong> — Proven track record rebuilding legacy Angular apps with modern React architecture</li>
            <li><strong>Team Leadership</strong> — Experience leading distributed teams and mentoring engineers</li>
            <li><strong>Privacy Advocate</strong> — Unique perspective on building user-respecting applications</li>
            <li><strong>{yearsExperience} Years of React</strong> — Deep expertise from Redux to modern patterns like TanStack Query and Zustand</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
