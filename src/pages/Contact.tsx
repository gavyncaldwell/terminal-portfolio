import { Prompt } from '../components/terminal'
import { ExternalLink } from '../components/ui'
import { socialLinks } from '../data/social'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact">
      <header className="contact__header">
        <Prompt command="./contact.sh" />
      </header>

      <div className="contact__content">
        <section className="contact__section">
          <h2 className="contact__section-title"># get in touch</h2>
          <p className="contact__text">
            I'm always open to discussing new projects, interesting ideas, or opportunities
            to collaborate. Feel free to reach out through any of the channels below.
          </p>
        </section>

        <section className="contact__section">
          <h2 className="contact__section-title"># availability</h2>
          <div className="contact__availability">
            <span className="contact__status contact__status--available" />
            <span>Currently available for freelance work and consulting</span>
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
            <a href="mailto:hello@gavyncaldwell.com" className="contact__email">
              hello@gavyncaldwell.com
            </a>
          </p>
        </section>
      </div>
    </div>
  )
}
