import { artwork, portrait, wordmark } from "./placeholders";

export const site = {
  name: "Mugen",
  email: "contact@mugen.design",
  bookCallLink: "/contact",
  location: { label: "Toronto (CA)", timezone: "America/New_York" },
  socials: {
    x: "https://x.com",
    instagram: "https://instagram.com",
    dribbble: "https://dribbble.com",
    linkedin: "https://linkedin.com",
  },
  heroVideo:
    "https://res.cloudinary.com/dzdgzw7yy/video/upload/v1747524938/rowzd837annraukcew5z.mp4",
  heroPoster: artwork(11, 1600, 900),
};

export const people = {
  sarah: { name: "Sarah Park", role: "Project Manager", image: portrait(3) },
  alex: {
    name: "Alex West",
    role: "Founder & Creative Director",
    image: portrait(7),
    email: "alex@mugen.design",
    bio: "With over 15 years in digital design, Alex founded MUGEN° to create a studio where craft comes first. He believes great design happens through process, not heroics.",
    xLink: "https://x.com",
    linkedInLink: "https://linkedin.com",
  },
};

export const hero = {
  since: "Since — 2016",
  intro:
    "We've reimagined how great design happens. No pitches. No proposals. No project management theater. Just exceptional work from senior designers who become an extension of your team.",
  rating: {
    score: 4.9,
    text: "100+ Happy clients",
    avatars: [portrait(1), portrait(2), portrait(4), portrait(5)],
  },
  meeting: {
    picture: portrait(3),
    name: "Sarah Park",
    role: "Project manager",
    buttonText: "Book a 15-Min Call",
    bookCallLink: "/contact",
    pricingLink: "/#pricing",
    planCost: "$7,500 / m",
    openSlots: 2,
    month: "March'26",
  },
};

export const navLinks = [
  { text: "Home", href: "/" },
  { text: "Studio", href: "/studio" },
  { text: "Work", href: "/projects", count: "projects" as const },
  { text: "Articles", href: "/articles", count: "articles" as const },
  { text: "Pricing", href: "/#pricing" },
  { text: "Contact", href: "/contact" },
];

export const legalLinks = [
  { text: "Privacy Policy", href: "/privacy-policy" },
  { text: "Terms of Service", href: "/terms-of-service" },
];

export const clientLogos = [
  "Quantum",
  "Boltshift",
  "Warpspeed",
  "Ephemeral",
  "Solaris",
  "Clandestine",
  "Flora",
  "Nietzsche",
].map((name) => ({ name, src: wordmark(name) }));

export const approach = {
  label: "[Our Approach]",
  heading:
    "Traditional agencies perfected the art of the pitch. We perfected the art of the work. When you need design that moves at the speed of your ambition, you need a different kind of studio.",
  lead: "After 15 years in traditional agencies, I saw the same problems repeatedly. Talented designers spending more time in meetings than creating. Clients paying for process instead of progress. Great ideas dying in revision purgatory.",
  paragraphs: [
    "So I built Mugen differently. No endless meetings, no office politics, no pitches that promise everything. Just talented designers doing what they do best.",
    "We create design that actually solves problems. We're obsessive about the details because that's what our clients pay us for. To care as much as they do. That's the Mugen way. Simple, but not easy.",
  ],
};

/* Sample CMS collections. The Framer project pulls these from its CMS. */
export const projects = [
  {
    client: "Quantum",
    slug: "quantum",
    date: "2025-08-30",
    services: "Brand Strategy & Product Design",
    thumbnail: artwork(1),
    logo: wordmark("Quantum"),
  },
  {
    client: "Boltshift",
    slug: "boltshift",
    date: "2025-05-12",
    services: "Product Design, Design Systems",
    thumbnail: artwork(2),
    logo: wordmark("Boltshift"),
  },
  {
    client: "Warpspeed",
    slug: "warpspeed",
    date: "2024-11-03",
    services: "Brand Identity, Web Design",
    thumbnail: artwork(3),
    logo: wordmark("Warpspeed"),
  },
  {
    client: "Ephemeral",
    slug: "ephemeral",
    date: "2024-06-21",
    services: "Visual Identity, Mobile App",
    thumbnail: artwork(4),
    logo: wordmark("Ephemeral"),
  },
];

export const articles = [
  {
    slug: "the-death-of-the-pitch",
    title: "The death of the pitch",
    category: "Process",
    date: "2025-09-02",
    description: "Why we stopped doing spec work, and what our clients got in return.",
    body: "Spec work rewards the studio that is best at guessing, not the one that is best at listening. ".repeat(60),
    image: artwork(21),
    author: people.alex,
  },
  {
    slug: "design-systems-that-scale",
    title: "Design systems that actually scale",
    category: "Product",
    date: "2025-07-18",
    description: "Tokens, components and the governance nobody talks about.",
    body: "A design system is a product with its own users, roadmap and support queue. ".repeat(90),
    image: artwork(22),
    author: people.sarah,
  },
  {
    slug: "brand-is-a-verb",
    title: "Brand is a verb",
    category: "Brand",
    date: "2025-05-30",
    description: "A brand is what you do, repeatedly, in public. Here is how we design for that.",
    body: "Consistency is not sameness. It is a set of decisions made the same way every time. ".repeat(45),
    image: artwork(23),
    author: people.alex,
  },
];

export const whyChooseUs = {
  heading: "We deliver more than design. We deliver momentum.",
  description:
    "Great design accelerates everything. It shortens sales cycles, increases conversions, and builds trust before you say a word. We're not just making things pretty—we're creating competitive advantages that compound over time.",
  years: ["2016", "2018", "2022", "2024", "2026"],
  happyClientsImage: artwork(31, 800, 900),
  bottomHeading: "Fast to launch. Easy to scale.",
  highlights: [
    {
      title: "Speed without sacrifice",
      text: "Our streamlined process cuts through the typical agency theater while maintaining the craft and attention to detail your brand deserves.",
    },
    {
      title: "Flexible engagement",
      text: "Choose monthly retainers for ongoing work or project-based engagements for specific needs. Scale up or down as your business evolves.",
    },
  ],
};

export const services = [
  {
    title: "Brand Identity",
    description:
      "Complete brand systems that capture your essence and stand out in market. From strategy to execution, we build identities that resonate and scale.",
    categories: "Logo Design, Visual Identity, Brand Guidelines, Positioning, Naming, Brand Strategy, Brand Packages",
  },
  {
    title: "Digital Design",
    description:
      "Websites and digital experiences that convert. We design with purpose, creating user journeys that turn visitors into customers.",
    categories: "Web Design, Landing Pages, E-commerce, Email Design, Digital Campaigns, Microsites, Web Apps",
  },
  {
    title: "Product Design",
    description:
      "UI/UX that makes complex products feel simple. We balance user needs with business goals to create experiences that just work.",
    categories: "User Interface, User Experience, Design Systems, Prototypes, Mobile Apps, SaaS Products, Dashboards",
  },
  {
    title: "Marketing & Growth",
    description:
      "Strategic creative that drives results. From campaigns to pitch decks, we design materials that move your audience to action.",
    categories: "Campaign Creative, Social Media, Pitch Decks, Sales Materials, Reports, Infographics, Presentations",
  },
  {
    title: "Development",
    description: "Clean code that brings designs to life. Fast, responsive, and pixel-perfect across all devices.",
    categories: "Front-end, Webflow, Framer, React, Marketing Sites, Web Apps, CMS Integration, Performance",
  },
].map((s, i) => ({ ...s, id: `service${i + 1}`, image: artwork(41 + i, 1200, 700) }));

export const process = {
  heading: "A proven process that delivers results, not surprises.",
  description:
    "We've refined our approach over hundreds of projects. Every step is designed to minimize friction and maximize impact. From first call to final delivery, you'll know exactly where we are and where we're going.",
  highlights: [
    { title: "3-5 Days", text: "To kick off after signing. No lengthy onboarding, just straight to work." },
    { title: "48 Hour", text: "turnaround on most requests. Complex projects broken into manageable sprints." },
  ],
  steps: [
    {
      title: "Listen & Learn",
      description:
        "Every engagement starts with understanding. We dive deep into your business, your challenges, and where you want to go. No assumptions, just questions that matter.",
    },
    {
      title: "Strategy First",
      description:
        "Before any pixels are pushed, we align on direction. Whether it's a brand identity or product redesign, we make sure we're solving the right problem.",
    },
    {
      title: "Design in Sprints",
      description:
        "We work in focused cycles with regular check-ins. You'll see progress weekly, not monthly. No big reveals, no surprises—just steady momentum.",
    },
    {
      title: "Refine Until Right",
      description:
        "Your feedback shapes the work. We iterate based on what's working and what isn't, refining until everyone's genuinely excited about the results.",
    },
    {
      title: "Launch & Learn",
      description:
        "We stick around for implementation and measure what matters. Every project teaches us something that makes the next one better.",
    },
  ],
};

const checkoutLink =
  "https://buy.polar.sh/polar_cl_gtUjpdPiuYaexB8dhzD1g4C8IwP3Nen2cv0Kq1ypgFn?utm_medium=price-table";

export const pricing = {
  heading: "Built to scale",
  description:
    "Choose the engagement model that works for your business. Start small and grow with confidence, or jump straight into transformative projects. No hidden fees, no surprises, just transparent pricing that makes sense.",
  toggle: ["Monthly", "Quarterly"] as const,
  plans: [
    {
      title: "Growth",
      description: "Perfect for growing businesses with steady design needs.",
      mostPopular: false,
      prices: [7500, 20000] as const,
      subline: "For ongoing requests.",
      buttonText: "Start Now",
      links: [checkoutLink, checkoutLink] as const,
      benefits: [
        "45 hours of dedicated design time",
        "Two active projects at a time",
        "Twice-weekly syncs",
        "24-hour response time",
        "Unused hours roll over (up to 10)",
        "15% discount on additional projects",
      ],
    },
    {
      title: "Scale",
      description: "For teams that need to move fast and ship often.",
      mostPopular: true,
      prices: [15000, 40000] as const,
      subline: "For ongoing requests.",
      buttonText: "Start Now",
      links: [checkoutLink, checkoutLink] as const,
      benefits: [
        "100 hours of dedicated design time",
        "Unlimited active projects",
        "Daily syncs available",
        "Same-day response time",
        "Unused hours roll over (up to 20)",
        "20% discount on additional projects",
      ],
    },
  ],
  custom: {
    title: "Custom Project",
    description: "Clear scope, fixed timeline, no surprises.",
    startsAt: 10000,
    buttonText: "Get Quote",
    link: "/contact",
  },
  bookCall: {
    text: "Tell us about your design needs, team size, and project volume. We'll help you choose the right plan and get you started within 3-5 days.",
    openSlots: 2,
    month: "July'25",
    buttonText: "Book Call",
    link: "/contact",
  },
};

export const testimonials = {
  heading: "Trusted by the most innovative teams.",
  description: "Results speak louder than promises.",
  slides: [
    {
      quote:
        "From day one, they got what we were trying to do—make solar feel accessible, human, and forward-looking. The rebrand has completely reshaped how we show up in the market.",
      picture: portrait(8),
      name: "James Ortiz",
      role: "Director of Comms",
      company: "Solaris Energy",
      logo: wordmark("Solaris"),
      metric: "$12M",
      metricDescription: "Investment funding secured",
    },
    {
      quote:
        "They brought so much nuance to the brand—mystery, elegance, and a really rich visual language. It’s exactly what we hoped for, and then some.",
      picture: portrait(9),
      name: "Renata Moreau",
      role: "Creative Director",
      company: "Clandestine",
      logo: wordmark("Clandestine"),
      metric: "4.8x",
      metricDescription: "Social media engagement boost",
    },
    {
      quote:
        "We wanted a brand that felt honest and connected to nature, but still premium. What we ended up with feels like us in every way—our customers even comment on it.",
      picture: portrait(10),
      name: "Naomi Chen",
      role: "Co-founder",
      company: "Flora & Fauna",
      logo: wordmark("Flora"),
      metric: "94%",
      metricDescription: "Customer retention rate",
    },
  ],
  cards: [
    {
      logo: wordmark("Boltshift"),
      quote:
        "Our product was always strong under the hood, but we struggled to express that clearly. Now, the platform feels sharp, modern, and incredibly intuitive—it’s made onboarding so much smoother.",
      image: portrait(12),
      name: "Julian Singh",
      role: "COO",
      company: "Boltshift",
      metrics: [
        { value: "60%", description: "Training time reduction" },
        { value: "$2.3M", description: "Annual efficiency savings" },
      ],
      caseStudyLink: "/projects/boltshift",
    },
    {
      logo: wordmark("Warpspeed"),
      quote:
        "We knew our tech was solid, but the brand didn’t reflect that. After the redesign, everything just clicked—sales calls got easier, and people finally ‘got’ what we do.",
      image: portrait(13),
      name: "Aisha Clark",
      role: "CEO",
      company: "Warpspeed",
      metrics: [
        { value: "500x", description: "Github stars gained post-rebrand" },
        { value: "95%", description: "Developer-to-CTO approval rate" },
      ],
      caseStudyLink: "/projects/warpspeed",
    },
    {
      logo: wordmark("Ephemeral"),
      quote:
        "We came in with a fuzzy idea and left with a brand that feels completely aligned with our mission. The team really understood our product and turned that into something emotionally resonant.",
      image: portrait(14),
      name: "Linh Tran",
      role: "VP of Product",
      company: "Ephemeral",
      metrics: [
        { value: "4.6x", description: "Conversation frequency" },
        { value: "0.8 sec", description: "Avg response time" },
      ],
      caseStudyLink: "/projects/ephemeral",
    },
  ],
};

/* The Framer CustomAccordion's `faqs` weren't in the export; these are drafts to replace. */
export const faqs = [
  {
    question: "How quickly can we get started?",
    answer: "Most engagements kick off within 3-5 days of signing. No lengthy onboarding — we start with a short discovery call and get straight to work.",
  },
  {
    question: "What does a typical engagement look like?",
    answer: "You get a dedicated senior team, a shared workspace for requests, and regular syncs. Work ships in focused sprints so you see progress every week.",
  },
  {
    question: "Can we pause or cancel our plan?",
    answer: "Yes. Retainers are month-to-month (or quarter-to-quarter). You can pause, scale up or down, or cancel before your next billing cycle.",
  },
  {
    question: "Do you work with early-stage startups?",
    answer: "Absolutely. Many of our clients are seed to Series B. The Growth plan is designed for teams with steady design needs and a lean budget.",
  },
  {
    question: "Who owns the work?",
    answer: "You do. Full ownership of all final files and source assets transfers to you as soon as each deliverable is paid for.",
  },
  {
    question: "Do you also build what you design?",
    answer: "Yes. Our development team ships marketing sites and web apps in React, Framer and Webflow, so nothing gets lost in hand-off.",
  },
];

export const faqSection = {
  heading: "FAQ",
  description: "Everything else you're wondering.",
  asideTitle: "Have a question?",
  asideText: "Reach out anytime. We're happy to answer any questions before you commit to working together.",
};

export const articlesSection = {
  heading: "Strategies & insights from the team.",
  description:
    "We share what we've learned building brands that matter. Deep dives into design thinking, creative process, and the intersection of business and aesthetics. No fluff, just honest perspectives from the trenches of client work.",
};
