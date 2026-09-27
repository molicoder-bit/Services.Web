export type Service = {
  number: string
  title: string
  audience: string
  description: string
  deliverables: string[]
  note?: string
}

export type Package = {
  title: string
  summary: string
  price: string
  includes: string[]
  note?: string
  featured?: boolean
}

export type PortfolioProject = {
  name: string
  description: string
  technologies: string[]
  responsibilities: string[]
  projectUrl?: string
  detailUrl?: string
}

export type MaintenanceOffering = {
  title: string
  items: string[]
}

export const siteConfig = {
  developerName: 'Luis Molina',
  role: 'Independent Software Developer',
  email: '',
  phoneDisplay: '(347) 300-7153',
  phoneHref: 'tel:+13473007153',
  githubUrl: 'https://github.com/molicoder-bit',
  linkedInUrl: '',
} as const

export const projectContactHref = siteConfig.email
  ? `mailto:${siteConfig.email}?subject=${encodeURIComponent('Project inquiry')}&body=${encodeURIComponent(
      "Hi,\n\nHere's what I'm trying to build or automate:\n\nWhat I do today (if applicable):\n\nMy approximate budget (if known):\n\nRelevant tools or links:\n",
    )}`
  : siteConfig.phoneHref

export const services: Service[] = [
  {
    number: '01',
    title: 'Website + Brand',
    audience: 'For a clear, credible online presence.',
    description: 'A focused website and visual foundation that make it easy for customers to understand what you offer and take the next step.',
    deliverables: ['Responsive website', 'Modern interface', 'Logo direction', 'Deployment', 'Contact functionality', 'Basic SEO setup', 'Analytics integration if requested'],
    note: 'Domain registration, paid hosting, and third-party subscriptions are quoted separately.',
  },
  {
    number: '02',
    title: 'iOS + Android Apps',
    audience: 'For turning an app idea into a working product.',
    description: 'One coherent product experience across iOS and Android, with the integrations and release preparation your scope requires.',
    deliverables: ['iOS application', 'Android application', 'Shared product design', 'API or backend integration', 'Authentication when required', 'Analytics and error monitoring', 'Store submission assistance'],
    note: 'I can prepare and assist with submission; final approval is controlled by Apple and Google.',
  },
  {
    number: '03',
    title: 'AI + Workflow Automation',
    audience: 'For work that should not stay manual.',
    description: 'Practical automation for repetitive administration, information processing, reporting, research, documents, and connected services.',
    deliverables: ['Workflow review', 'Service integrations', 'Document processing', 'Recurring reports', 'AI-assisted research', 'Internal tools', 'API integrations'],
    note: "If you're doing the same thing manually over and over, show me the process and I'll determine whether it can be automated.",
  },
  {
    number: '04',
    title: 'Idea → MVP',
    audience: 'For testing a software idea in the real world.',
    description: 'Practical product development that turns a rough concept into the smallest useful version you can put in front of real users.',
    deliverables: ['Feasibility review', 'Requirements clarification', 'Feature prioritization', 'Architecture', 'Prototype', 'Initial development', 'Real-world test preparation'],
  },
]

export const packages: Package[] = [
  {
    title: 'Website Launch',
    summary: 'A professional home for your business, ready to share.',
    price: 'Contact for quote',
    includes: ['Design and development', 'Responsive mobile layout', 'Logo direction', 'Deployment', 'Contact functionality', 'Basic SEO setup', 'Launch support'],
    note: 'Optional monthly maintenance is available.',
  },
  {
    title: 'Mobile App Launch',
    summary: 'One product, prepared for iOS and Android release.',
    price: 'Custom quote based on scope',
    includes: ['iOS and Android applications', 'Build and deployment configuration', 'Store submission assistance', 'Analytics and error monitoring setup', 'Initial post-launch bug fixing'],
    note: 'Backend complexity, third-party services, and platform fees can affect the quote. Ongoing platform-specific or combined maintenance is optional.',
    featured: true,
  },
  {
    title: 'Automation Build',
    summary: 'A repetitive process reviewed, redesigned, and automated.',
    price: 'Custom quote based on scope',
    includes: ['Workflow review', 'Feasibility analysis', 'Automation design', 'Implementation', 'Testing', 'Documentation'],
    note: 'Scope and price depend heavily on the workflow and services involved.',
  },
  {
    title: 'MVP Build',
    summary: 'A focused first version built for learning and validation.',
    price: 'Custom quote based on scope',
    includes: ['Idea review', 'Feature prioritization', 'Technical planning', 'Design direction', 'MVP development', 'Launch and test preparation'],
  },
]

export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Your Product Name',
    description: 'Replace this with a concise explanation of the product, the problem it solves, and who it is for.',
    technologies: ['Technology', 'Framework', 'Platform'],
    responsibilities: ['Product concept', 'Frontend', 'Backend', 'Deployment'],
  },
  {
    name: 'Your Automation Project',
    description: 'Add a real workflow you simplified, including enough context to show the practical value of the build.',
    technologies: ['API', 'Automation', 'Integration'],
    responsibilities: ['Workflow design', 'Implementation', 'Integrations', 'Documentation'],
  },
  {
    name: 'Your Mobile App',
    description: 'Use this space for a product you have built, your role in it, and the key technical decisions you handled.',
    technologies: ['iOS', 'Android', 'API'],
    responsibilities: ['Product design', 'Mobile development', 'Release preparation'],
  },
]

export const maintenanceOfferings: MaintenanceOffering[] = [
  {
    title: 'Website Maintenance',
    items: ['Dependency updates', 'Bug fixes', 'Minor content updates', 'Monitoring', 'Deployment support'],
  },
  {
    title: 'Mobile Maintenance',
    items: ['Dependency updates', 'Compatibility updates', 'Operating-system changes', 'Build issues', 'Store-related technical updates', 'Bug fixes'],
  },
]

export const processSteps = [
  ['Tell me what you need', 'Describe the idea, problem, or repetitive workflow in plain language.'],
  ['I review it', 'I assess feasibility, scope, and the simplest reasonable solution.'],
  ['You get a quote', 'We define deliverables, cost, and expected milestones before development starts.'],
  ['I build it', 'Development moves forward with periodic, direct progress updates.'],
  ['Launch', 'I deploy the site, prepare the app for store submission, or activate the automation.'],
  ['Optional maintenance', 'Ongoing support is available separately when the project needs it.'],
] as const

export const faqs = [
  ['Do I need to know exactly what technology I need?', 'No. Explain the outcome you want, and I will recommend an appropriate approach.'],
  ['Can you build both iOS and Android?', 'Yes, depending on project scope and platform requirements.'],
  ['Do you provide maintenance?', 'Yes. Maintenance is available as an optional service with a defined scope.'],
  ['Are hosting, domains, platform fees, APIs, and third-party services included?', 'Unless a quote specifically says otherwise, third-party costs are paid separately by the client.'],
  ['Can you automate an existing business process?', 'Potentially. I first need to understand the workflow, the tools involved, and any access or compliance constraints.'],
  ['Can you guarantee App Store approval?', 'No. I can build according to platform requirements and assist with submission, but Apple and Google control final approval.'],
  ['Do you work with small projects?', 'Yes. Small, clearly scoped projects are specifically welcome.'],
] as const
