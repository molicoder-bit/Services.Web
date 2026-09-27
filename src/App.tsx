import { useState } from 'react'
import { PackageCard, ProjectCard, ServiceCard } from './components/Cards'
import { SectionHeading } from './components/SectionHeading'
import {
  faqs,
  maintenanceOfferings,
  packages,
  portfolioProjects,
  processSteps,
  projectContactHref,
  services,
  siteConfig,
} from './config/site'

const navItems = [
  ['Services', '#services'],
  ['Packages', '#packages'],
  ['Work', '#work'],
  ['How It Works', '#process'],
  ['Contact', '#contact'],
] as const

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to top">
          <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>
          <span>{siteConfig.developerName}</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a className={label === 'Contact' ? 'nav-cta' : ''} href={href} key={href}>{label}</a>
          ))}
        </nav>
        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>Menu</span><span aria-hidden="true">{menuOpen ? '×' : '+'}</span>
        </button>
        <nav className={`mobile-nav${menuOpen ? ' mobile-nav-open' : ''}`} id="mobile-navigation" aria-label="Mobile navigation">
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>{label}<span aria-hidden="true">↘</span></a>
          ))}
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">Independent software development</p>
            <h1>Websites, apps &amp; automation—without the agency overhead.</h1>
            <p className="hero-lede">
              I help individuals and small businesses turn ideas and repetitive work into practical software—from polished websites and mobile apps to focused MVPs and AI-assisted tools.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={projectContactHref}>Tell me about your project</a>
              <a className="button button-secondary" href="#services">View services</a>
            </div>
          </div>
          <aside className="hero-panel" aria-label="Services at a glance">
            <div className="panel-topline"><span>Available for scoped projects</span><span className="pulse" aria-hidden="true" /></div>
            <ol>
              {services.map((service) => <li key={service.number}><span>{service.number}</span>{service.title}</li>)}
            </ol>
            <p>Direct communication. Clear scope. Practical delivery.</p>
          </aside>
        </section>

        <section className="section" id="services" aria-labelledby="services-title">
          <SectionHeading eyebrow="What I build" title="Software shaped around the problem." description="You bring the outcome you need. I help narrow the scope, choose a practical approach, and build it." />
          <div className="services-grid">
            {services.map((service) => <ServiceCard service={service} key={service.number} />)}
          </div>
        </section>

        <aside className="automation-callout">
          <div className="callout-code" aria-hidden="true">IF repetitive_work → REVIEW → AUTOMATE</div>
          <p>Doing the same thing manually over and over?</p>
          <h2>Show me the process. I’ll determine whether it can be automated.</h2>
          <a className="button button-dark" href={projectContactHref}>Describe your workflow</a>
        </aside>

        <section className="section" id="packages" aria-labelledby="packages-title">
          <SectionHeading eyebrow="Ways to work together" title="Clear starting points. A quote that fits the scope." description="Every project is different. These packages define the shape of the work without pretending the final price is one-size-fits-all." />
          <div className="packages-grid">
            {packages.map((item) => <PackageCard item={item} key={item.title} />)}
          </div>
        </section>

        <section className="section maintenance" id="maintenance" aria-labelledby="maintenance-title">
          <div className="maintenance-heading">
            <SectionHeading eyebrow="After launch" title="Maintenance without vague promises." description="Ongoing help is available with a defined scope, so you know what support covers." />
            <p className="maintenance-boundary">New features and major redesigns are separate development work.</p>
          </div>
          <div className="maintenance-grid">
            {maintenanceOfferings.map((offering) => (
              <article key={offering.title}>
                <h3>{offering.title}</h3>
                <ul className="check-list">{offering.items.map((item) => <li key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="work" aria-labelledby="work-title">
          <SectionHeading eyebrow="Selected work" title="Products I’ve taken from idea to reality." description="These project slots are ready for your real work. Edit one data file to add descriptions, technology tags, responsibilities, and links." />
          <div className="projects-grid">
            {portfolioProjects.map((project, index) => <ProjectCard project={project} index={index} key={`${project.name}-${index}`} />)}
          </div>
        </section>

        <section className="section process" id="process" aria-labelledby="process-title">
          <SectionHeading eyebrow="How it works" title="A simple path from conversation to launch." />
          <ol className="process-list">
            {processSteps.map(([title, description], index) => (
              <li key={title}>
                <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section faq" id="faq" aria-labelledby="faq-title">
          <SectionHeading eyebrow="Common questions" title="What to expect before we start." />
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <details key={question} open={index === 0}>
                <summary>{question}<span aria-hidden="true">+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Start a conversation</p>
          <h2 id="contact-title">Tell me what you’re trying to build.</h2>
          <p>You do not need to know what technology you need. Share the goal, what you do manually today, what you would like software to do, any tools already involved, and an approximate budget if you know it.</p>
          <a className="button button-dark" href={projectContactHref}>{siteConfig.email ? 'Email me about a project' : 'Call me about a project'} <span aria-hidden="true">↗</span></a>
          <div className="contact-details">
            <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
            {siteConfig.email && <><span aria-hidden="true">·</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></>}
          </div>
        </section>
      </main>

      <footer>
        <div>
          <a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">&lt;/&gt;</span><span>{siteConfig.developerName}</span></a>
          <p>{siteConfig.role}</p>
        </div>
        <div className="footer-links">
          {siteConfig.email && <a href={`mailto:${siteConfig.email}`}>Email</a>}
          <a href={siteConfig.phoneHref}>{siteConfig.phoneDisplay}</a>
          <a href={siteConfig.githubUrl}>GitHub</a>
          {siteConfig.linkedInUrl && <a href={siteConfig.linkedInUrl}>LinkedIn</a>}
          <span>Privacy page can be added when needed.</span>
        </div>
        <p className="copyright">© {new Date().getFullYear()} {siteConfig.developerName}</p>
      </footer>
    </>
  )
}

export default App
