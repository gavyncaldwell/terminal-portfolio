import { Prompt } from '../../components/terminal'
import { ExternalLink } from '../../components/ui'
import { SEO } from '../../components/seo'
import { socialLinks } from '../../data/social'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <SEO
        title="Contact"
        canonical="/contact"
        description="Get in touch with Gavyn Caldwell. Reach out for collaboration, projects, or just to connect."
      />

      <header className="contact__header">
        <Prompt command="./contact.sh" />
      </header>

      <div className="contact__content">
        <section className="contact__section">
          <h2 className="contact__section-title"># get in touch</h2>
          <p className="contact__text">
            I'm always open to discussing new projects, interesting ideas, or opportunities to
            collaborate. Feel free to reach out through any of the channels below.
          </p>
        </section>

        <section className="contact__section">
          <h2 className="contact__section-title"># availability</h2>
          <div className="contact__availability">
            <span className="contact__status contact__status--busy" />
            <span>Currently employed full-time, but open to interesting conversations</span>
          </div>
        </section>

        <section className="contact__section">
          <h2 className="contact__section-title"># channels</h2>
          <ul className="contact__links">
            {socialLinks.map(link => (
              <li key={link.name} className="contact__link-item">
                <span className="contact__link-name">{link.name}</span>
                <ExternalLink href={link.url}>{link.username}</ExternalLink>
              </li>
            ))}
          </ul>
        </section>

        <section className="contact__section">
          <h2 className="contact__section-title"># prefer email?</h2>
          <p className="contact__text">
            Drop me a line at{' '}
            <a href="mailto:code@gavyncaldwell.com" className="contact__email">
              code@gavyncaldwell.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
