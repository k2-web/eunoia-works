export const careerCategories = [
  { id: 'sports', label: 'Sports & Athletics', icon: 'Trophy', desc: 'From Formula 1 telemetry to IPL franchises & high-performance athletics' },
  { id: 'ai-tech', label: 'AI, Robotics & Space', icon: 'Cpu', desc: 'Autonomous agents, robotics, aerospace engineering & quantum tech' },
  { id: 'creative', label: 'Spatial Media & Gaming', icon: 'Gamepad2', desc: 'Virtual worlds, Apple Vision Pro spatial UI, game design & creator IP' },
  { id: 'sustainability', label: 'Climate & Bio-Tech', icon: 'Leaf', desc: 'Clean energy, EV battery systems, ESG carbon markets & agritech' },
  { id: 'business-law', label: 'FinTech & Sports Law', icon: 'Scale', desc: 'Algorithmic trading, venture capital, sports management contracts & cyber law' },
  { id: 'neuro-health', label: 'Neuroscience & Wellness', icon: 'Brain', desc: 'Cognitive science, sports psychology, mental coaching & longevity medicine' },
];

export const careerUniverseData = [
  // 1. SPORTS & ATHLETICS
  {
    id: 'sports-analytics',
    category: 'sports',
    title: 'Sports Performance & Telemetry Analytics',
    tagline: 'The Moneyball & Formula 1 revolution in athletics',
    badge: 'High Growth in India & Global',
    growthScore: '96%',
    salaryRange: '₹14L – ₹55L+ / $85k – $180k',
    streamPrerequisites: 'Science (PCM) with Computer Science / Mathematics OR Commerce with Applied Statistics',
    keySkills: ['Python / R', 'Biomechanical Computer Vision', 'Telemetry Data Analysis', 'Statistical Modeling'],
    whatTheyDo: 'Analyze real-time athlete biometrics, game video feeds, and racing telemetry to optimize speed, injury prevention, and tactical game plans for teams in F1, Premier League, IPL, and NBA.',
    highSchoolActionPlan: [
      'Build strong fundamentals in Statistics, Calculus, and Python.',
      'Participate in sports while analyzing school team performance metrics.',
      'Complete introductory courses in Sports Science (Coursera/MIT OpenCourseWare).'
    ],
    topColleges: {
      india: ['IIM Rohtak (Sports Management)', 'Symbiosis School of Sports Sciences', 'National Sports University (Manipur)'],
      global: ['Loughborough University (UK #1)', 'University of Michigan (Sport Management)', 'Deakin University (Australia)']
    },
    karishmaTip: 'For parents who think sports only means being an on-field athlete: the business and data behind global sports is a multi-billion dollar booming economy with elite tech-grade compensation.'
  },
  {
    id: 'sports-management',
    category: 'sports',
    title: 'Sports Franchise Management & Athlete Representation',
    tagline: 'Leading sports leagues, player contracts & mega-events',
    badge: 'Explosive IPL & Global Boom',
    growthScore: '93%',
    salaryRange: '₹12L – ₹60L+ / $90k – $220k',
    streamPrerequisites: 'Commerce with Applied Math OR Humanities with Economics / Media Studies',
    keySkills: ['Contract Negotiation', 'Sponsorship Architecture', 'Brand Management', 'Event Logistics'],
    whatTheyDo: 'Manage operations for sports clubs, organize international tournaments, negotiate athlete endorsement deals, and engineer broadcast media rights.',
    highSchoolActionPlan: [
      'Organize school/district sports fests, handling logistics, marketing, and sponsorships.',
      'Study sports business models and read sports law case studies.',
      'Build public speaking, negotiation, and cross-cultural communication skills.'
    ],
    topColleges: {
      india: ['IISM Mumbai', 'NASM (National Academy of Sports Management)', 'IIM Kozhikode Executive Sports Hub'],
      global: ['Syracuse University (Falk College)', 'University of Oregon (Warsaw Sports Center)', 'Real Madrid Graduate School']
    },
    karishmaTip: 'A dynamic personality paired with business acumen and legal savvy creates unstoppable sports executives who manage top athletes and sports properties.'
  },
  {
    id: 'sports-psychology',
    category: 'sports',
    title: 'Sports Psychology & High-Performance Coaching',
    tagline: 'Mastering the mental edge of elite competitors',
    badge: 'Critical Modern Discipline',
    growthScore: '94%',
    salaryRange: '₹10L – ₹40L+ / $80k – $160k',
    streamPrerequisites: 'Humanities with Psychology OR Science (PCB / Psychology)',
    keySkills: ['Cognitive Behavioral Therapy', 'Pressure Simulation', 'Visualization Techniques', 'Mindfulness Biofeedback'],
    whatTheyDo: 'Work with elite athletes, race car drivers, and Olympic contenders to build mental resilience, overcome slump anxiety, and maintain peak focus under intense global scrutiny.',
    highSchoolActionPlan: [
      'Take high school Psychology and Human Biology.',
      'Practice mindfulness and study sports autobiographies (e.g. Kobe Bryant, Michael Phelps, Rafael Nadal).',
      'Volunteer with school athletic departments to observe team morale and pressure points.'
    ],
    topColleges: {
      india: ['Tata Institute of Social Sciences (TISS)', 'Christ University Bangalore', 'Delhi University'],
      global: ['Springfield College (USA)', 'Loughborough University (UK)', 'University of Queensland (Australia)']
    },
    karishmaTip: 'Every Olympic medal and Grand Prix podium today depends as much on the sports psychologist in the paddock as on physical training.'
  },

  // 2. AI & EXPONENTIAL TECH
  {
    id: 'gen-ai-architect',
    category: 'ai-tech',
    title: 'Generative AI & Autonomous Agent Architect',
    tagline: 'Pioneering multimodal intelligence & cognitive agents',
    badge: 'Hottest Global Field',
    growthScore: '99%',
    salaryRange: '₹25L – ₹95L+ / $150k – $380k',
    streamPrerequisites: 'Science (PCM) with Computer Science & Strong Advanced Math',
    keySkills: ['Transformer Architectures', 'LLM Fine-Tuning & RAG', 'Reinforcement Learning', 'Cloud Compute Architecture'],
    whatTheyDo: 'Architect self-improving AI agents that can reason, write software, conduct scientific discovery, and automate complex workflows across industries.',
    highSchoolActionPlan: [
      'Master Linear Algebra, Probability, Calculus, and Python.',
      'Build small AI projects using open-source models (HuggingFace, LangChain).',
      'Participate in Kaggle student challenges and open-source GitHub contributions.'
    ],
    topColleges: {
      india: ['IIT Bombay / Delhi / Madras', 'IIIT Hyderabad (Pioneering AI Research)', 'BITS Pilani'],
      global: ['Carnegie Mellon University (CMU)', 'Stanford University', 'ETH Zurich (Switzerland)']
    },
    karishmaTip: 'Traditional software engineering is transforming. Students must move from rote coding to fundamental mathematical intuition and autonomous system architecture.'
  },
  {
    id: 'space-systems-aerospace',
    category: 'ai-tech',
    title: 'Commercial Aerospace & Space Systems Engineering',
    tagline: 'Designing satellites, rockets & planetary probes',
    badge: 'New Space Economy',
    growthScore: '95%',
    salaryRange: '₹18L – ₹65L+ / $110k – $240k',
    streamPrerequisites: 'Science (PCM) with Physics & Advanced Mathematics',
    keySkills: ['Orbital Mechanics', 'Propulsion Dynamics', 'Avionics', 'CAD Simulation'],
    whatTheyDo: 'Design commercial rocket stages, small-satellite constellations, lunar rovers, and deep-space communication systems for ISRO, NASA, SpaceX, and private space startups.',
    highSchoolActionPlan: [
      'Excel in Classical Mechanics, Thermodynamics, and Astronomy.',
      'Build model rocketry or join astronomy and robotics clubs.',
      'Participate in NASA Space Apps Challenge and international astrophysics Olympiads.'
    ],
    topColleges: {
      india: ['Indian Institute of Space Science and Technology (IIST Trivandrum)', 'IIT Madras', 'IIT Kharagpur'],
      global: ['MIT', 'Purdue University', 'Delft University of Technology (TU Delft)']
    },
    karishmaTip: 'India is now the epicenter of low-cost, high-reliability commercial space missions. Private space startups in Bangalore and Hyderabad are hiring top young engineers aggressively.'
  },

  // 3. SPATIAL MEDIA & GAMING
  {
    id: 'spatial-computing',
    category: 'creative',
    title: 'Spatial Computing & XR World Architecture',
    tagline: 'Designing 3D worlds for Apple Vision Pro & Unreal Engine',
    badge: 'Next Computing Paradigm',
    growthScore: '97%',
    salaryRange: '₹16L – ₹70L+ / $120k – $260k',
    streamPrerequisites: 'Any Stream with Mathematics OR Design / Computer Science',
    keySkills: ['Unreal Engine 5 / Unity', 'Spatial Audio & UI', '3D Blender / Maya', 'Human-Computer Interaction (HCI)'],
    whatTheyDo: 'Create immersive mixed-reality applications, virtual surgery simulators, architectural walkthroughs, and AAA interactive gaming environments.',
    highSchoolActionPlan: [
      'Learn Blender, Figma, or Unity during vacations.',
      'Study spatial acoustics, human perception, and industrial product design.',
      'Build a portfolio of 3D models or interactive mini-games on itch.io.'
    ],
    topColleges: {
      india: ['National Institute of Design (NID)', 'IIT Bombay IDC', 'Srishti Institute of Art, Design and Technology'],
      global: ['NYU Tisch ITP', 'University of Southern California (USC Games)', 'Royal College of Art (UK)']
    },
    karishmaTip: 'If your child loves gaming or 3D art, channel that passion productively. Spatial computing is not just video games; it is the future operating system of medical training, automotive design, and architecture.'
  },

  // 4. CLIMATE & BIO-TECH
  {
    id: 'climate-fintech-carbon',
    category: 'sustainability',
    title: 'Climate FinTech & ESG Carbon Economics',
    tagline: 'Directing trillion-dollar green capital transitions',
    badge: 'Global Policy Essential',
    growthScore: '92%',
    salaryRange: '₹15L – ₹55L+ / $100k – $220k',
    streamPrerequisites: 'Commerce with Math OR Humanities with Economics / Environmental Science',
    keySkills: ['Carbon Accounting Standards', 'ESG Compliance', 'Green Bond Valuation', 'Geospatial Satellite Verification'],
    whatTheyDo: 'Audit corporate carbon footprints, design green financial instruments, and verify compliance with international net-zero mandates for Fortune 500 companies.',
    highSchoolActionPlan: [
      'Engage with Model UN (UNEP committees) and environmental science initiatives.',
      'Study microeconomics, global climate accords (Paris Agreement), and green finance trends.',
      'Lead school campus sustainability audits and recycling optimization.'
    ],
    topColleges: {
      india: ['TERI School of Advanced Studies', 'St. Stephen’s College (Economics)', 'Ashoka University'],
      global: ['London School of Economics (LSE)', 'Columbia University Climate School', 'Yale School of the Environment']
    },
    karishmaTip: 'Every multinational company now requires Chief Sustainability Officers and ESG analysts. This is an incredible field combining high finance with real planetary impact.'
  },

  // 5. BUSINESS & LAW
  {
    id: 'sports-cyber-law',
    category: 'business-law',
    title: 'Sports, Entertainment & Cyber Law',
    tagline: 'Protecting athlete IP, esports rights & AI data privacy',
    badge: 'High Prestige & Retainer',
    growthScore: '91%',
    salaryRange: '₹18L – ₹80L+ / $130k – $300k',
    streamPrerequisites: 'Humanities with Legal Studies / English OR Commerce with Math (CLAT Track)',
    keySkills: ['IP Licensing', 'Arbitration & CAS Protocols', 'Cyber Law Compliance', 'M&A Contract Structuring'],
    whatTheyDo: 'Represent sports franchises in Court of Arbitration for Sport (CAS), negotiate athlete streaming contracts, and litigate cross-border AI copyright and data theft cases.',
    highSchoolActionPlan: [
      'Prepare for CLAT, AILET, or LSAT with intensive reading and analytical reasoning.',
      'Participate in parliamentary debating and mock trials.',
      'Read landmark sports arbitration rulings and digital copyright disputes.'
    ],
    topColleges: {
      india: ['NLSIU Bangalore', 'NALSAR Hyderabad', 'WBNUJS Kolkata'],
      global: ['Harvard Law School', 'University of Oxford', 'Georgetown University Law Center']
    },
    karishmaTip: 'Law has evolved far beyond criminal courts. Specialized legal counsels in esports, intellectual property, and streaming media command the highest retainer rates in the legal profession.'
  },

  // 6. NEUROSCIENCE & WELLNESS
  {
    id: 'cognitive-neuroscience',
    category: 'neuro-health',
    title: 'Cognitive Neuroscience & Neuro-Technology',
    tagline: 'Bridging the human brain with computing & psychology',
    badge: 'Frontier Science',
    growthScore: '95%',
    salaryRange: '₹18L – ₹65L+ / $110k – $250k',
    streamPrerequisites: 'Science (PCB / PCMB) with Biology & Mathematics / Psychology',
    keySkills: ['fMRI & EEG Processing', 'Brain-Computer Interfaces', 'Neuro-Pharmacology', 'Cognitive Modeling'],
    whatTheyDo: 'Research brain plasticity, develop neural prosthetic interfaces, and optimize human cognitive potential and psychiatric health through neuroscience.',
    highSchoolActionPlan: [
      'Strong focus on Biology, Chemistry, and basic programming.',
      'Read Oliver Sacks, Matthew Walker, and contemporary neuroscience papers.',
      'Participate in Brain Bee competitions and school science exhibitions.'
    ],
    topColleges: {
      india: ['IISc Bangalore', 'NIMHANS Bangalore', 'Ashoka University (Biology & Psychology)'],
      global: ['Johns Hopkins University', 'UCL (University College London)', 'UC Berkeley']
    },
    karishmaTip: 'The fusion of biology and technology is where the next decade’s major medical breakthroughs will happen. It satisfies both high scientific rigor and human empathy.'
  }
];

export const demographicBridge = [
  {
    id: 'security-vs-passion',
    topic: 'Career Security vs. Genuine Passion',
    parentPerspective: '“We want our child to choose a safe, proven path like traditional Engineering, Medicine, or CA so they are never unemployed.”',
    teenPerspective: '“I don’t want to spend 4 years memorizing formulas I hate just to do a job that AI might automate. I want to build or create something meaningful.”',
    eunoiaSolution: 'We introduce the concept of "Hedged Passion": combining high-employability core competencies (e.g. Applied Math or Data Science) with the student’s authentic passion (e.g. Sports Analytics, Game Design, or Sustainable Architecture) so they have both rock-solid security and deep joy.'
  },
  {
    id: 'degrees-vs-skills',
    topic: 'Brand Name College vs. Skillset',
    parentPerspective: '“We only want our child in an IIT, IIM, or Top 10 Ivy League, otherwise will employers even take them seriously?”',
    teenPerspective: '“The competition is crushing my mental health. I want a college environment where I can actually learn, do internships, and have a balanced life.”',
    eunoiaSolution: 'We show parents real employment and salary data proving that progressive, multidisciplinary universities (Ashoka, Krea, Plaksha, Flame, plus top global universities offering generous merit scholarships) provide higher placement rates in next-gen tech and business than outdated legacy institutes.'
  },
  {
    id: 'emerging-fields',
    topic: 'Untraditional Careers (Sports, Media, AI)',
    parentPerspective: '“Are sports management, esports, and UI/UX design real careers or just passing hobbies? Will they earn well?”',
    teenPerspective: '“These fields are the fastest-growing industries in the world right now! My friends and I engage with them daily.”',
    eunoiaSolution: 'We present verified 10-year industry growth metrics, salary benchmarks, and prerequisite roadmaps. When parents see that a Sports Performance Analyst or Spatial XR Designer earns ₹25L–₹60L+ with global mobility, skepticism turns into enthusiastic support.'
  }
];
