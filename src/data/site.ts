// Single source of truth for the public site and its build-time search metadata.
export const site = {
  name: 'AURYVETH',
  url: 'https://auryveth.github.io',
  tagline: 'We build. We learn. We evolve — toward a better future.',
  description: 'AURYVETH develops governed digital business organisms: persistent systems that learn approved operations and earn bounded autonomy under explicit human authority.',
  foundingDate: '2026-09-23',
  founder: 'Jeremiah Wong Zhi Qi',
  github: 'https://github.com/auryveth',
  logo: '/assets/logos/Auryveth_Logo_Horizontal_Corporate.svg',
  socialImage: '/assets/social/Auryveth_OpenGraph_1200x630.jpg'
  // No addresses, registration identifiers, emails or product claims until publicly verified.
} as const;

export const pages = {
  "home": {
    "title": "AURYVETH — Governed Digital Business Organisms",
    "description": "AURYVETH develops governed digital business organisms that learn approved operations, coordinate work, and earn bounded autonomy under explicit human authority.",
    "path": "/",
    "nav": "home"
  },
  "about": {
    "title": "About AURYVETH — Digital Business Organisms",
    "description": "Meet AURYVETH and its founder, Jeremiah Wong Zhi Qi. AURYVETH is building persistent digital business organisms and governed autonomous systems.",
    "path": "/about/",
    "nav": "about"
  },
  "organisms": {
    "title": "Digital Business Organisms — AURYVETH",
    "description": "Auryveth business organisms are designed to learn operational context and earn bounded autonomy through evidence.",
    "path": "/organisms/",
    "nav": "organisms"
  },
  "research": {
    "title": "Digital Organism Research — AURYVETH",
    "description": "Auryveth Research explores persistent cognition, consequence-driven learning, specialization, coordination and governed evolution.",
    "path": "/research/",
    "nav": "research"
  },
  "roadmap": {
    "title": "Governed Autonomy Roadmap — AURYVETH",
    "description": "Auryveth’s capability-gated roadmap progresses from a single business organism to governed inter-company coordination.",
    "path": "/roadmap/",
    "nav": "roadmap"
  },
  "constitution": {
    "title": "Founder Constitution — AURYVETH",
    "description": "Read Auryveth’s founding governance principles for autonomy, accountability, sovereignty and evidence.",
    "path": "/constitution/",
    "nav": "constitution"
  },
  "investors": {
    "title": "Investors & Strategic Partners — AURYVETH",
    "description": "Auryveth’s investor thesis connects near-term business automation value with long-term persistent digital organism infrastructure.",
    "path": "/investors/",
    "nav": "investors"
  },
  "pilot": {
    "title": "Founding Partner Pilot — AURYVETH",
    "description": "Explore the Auryveth founding partner pilot model for bounded business automation and evidence-driven autonomy.",
    "path": "/pilot/",
    "nav": "pilot"
  },
  "privacy": {
    "title": "Privacy — AURYVETH",
    "description": "Auryveth privacy information for the current website release.",
    "path": "/privacy/",
    "nav": "privacy"
  }
} as const;

// Every entry below must have a real, prerendered public page. The build audit compares
// this registry to the generated HTML and sitemap; never add speculative URLs.
export const knowledgePages = {
  'business-organism': { title: 'What Is a Business Organism? — AURYVETH', description: 'AURYVETH’s definition of a persistent digital business organism, its scope, its intended continuity and its authority boundaries.' },
  'governed-autonomy': { title: 'What Is Governed Autonomy? — AURYVETH', description: 'Why better capabilities do not confer permission: AURYVETH’s definition of explicitly granted, bounded operational authority.' },
  'organism-vs-agent': { title: 'Business Organism vs. AI Agent — AURYVETH', description: 'How AURYVETH distinguishes its persistent business-organism architecture from task-oriented AI agent systems, without claiming current autonomy.' },
  'authority-levels': { title: 'How a Business Organism Earns Authority — AURYVETH', description: 'Explore AURYVETH’s proposed progression from observing and preparing work to explicitly approved, bounded execution.' },
  'internal-proving-ground': { title: 'Why AURYVETH Tests Its Organisms Internally First', description: 'AURYVETH’s planned internal proving ground: prepare real work, review outcomes, measure reliability and earn narrowly scoped authority.' }
} as const;

export const indexedPaths = [
  '/', '/organisms/', '/research/', '/roadmap/', '/constitution/',
  '/investors/', '/about/', '/pilot/', '/privacy/',
  '/knowledge/', '/knowledge/business-organism/', '/knowledge/governed-autonomy/',
  '/knowledge/organism-vs-agent/', '/knowledge/authority-levels/', '/knowledge/internal-proving-ground/'
] as const;
