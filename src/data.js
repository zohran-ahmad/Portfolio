export const EMAIL = "zohrankhan05@gmail.com";
export const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;

export const emailjsConfig = {
  serviceId: "service_ki4j70u",  
  templateId: "template_15its9r", 
  publicKey: "44-Y9y278Zal1HE4e",   
};

export const profile = {
  name: "Zohran Ahmad Khan",
  role: "Software Development Engineer",
  greeting: "Hi, I'm",
  tagline:
    "Spend most of my time building web interfaces and working across the front and back of applications. Prefer when things just work and don’t look half-done. A lot of hours go into browser tools, docs, and trying different approaches until something sticks. Sometimes it runs clean on the first try, most times it doesn’t. Either way it keeps me at the screen longer than planned.",
  stats: [
    { value: "9.33", label: "CGPA" },
    { value: "3+", label: "Projects Shipped" },
    { value: "2027", label: "Graduating" },
  ],
  resumeUrl: "https://drive.google.com/file/d/1MNTJmJ0DmUA4INcfNLM2fn-X7uIXx0SQ/view?usp=sharing",
  socials: [
    { label: "GitHub", href: "https://github.com/zohran-ahmad" },
    { label: "LinkedIn", href: "https://linkedin.com/in/zohranahmad" },
    { label: "LeetCode", href: "https://leetcode.com/Zohran_Ahmad" },
    { label: "Email", href: GMAIL_COMPOSE_URL },
  ],
};

export const codeSnippet = `class Engineer {
  constructor() {
    this.name = "Zohran Ahmad Khan";
    this.stack = ["Java", "Spring", "React"];
    this.focus = "backend + AI systems";
  }

  build(idea) {
    return idea
      .design()
      .ship()
      .iterate();
  }
}

// currently: final year @ SRMIST
// status: open to SDE roles`;

export const education = [
  {
    degree: "B.Tech, Computer Science & Engineering",
    school: "S.R.M. Institute of Science and Technology (SRMIST), Kattankulathur",
    period: "2023 — 2027",
    detail: "CGPA 9.33",
    coursework: [
      "Object Oriented Programming",
      "Data Structures & Algorithms",
      "DBMS & SQL",
      "Operating Systems",
      "Computer Networks",
      "Compiler Design",
      "System Design",
    ],
  },
  {
    degree: "Higher Secondary Education",
    school: "Govt. Boys Higher Secondary School, Soura",
    period: "2022 - 2023",
    detail: "XII Score: 92.4%",
    coursework: [
      "PCM",
      "Information Practices"
    ]
  },
  {
    degree: "Secondary Education",
    school: "Tyndale Biscoe School",
    period: "2012 - 2022",
    detail: "X Score: 86.6%",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python"],
  },
  {
    category: "Frontend",
    items: ["HTML5", "CSS3", "React", "Vite", "Bootstrap CSS", "Tailwind CSS"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "MySQL"],
  },
  {
    category: "Cloud & Infra",
    items: ["AWS", "Docker", "Kubernetes", "Kafka"],
  },
  {
    category: "AI / ML",
    items: ["RAG & Embeddings", "OpenCV", "MediaPipe", "LLM APIs"],
  },
  {
    category: "Networking",
    items: ["Mininet", "Ryu (SDN)", "OpenFlow"],
  },
  {
    category: "Other Tools",
    items: ["Git", "Github", "MS Excel", "MS Planner", "Figma"]
  }
];

export const projects = [
  {
    title: "HybridDocs: RAG Pipeline with Hybrid Search",
    description:
      "Dense + sparse (BM25) retrieval fused with reciprocal rank fusion, then reranked with a local cross-encoder. Built and benchmarked over 2,500+ chunked docs.",
    tags: ["Python", "Sentence-Transformers", "FastAPI docs corpus"],
    links: { 
      code: "https://github.com/zohran-ahmad/hybrid-docs", 
      demo: "" 
    },
  },
  {
    title: "SentryOps: Engineering Command Center",

    description:
      "AI-powered DevOps observability platform. Kafka event backbone feeds Spring Boot microservices; a RAG-based agent does automated root-cause analysis on incidents, surfaced on a real-time React dashboard.",
    tags: ["Kafka", "Spring Boot", "Kubernetes", "React", "RAG"],
    links: { 
      code: "https://github.com/zohran-ahmad/sentryops", 
      demo: "" 
    },
  },
];

export const certifications = [
  {
    name: "Business Intelligence and Analytics",
    issuer: "NPTEL",
    year: "2026",
    url: "https://nptel.ac.in/noc/E_Certificate/NOC26CS64S15030681905056431",
    placeholder: false,
  },
  {
    name: "Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    url: "https://drive.google.com/file/d/1l8ryKg9Em8ZZjEQXQzEZhPafZ84_J0uM/view?usp=sharing",
    placeholder: false,
  },
  {
    name: "Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    url: "https://drive.google.com/file/d/1l8ryKg9Em8ZZjEQXQzEZhPafZ84_J0uM/view?usp=sharing",
    placeholder: false,
  },
];

export const contact = {
  email: EMAIL,
  location: "Srinagar, Jammu & Kashmir, India",
  blurb:
    "Open to SDE internships and full-time roles. The fastest way to reach me is email — I read everything.",
};
