// Single source of truth for the public site and its build-time search metadata.
export const site = {
  name: 'AEVORA',
  url: 'https://aevora-systems.github.io',
  tagline: 'We build. We learn. We evolve — toward a better future.',
  description: 'AEVORA develops governed digital business organisms under explicit human authority.',
  foundingDate: '2026-09-23',
  founder: 'Jeremiah Wong Zhi Qi',
  github: 'https://github.com/aevora-systems',
  logo: '/assets/logos/Aevora_Logo_Horizontal_Corporate.svg',
  socialImage: '/assets/social/Aevora_OpenGraph_1200x630.jpg'
} as const;

export const pages = {
  "home": {
    "title": "Aevora — Governed Business Autonomy",
    "description": "Aevora is building governed digital business organisms designed to learn operations, coordinate work, and earn bounded autonomy over time.",
    "path": "/",
    "nav": "home"
  },
  "about": {
    "title": "About — Aevora",
    "description": "Meet AEVORA and its founder, Jeremiah Wong Zhi Qi. AEVORA is building persistent digital business organisms and governed autonomous systems.",
    "path": "/about/",
    "nav": "about"
  },
  "organisms": {
    "title": "Business Organisms — Aevora",
    "description": "Aevora business organisms are designed to learn operational context and earn bounded autonomy through evidence.",
    "path": "/organisms/",
    "nav": "organisms"
  },
  "research": {
    "title": "Research — Aevora",
    "description": "Aevora Research explores persistent cognition, consequence-driven learning, specialization, coordination and governed evolution.",
    "path": "/research/",
    "nav": "research"
  },
  "roadmap": {
    "title": "Roadmap — Aevora",
    "description": "Aevora’s capability-gated roadmap progresses from a single business organism to governed inter-company coordination.",
    "path": "/roadmap/",
    "nav": "roadmap"
  },
  "constitution": {
    "title": "Founder Constitution — Aevora",
    "description": "Read Aevora’s founding governance principles for autonomy, accountability, sovereignty and evidence.",
    "path": "/constitution/",
    "nav": "constitution"
  },
  "investors": {
    "title": "Investors — Aevora",
    "description": "Aevora’s investor thesis connects near-term business automation value with long-term persistent digital organism infrastructure.",
    "path": "/investors/",
    "nav": "investors"
  },
  "pilot": {
    "title": "Founding Partner Pilot — Aevora",
    "description": "Explore the Aevora founding partner pilot model for bounded business automation and evidence-driven autonomy.",
    "path": "/pilot/",
    "nav": "pilot"
  },
  "privacy": {
    "title": "Privacy — Aevora",
    "description": "Aevora privacy information for the current website release.",
    "path": "/privacy/",
    "nav": "privacy"
  }
} as const;

export const indexedPaths = [
  '/', '/organisms/', '/research/', '/roadmap/', '/constitution/',
  '/investors/', '/about/', '/pilot/', '/privacy/',
  '/knowledge/', '/knowledge/business-organism/', '/knowledge/governed-autonomy/'
] as const;
