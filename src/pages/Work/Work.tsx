import { Prompt } from '../../components/terminal'
import { ExternalLink } from '../../components/ui'
import { SEO } from '../../components/seo'
import { workExperience, projects } from '../../data/work'
import './Work.css'

export default function Work() {
  const currentRole = workExperience.find(w => w.current)
  const previousRoles = workExperience.filter(w => !w.current)

  return (
    <div className="work">
      <SEO
        title="Work"
        canonical="/work"
        description="Professional experience and projects by Gavyn Caldwell. Senior Frontend Developer with expertise in React modernization and AI tooling."
      />

      <header className="work__header">
        <Prompt command="ls" args="-la ./work" />
      </header>

      {/* Current Role */}
      {currentRole && (
        <section className="work__section">
          <h2 className="work__section-title"># current</h2>
          <div className="work__role work__role--current">
            <div className="work__role-header">
              <h3 className="work__company">{currentRole.company}</h3>
              <span className="work__period">{currentRole.period}</span>
            </div>
            <p className="work__position">{currentRole.role}</p>
            <p className="work__description">{currentRole.description}</p>
            {currentRole.highlights && (
              <ul className="work__highlights">
                {currentRole.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            )}
          </div>
        </section>
      )}

      {/* Previous Experience */}
      <section className="work__section">
        <h2 className="work__section-title"># previous</h2>
        <div className="work__list">
          {previousRoles.map((role, index) => (
            <div key={index} className="work__role">
              <div className="work__role-header">
                <h3 className="work__company">{role.company}</h3>
                <span className="work__period">{role.period}</span>
              </div>
              <p className="work__position">{role.role}</p>
              <p className="work__description">{role.description}</p>
              {role.highlights && (
                <ul className="work__highlights">
                  {role.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      {projects.length > 0 && (
        <section className="work__section">
          <h2 className="work__section-title"># projects</h2>
          <div className="work__projects">
            {projects.map((project, index) => (
              <div key={index} className="work__project">
                <div className="work__project-header">
                  <h3 className="work__project-name">
                    {project.github ? (
                      <ExternalLink href={project.github}>{project.name}</ExternalLink>
                    ) : project.url ? (
                      <ExternalLink href={project.url}>{project.name}</ExternalLink>
                    ) : (
                      project.name
                    )}
                  </h3>
                </div>
                <p className="work__project-description">{project.description}</p>
                <div className="work__project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="work__project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
