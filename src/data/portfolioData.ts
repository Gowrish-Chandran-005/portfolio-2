import { CaseStudyPlate, ChronologyNode, IllustrationHotspot, ToolchainStep } from '../types';

export const ASSET_IMAGES = {
  // Exact hotlinked images from the source HTML files provided in the prompt
  gowrishSketch: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDeV_5Hzy4wrQoIt64zHLnMiSFMTsXOEn8hc8dAsCdUbxqQ5lQbfCocv94i2ftavkk-KDCyxaJr22_Etd7o86Bvni5fWDjqiULCeQnQhwnQNxM00KRImVIDp5Pi5HrHcKZ-alRMehXSHET6ycINN8MHfaSmO0cCXNuhEgc_quHyeuiuNtaCI1UiUArq8504KsTZEcTJIaCu-tCaH1zavgrEYfAVCUKm9CYn1dTmFeNz5jCT1p9rVB0E9g',
  studioPortrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrErNpcwSW4SwnNRhv0FKGMXS8bkocTFV16t9FisNtULobfdKtZoH1gjoE5LzR_g2H278Co_vEiKnHJe3weZCknyKVb74ZLYAnZS8QW56SwbUuJtltkTNSTpDh_EeFLmTJLYrejSidWRE_rPUeZzg0N-gSr-LnTGD4Ay_NGzyvljjZ4h-DcI4JMT1cok8UratAFS7qvQKCoVBHhsTKU8Ug7KZ4vrJAhqZ-ZzpgpTWOLY-X_ERUfN6krw',
  socialDeliverable: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCqasnAvYW5XQsXloJc-I091oEKupL2QWMAG7PVELLnN0d_B0VcwYGXaYnuSUlHsQ74oIuUTfshKRiyP8jbSg9TuW83L325pU0TKJhx59M8EhjA_kjqwgZ8QiaG7Y_47xBJemxtSEhwNliMHeIF6RNR8uWS4KU5VkznY3uu3e86BtCgkESgMEfooiqYEmnhJ4t_D-ZR0dccjZhCuwkVaTgJ1LyA5DHw2SZ1uZxY1sbNvrq4cbzAhkP6Ig',
  eventDeliverable: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAc17yOz6XijeYSalkhViHoWWjvGEElYpDGNQqyFi-_BffWrZLPXWcZJrdBI5OjIIvlBZuwlTGpwEqejbh3iiYLX9EG1TlfDrCRZX2IP2X9_irsSOXLiJF5QTfte4WFShRjXD_znjagNu5lqmlx9PFZF3TWoDCYIyoEcuwf3Wj3kApCoC8rXBZqglIJvips8Tqc94wIsRL6fHe4mLZx3hUxT-D4jia5OR9p3jySY7baW41dDj4mfXtL6A',
  posterDeliverable: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3ZmmhAtyqFadQfasCi5S2-Arjp-ZntSdgKnjxtJXha7FUkEWlz-dgwAYqb7f-sxXFWh-UeDCPLngaQLsnv-viJxTFcWKZsdz29yXEagElVmOvlJNiYeMgLk0TJ_EnruPYS7rbin3HkWPl6R8Ht0ZetTZHjIPy6TM4E3Q7QBG7fGQ7dfospmwOf-cnF_RU3o6LWPK-poiKmcIoXJsczYCJSk-5tnvncSVAYRtyLB0DfkDmLW9jlWQOFQ'
};

export const ILLUSTRATION_HOTSPOTS: IllustrationHotspot[] = [
  {
    id: 'shades',
    x: 38,
    y: 32,
    title: 'Wayfarer Sunglasses',
    description: 'Dense pigment liner hatch shading across acetate rims. Represents deliberate framing and critical editorial vision.',
    technique: 'Carbon 0.1mm micro-stippling'
  },
  {
    id: 'hair',
    x: 48,
    y: 19,
    title: 'Curly Hair Volume',
    description: 'Freehand contour loops rendered without hesitation marks. Expressive line weight shifts capture organic tension.',
    technique: 'Brush pen pressure dynamic'
  },
  {
    id: 'bomber',
    x: 62,
    y: 68,
    title: 'Quilted Bomber Jacket',
    description: 'Strict 45-degree cross-hatch matrix over ribbed collar. Symbolizes tactile craftsmanship applied to street culture.',
    technique: 'Geometric ink cross-hatch'
  },
  {
    id: 'posture',
    x: 28,
    y: 45,
    title: 'Profile Pose',
    description: 'Captured mid-thought during studio deliberations. Looking toward the next creative frontier.',
    technique: 'Quick gesture drawing base'
  }
];

export const CHRONOLOGY_NODES: ChronologyNode[] = [
  {
    id: 'node-01',
    nodeNumber: 'NODE 01',
    tag: 'ORIGIN',
    tagType: 'origin',
    date: 'AUG 2025',
    title: 'Started actively designing',
    description: 'Initial leap from observation to deliberate visual creation. Hands-on exploration of layout basics and composition laws.'
  },
  {
    id: 'node-02',
    nodeNumber: 'NODE 02',
    tag: 'TACTILE',
    tagType: 'tactile',
    date: 'FIRST EXP.',
    title: 'Movie + sports posters',
    description: 'High-energy compositions, sports player treatments, typography locks, and pop-culture visual experiments.'
  },
  {
    id: 'node-03',
    nodeNumber: 'NODE 03',
    tag: 'TOOLING',
    tagType: 'tooling',
    date: 'LEARNING',
    title: 'Canva → Photoshop',
    description: 'Transitioning beyond baseline templating to mastery over pixel rendering, masking, color grading, and raster depth.'
  },
  {
    id: 'node-04',
    nodeNumber: 'NODE 04',
    tag: 'CURRENT',
    tagType: 'current',
    date: 'TODAY',
    title: 'Visual design + UI + tech',
    description: 'Harmonizing strict interactive design principles with tactile editorial identity and modern creative tools.'
  }
];

export const TOOLCHAIN_STEPS: ToolchainStep[] = [
  {
    stepNumber: 'Step 01',
    level: 'Lv.01',
    year: '2019',
    name: 'CANVA',
    subtitle: 'Canvas Point',
    heightClass: 'h-28 sm:h-32',
    description: 'Rapid templating and instinctive assembly. Learned to observe spacing, alignment, and basic color combinations.',
    breakthrough: 'Recognizing design as intentional structure, not accidental luck.',
    tools: ['Canva Pro', 'Basic Layouts', 'Stock Libraries']
  },
  {
    stepNumber: 'Step 02',
    level: 'Lv.02',
    year: '2020',
    name: 'PHOTOSHOP',
    subtitle: 'Raster Depth',
    heightClass: 'h-36 sm:h-44',
    description: 'Diving deep into masks, blend modes, textured brushes, lighting casts, and complex poster montages.',
    breakthrough: 'Dissecting visual weight: how contrast and shadow evoke physical gravity.',
    tools: ['Adobe Photoshop', 'Brushes & Textures', 'Halftone Screening']
  },
  {
    stepNumber: 'Step 03',
    level: 'Lv.03',
    year: '2021',
    name: 'FIGMA',
    subtitle: 'Vector Vectorial',
    heightClass: 'h-48 sm:h-56',
    description: 'Component architecture, responsive autolayout, mathematical type scales, and scalable design system tokens.',
    breakthrough: 'Designing for dynamic screen contexts with strict mathematical rigor.',
    tools: ['Figma', 'Auto Layout 5.0', 'Design Tokens', 'Prototyping']
  },
  {
    stepNumber: 'Step 04',
    level: 'Lv.04',
    year: '2023',
    name: 'AI TOOLS',
    subtitle: 'Synthesis Engines',
    heightClass: 'h-60 sm:h-72',
    description: 'Augmenting physical inking with generative ideation, semantic prompt pipelines, and rapid creative exploration.',
    breakthrough: 'Using AI as an intellectual amplifier rather than a passive crutch.',
    tools: ['Gemini', 'Generative Diffusion', 'Prompt Engineering', 'Vector Synthesizers']
  },
  {
    stepNumber: 'Terminal Zenith',
    level: 'Apex',
    year: '2024 → Now',
    name: 'MY OWN VISUAL LANGUAGE',
    subtitle: 'Tactile × Direct',
    heightClass: 'h-72 sm:h-88',
    isApex: true,
    accentBadge: 'Authentic',
    description: 'The convergence of physical inking conviction, editorial print discipline, and high-performance interactive web design.',
    breakthrough: 'Craft over comfort: The hand must outrun the interface.',
    tools: ['Carbon Ink 300GSM', 'Motion & Tailwind', 'Editorial Systems', 'Design Direction']
  }
];

export const CASE_STUDY_PLATES: CaseStudyPlate[] = [
  {
    id: 'plate-04-social',
    plateNumber: 'PLATE 04-A',
    title: 'Toastmasters Social Media Campaign',
    subtitle: 'High-impact grid layouts and typographic broadsides',
    category: 'social',
    categoryLabel: 'Social Media',
    year: '2025',
    dimensions: '1080 × 1080 PX',
    medium: 'Digital Pigment + Blueprint Blue',
    tactility: '300 GSM Archival Mockup',
    description: 'A comprehensive social suite designed for Toastmasters club announcements, speaker spotlight carousels, and theme teasers. Utilized sharp woodblock typography, halftone paper overlays, and high-contrast editorial blocks to drive unprecedented engagement.',
    takeaway: 'Boosted club meeting attendance by 42% through distinct visual identity.',
    imageUrl: ASSET_IMAGES.socialDeliverable,
    featured: true
  },
  {
    id: 'plate-04-event',
    plateNumber: 'PLATE 04-B',
    title: 'Chapter Meeting Agenda & Program Broadside',
    subtitle: 'Tactile physical stationery and event communication',
    category: 'event',
    categoryLabel: 'Event Comm.',
    year: '2025',
    dimensions: 'A4 / Bi-Weekly Print Run',
    medium: 'Offset Screenprint & Ink Stamp',
    tactility: '180 GSM Newsprint Stock',
    description: 'Physical printed collateral handed to every attendee. Featuring structured timekeeping timetables, speaker bio capsules, and ink-stamped agenda matrices that transformed ordinary meetings into memorable atelier gatherings.',
    takeaway: 'Established a physical artifact culture that members collected.',
    imageUrl: ASSET_IMAGES.eventDeliverable,
    featured: true
  },
  {
    id: 'plate-04-posters',
    plateNumber: 'PLATE 04-C',
    title: 'Speech Marathon Poster Collection',
    subtitle: 'Ten limited broadside editions celebrating oratorical craft',
    category: 'posters',
    categoryLabel: 'Posters',
    year: '2025',
    dimensions: '18 × 24 INCHES',
    medium: 'Carbon Dense Ink on Hot-Press Rag',
    tactility: '300 GSM Heavyweight Cotton Rag',
    description: 'A cohesive series of 10 exhibition-grade posters printed for annual speech contests and special chapter workshops. Merged architectural grids, bold Anton type treatments, and hand-inked crosshatch accents.',
    takeaway: 'Selected for regional district conference creative showcase.',
    imageUrl: ASSET_IMAGES.posterDeliverable,
    featured: true
  },
  {
    id: 'plate-01-portrait',
    plateNumber: 'PLATE 01-A',
    title: 'Self-Portrait Study in Carbon Ink',
    subtitle: 'Hand-inked archival study with drafting tape mount',
    category: 'identity',
    categoryLabel: 'Illustration',
    year: '2025',
    dimensions: '896 × 1200 DPI',
    medium: 'Pigment Fineliner on Hot-Press Paper',
    tactility: '300 GSM Archival Rag',
    description: 'The foundational atelier identity asset. A contemplative profile study rendered strictly in physical ink pen without preliminary pencil erasure. Showcases the core philosophy that ink lines carry genuine conviction.',
    takeaway: 'Acts as the authentic visual anchor of the entire portfolio system.',
    imageUrl: ASSET_IMAGES.gowrishSketch,
    featured: true
  },
  {
    id: 'plate-02-atelier',
    plateNumber: 'PLATE 02-A',
    title: 'Atelier Drafting Desk Dispatch',
    subtitle: 'Editorial photographic documentation of the design studio',
    category: 'identity',
    categoryLabel: 'Studio Codex',
    year: '2025',
    dimensions: '35mm Film Grain / 4K Scan',
    medium: 'Warm Directional Desk Lamp + Graphite',
    tactility: 'Matte Fiber Photographic Paper',
    description: 'Cinematic documentation of Gowrish working at the ink-splattered drafting desk in Chennai/Bengaluru, surrounded by paper test sheets, technical ruling pens, and mechanical drafting calipers.',
    takeaway: 'Bridges the digital output with physical craft credibility.',
    imageUrl: ASSET_IMAGES.studioPortrait,
    featured: true
  },
  {
    id: 'plate-05-typography',
    plateNumber: 'PLATE 05',
    title: 'Woodblock & Anton Typographic System',
    subtitle: 'Editorial display scaling for modern web platforms',
    category: 'ui',
    categoryLabel: 'UI Systems',
    year: '2026',
    dimensions: 'Variable Fluid Viewport',
    medium: 'CSS Grid & Kinetic Motion',
    tactility: 'Interactive Screen Response',
    description: 'A specialized digital typography system translating 20th-century woodblock posters into responsive, high-contrast digital web architecture with hard offset ink drop shadows.',
    takeaway: 'Zero layout shift with instant font baseline alignment.',
    imageUrl: ASSET_IMAGES.posterDeliverable,
    featured: false
  },
  {
    id: 'plate-06-cyanotype',
    plateNumber: 'PLATE 06',
    title: 'The Cyanotype Architectural Spec',
    subtitle: 'Blueprint styling applied to software interface design',
    category: 'ui',
    categoryLabel: 'Design System',
    year: '2026',
    dimensions: 'Multi-screen Prototype',
    medium: 'Cobalt Blue 355E9E & White Stencil',
    tactility: 'Architectural Vellum Feel',
    description: 'An interface design kit evoking technical blueprints and drafting schematics. Incorporates crosshair registration marks, dimension calipers, and structural ink lines.',
    takeaway: 'Provides maximum informational clarity with distinctive tactile aesthetic.',
    imageUrl: ASSET_IMAGES.socialDeliverable,
    featured: false
  }
];

export const PRIMARY_ATTRIBUTES = [
  {
    number: '01 //',
    title: 'CURIOUS',
    tagline: 'Always asking why layouts breathe or suffocate.',
    bg: 'bg-[#ffffff]',
    textColor: 'text-[#1c1c18]',
    rotate: '-rotate-[1.5deg]',
    shadow: 'shadow-ink hover:shadow-cobalt'
  },
  {
    number: '02 //',
    title: 'CREATIVE',
    tagline: 'Translating spoken ideas into unforgettable visual metaphors.',
    bg: 'bg-[#ffdead]',
    textColor: 'text-[#281900]',
    rotate: 'rotate-[1.5deg]',
    shadow: 'shadow-ink'
  },
  {
    number: '03 //',
    title: 'HARDWORKING',
    tagline: 'Iterating on toothy paper until the weight sits right.',
    bg: 'bg-[#355e9e]',
    textColor: 'text-[#ffffff]',
    rotate: '-rotate-[1deg]',
    shadow: 'shadow-ink'
  },
  {
    number: '04 //',
    title: 'ALWAYS IMPROVING',
    tagline: 'Continuous accretion from Canva basics to custom design systems.',
    bg: 'bg-[#e5e2db]',
    textColor: 'text-[#1c1c18]',
    rotate: 'rotate-[2deg]',
    shadow: 'shadow-ink hover:shadow-cobalt'
  }
];
