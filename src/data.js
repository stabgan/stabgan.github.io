export const personal = {
  name: "Kaustabh Ganguly",
  handle: "stabgan",
  title: "Senior AI/ML Engineer",
  company: "Gracenote, a Nielsen Company",
  location: "Bengaluru, India",
  email: "kaustabhganguly@gmail.com",
  website: "https://stabgan.com",
  github: "https://github.com/stabgan",
  linkedin: "https://www.linkedin.com/in/stabgan",
  huggingface: "https://huggingface.co/stabgan",
  taglines: [
    "Building production ML systems at scale",
    "Fine-tuning LLMs & embedding models",
    "Neural translation with DSPy & prompt optimization",
    "Agentic workflows with LangChain & LangGraph",
    "Published researcher · Springer · IEEE · Elsevier",
  ],
  bio: [
    "I build systems that think.",
    "Production ML pipelines. Fine-tuned language models. Clinical AI that predicts ICU outcomes. Data platforms serving 50+ downstream consumers at scale.",
    "Currently: embedding fine-tuning, neural machine translation with DSPy, prompt optimization, agentic workflows with LangChain/LangGraph, LLM-as-a-Judge evaluation, and AWS Bedrock proxy engineering at Gracenote (Nielsen).",
    "Previously: architected enterprise data platforms at J&J MedTech, published 5 peer-reviewed papers, and shipped 100+ production releases with <2% rework rate.",
    "When I'm not training models, I'm playing lead guitar or volunteering with Liquid Trees on climate ML using satellite data.",
  ],
};

export const impact = [
  { value: "100+", label: "Production Deploys", sub: "<2% rework rate", color: "cyan" },
  { value: "87%", label: "Fewer Data Incidents", sub: "Automated quality frameworks", color: "emerald" },
  { value: "5", label: "Published Papers", sub: "Springer · IEEE · Elsevier", color: "violet" },
  { value: "8", label: "Fine-tuned LLMs", sub: "10+ datasets on HuggingFace", color: "amber" },
  { value: "50+", label: "Downstream Consumers", sub: "Enterprise data platform", color: "cyan" },
  { value: "25+", label: "Engineers Mentored", sub: "Cross-functional teams", color: "violet" },
];

export const experience = [
  {
    role: "Senior AI/ML Engineer",
    company: "Gracenote, a Nielsen Company",
    period: "2025 – Present",
    current: true,
    bullets: [
      "Embedding fine-tuning for content similarity & recommendation",
      "Neural machine translation with DSPy & prompt optimization",
      "Agentic workflows with LangChain/LangGraph",
      "Golden dataset curation & LLM-as-a-Judge evaluation",
      "AWS Bedrock proxy & harness engineering",
    ],
  },
  {
    role: "Data Architect & Data Scientist",
    company: "TCS → Johnson & Johnson MedTech",
    period: "2023 – 2025",
    bullets: [
      "Architected data platform serving 50+ downstream consumers",
      "Clinical NLP models for sepsis-AKI mortality prediction",
      "Reduced data incidents by 87% via automated quality frameworks",
      "Led cloud-native data pipeline migration",
    ],
  },
  {
    role: "COE R&D Software Engineer",
    company: "TCS → Johnson & Johnson",
    period: "2022 – 2023",
    bullets: [
      "Advanced NLP for medical document processing",
      "100+ production releases with enterprise CI/CD",
      "Automated testing frameworks reducing rework to <2%",
    ],
  },
  {
    role: "Data Engineer → Lead",
    company: "TCS → Johnson & Johnson Vision",
    period: "2020 – 2022",
    bullets: [
      "Promoted to Lead within 18 months",
      "End-to-end pipelines processing millions of records daily",
      "Led team of 10+ engineers across workstreams",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Param.ai",
    period: "2018",
    bullets: [
      "ML models for resume parsing & candidate matching",
      "NLP pipeline for unstructured text extraction",
    ],
  },
];

export const education = [
  {
    degree: "MTech Industrial AI",
    school: "IIT Madras",
    period: "2022 – 2024",
    detail: "GPA 8.66 · Thesis: Sepsis-AKI Mortality Prediction (MIMIC-IV)",
  },
  {
    degree: "BTech Information Technology",
    school: "KGEC",
    period: "2016 – 2020",
    detail: "CGPA 8.15 · Swami Vivekananda Scholar · WBJEE Rank 3,450/100K+",
  },
];

export const skills = {
  "ML & AI": ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "LangChain", "LangGraph", "DSPy", "OpenAI", "AWS Bedrock", "MLflow", "W&B"],
  "Data Engineering": ["Spark", "Airflow", "dbt", "Snowflake", "Databricks", "Kafka", "Delta Lake"],
  "Languages": ["Python", "SQL", "JavaScript", "Java", "Bash", "R"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
  "NLP & LLMs": ["LoRA/QLoRA", "Prompt Engineering", "RAG", "Embeddings", "RLHF", "LLM-as-a-Judge"],
};

export const certifications = [
  "PCAP – Python Programming",
  "Azure AI Fundamentals",
  "Azure Data Fundamentals",
  "Azure Fundamentals",
  "MIT – ML with Python",
];

export const publications = [
  { title: "FemmeBand: IoT Smart Security Band using EMG Sensors", venue: "Springer", year: "2022", link: "https://link.springer.com/article/10.1007/s11334-022-00490-2" },
  { title: "HeartHealth: Multi-Attribute Heart Condition Monitoring via Fuzzy-TOPSIS", venue: "IEEE", year: "2021", link: "https://ieeexplore.ieee.org/abstract/document/9455848" },
  { title: "Predicting Bradycardia & Atrial Fibrillation Using Fuzzy Logic & IoT", venue: "Elsevier", year: "2021", link: "https://www.sciencedirect.com/science/article/pii/S2590093521000023" },
  { title: "ValveCare: Fuzzy-Based Heart Disease Prediction with Arduino IoT", venue: "Springer", year: "2021", link: "https://link.springer.com/chapter/10.1007/978-3-030-75529-4_18" },
  { title: "SafeBand: IoT Smart Security Band with Instant SOS Messaging", venue: "Springer", year: "2021", link: "https://link.springer.com/chapter/10.1007/978-981-16-5207-3_12" },
];

export const projects = [
  { name: "Gemma-3 Fine-tuned Models", desc: "8 fine-tuned Gemma-3 models for NLP tasks with 10+ datasets on HuggingFace.", tags: ["HuggingFace", "LoRA", "Gemma-3"], link: "https://huggingface.co/stabgan", featured: true },
  { name: "Clinical AI — Sepsis-AKI", desc: "Deep learning for ICU mortality prediction on MIMIC-IV clinical data.", tags: ["PyTorch", "Clinical AI", "MIMIC-IV"], featured: true },
  { name: "Neural Translation (DSPy)", desc: "Prompt-optimized translation pipeline with automated prompt engineering.", tags: ["DSPy", "NLP", "Prompt Optimization"] },
  { name: "Agentic RAG Workflows", desc: "Production agentic systems for automated data processing & retrieval.", tags: ["LangChain", "LangGraph", "RAG"] },
  { name: "LLM-as-a-Judge", desc: "Evaluation framework with golden dataset curation & automated quality scoring.", tags: ["LLM", "Evaluation", "Quality"] },
  { name: "Liquid Trees", desc: "Volunteer: satellite imagery & ML for river bioremediation & climate monitoring.", tags: ["Climate ML", "Satellite", "Volunteer"], special: true },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Impact", href: "#impact" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];