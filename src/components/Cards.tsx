import type { Package, PortfolioProject, Service } from '../config/site'
import { projectContactHref } from '../config/site'

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="card-number">{service.number}</div>
      <p className="card-kicker">{service.audience}</p>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <ul className="check-list">
        {service.deliverables.map((item) => <li key={item}>{item}</li>)}
      </ul>
      {service.note && <p className="card-note">{service.note}</p>}
    </article>
  )
}

export function PackageCard({ item }: { item: Package }) {
  return (
    <article className={`package-card${item.featured ? ' package-card-featured' : ''}`}>
      {item.featured && <p className="package-label">Cross-platform build</p>}
      <h3>{item.title}</h3>
      <p className="package-summary">{item.summary}</p>
      <p className="price"><span>Starting price</span>{item.price}</p>
      <ul className="check-list">
        {item.includes.map((included) => <li key={included}>{included}</li>)}
      </ul>
      {item.note && <p className="card-note">{item.note}</p>}
      <a className="text-link" href={projectContactHref}>Ask about this package <span aria-hidden="true">↗</span></a>
    </article>
  )
}

export function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <article className="project-card">
      <div className="project-index">Project slot / {String(index + 1).padStart(2, '0')}</div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <div className="tag-list" aria-label="Technologies">
        {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
      </div>
      <div className="project-handled">
        <h4>What I handled</h4>
        <ul>{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
      </div>
      {(project.projectUrl || project.detailUrl) && (
        <div className="project-links">
          {project.projectUrl && <a href={project.projectUrl}>View project</a>}
          {project.detailUrl && <a href={project.detailUrl}>Learn more</a>}
        </div>
      )}
    </article>
  )
}
