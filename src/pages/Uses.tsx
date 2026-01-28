import { Prompt } from '../components/terminal'
import { ExternalLink } from '../components/ui'
import { usesData } from '../data/uses'
import './Uses.css'

export default function Uses() {
  return (
    <div className="uses">
      <header className="uses__header">
        <Prompt command="cat" args="./uses.md" />
      </header>

      <p className="uses__intro">
        A collection of tools, hardware, and software I use daily for work and personal projects.
      </p>

      <div className="uses__sections">
        {usesData.map(category => (
          <section key={category.name} className="uses__section">
            <h2 className="uses__section-title"># {category.name.toLowerCase()}</h2>
            <ul className="uses__list">
              {category.items.map((item, index) => (
                <li key={index} className="uses__item">
                  <span className="uses__item-name">
                    {item.url ? (
                      <ExternalLink href={item.url}>{item.name}</ExternalLink>
                    ) : (
                      item.name
                    )}
                  </span>
                  {item.description && (
                    <span className="uses__item-description">{item.description}</span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
