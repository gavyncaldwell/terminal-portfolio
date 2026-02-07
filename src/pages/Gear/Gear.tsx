import { Prompt } from '../../components/terminal'
import { ExternalLink } from '../../components/ui'
import { SEO } from '../../components/seo'
import { gearData } from '../../data/gear'
import './Gear.css'

export default function Gear() {
  return (
    <div className="gear">
      <SEO
        title="Gear"
        canonical="/gear"
        description="Tools, hardware, and equipment used by Gavyn Caldwell for development, coffee brewing, and hobbies."
      />

      <header className="gear__header">
        <Prompt command="cat" args="./gear.md" />
      </header>

      <p className="gear__intro">
        A collection of tools, hardware, and equipment I use for work and hobbies.
      </p>

      <div className="gear__sections">
        {gearData.map(category => (
          <section key={category.name} className="gear__section">
            <h2 className="gear__section-title"># {category.name.toLowerCase()}</h2>
            <ul className="gear__list">
              {category.items.map((item, index) => (
                <li key={index} className="gear__item">
                  <span className="gear__item-name">
                    {item.url ? (
                      <ExternalLink href={item.url}>{item.name}</ExternalLink>
                    ) : (
                      item.name
                    )}
                  </span>
                  <span className="gear__item-description">{item.description}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
