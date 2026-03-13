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
    "Production ML pipelines that serve real users. Fine-tuned language models deployed at scale. Clinical AI systems for ICU mortality prediction. End-to-end data platforms processing millions of records daily.",
    "Currently: embedding fine-tuning, neural machine translation with DSPy, prompt optimization, agentic workflows with LangChain/LangGraph, LLM-as-a-Judge evaluation, and AWS Bedrock proxy engineering at Gracenote (Nielsen).",
    "Previously: built clinical NLP systems at J&J MedTech, published 5 peer-reviewed papers across Springer, IEEE, and Elsevier, and fine-tuned 8 LLMs published on HuggingFace.",
    "When I'm not training models, I'm playing lead guitar or volunteering with Liquid Trees on climate ML using satellite data.",
  ],
};

export const impact = [
  { value: "5", label: "Peer-Reviewed Papers", sub: "Springer · IEEE · Elsevier", color: "violet" },
  { value: "8", label: "Fine-tuned LLMs", sub: "Gemma-3 models on HuggingFace", color: "cyan" },
  { value: "10+", label: "Open Datasets", sub: "Published on HuggingFace", color: "amber" },
  { value: "1200", label: "TCS CodeVita Rank", sub: "Top 1.2% out of 100K+ coders", color: "emerald" },
  { value: "3450", label: "WBJEE Rank", sub: "Top 3.5% out of 100K+ candidates", color: "violet" },
  { value: "5+", label: "Years in Production ML", sub: "Clinical AI · NLP · Data Platforms", color: "cyan" },
];

export const experience = [
  {
    role: "Senior AI/ML Engineer",
    company: "Gracenote, a Nielsen Company",
    period: "2025 – Present",
    current: true,
    bullets: [
      "Embedding fine-tuning for content similarity & recommendation systems",
      "Neural machine translation pipelines using DSPy & prompt optimization",
      "Agentic workflows with LangChain/LangGraph for automated data processing",
      "Golden dataset curation & LLM-as-a-Judge evaluation frameworks",
      "AWS Bedrock proxy engineering & ML pipeline harness design",
    ],
  },
  {
    role: "Data Architect & Data Scientist",
    company: "TCS → Johnson & Johnson MedTech",
    period: "2023 – 2025",
    bullets: [
      "Built clinical NLP models for sepsis-AKI mortality prediction on MIMIC-IV",
      "Designed enterprise data platform architecture with automated quality gates",
      "Led cloud-native migration of legacy ETL pipelines",
      "Mentored 15+ engineers on ML best practices & system design",
    ],
  },
  {
    role: "COE R&D Software Engineer",
    company: "TCS → Johnson & Johnson",
    period: "2022 – 2023",
    bullets: [
      "R&D on advanced NLP techniques for medical document processing",
      "Built automated testing & CI/CD frameworks for ML model deployment",
      "Cross-functional collaboration across global engineering teams",
    ],
  },
  {
    role: "Data Engineer → Lead",
    company: "TCS → Johnson & Johnson Vision",
    period: "2020 – 2022",
    bullets: [
      "Promoted from IC to Lead within 18 months",
      "End-to-end data pipelines processing millions of records daily",
      "Led team of 10+ engineers across multiple workstreams",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Param.ai",
    period: "2018",
    bullets: [
      "Built ML models for resume parsing & candidate-job matching",
      "Custom word embeddings prototype adopted by the company",
    ],
  },
];

export const education = [
  {
    degree: "MTech Industrial AI",
    school: "IIT Madras",
    period: "2022 – 2024",
    detail: "GPA 8.66 · Thesis: Sepsis-AKI Mortality Prediction using Deep Learning on MIMIC-IV",
  },
  {
    degree: "BTech Information Technology",
    school: "KGEC",
    period: "2016 – 2020",
    detail: "CGPA 8.15 · Swami Vivekananda Merit Scholar · 5 published research papers",
  },
];

export const skills = {
  "ML & AI": ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "LangChain", "LangGraph", "DSPy", "OpenAI", "AWS Bedrock", "MLflow", "W&B"],
  "NLP & LLMs": ["LoRA/QLoRA Fine-tuning", "Prompt Engineering", "RAG", "Embedding Models", "RLHF", "LLM-as-a-Judge", "Tokenizers"],
  "Data Engineering": ["Spark", "Airflow", "dbt", "Snowflake", "Databricks", "Kafka", "Delta Lake"],
  "Languages": ["Python", "SQL", "JavaScript", "Java", "Go", "Bash", "R"],
  "Cloud & Infra": ["AWS (SageMaker, Bedrock, S3, Lambda, Glue)", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
};

export const certifications = [
  "PCAP – Certified Associate in Python Programming",
  "Microsoft Azure AI Fundamentals (AI-900)",
  "Microsoft Azure Data Fundamentals (DP-900)",
  "Microsoft Azure Fundamentals (AZ-900)",
  "MITx 6.86x – Machine Learning with Python",
  "MITx 6.00.1x – Introduction to CS & Programming",
  "DSA Specialization – UC San Diego (6 courses)",
  "Blockchain Specialization – U. of Buffalo (4 courses)",
  "EF SET C2 Proficiency – English",
  "Google – Crash Course on Python",
  "Detecting COVID-19 with Chest X-Ray (PyTorch)",
];

export const publications = [
  { title: "FemmeBand: IoT Smart Security Band using EMG Sensors", venue: "Springer", year: "2022", link: "https://link.springer.com/article/10.1007/s11334-022-00490-2" },
  { title: "HeartHealth: Multi-Attribute Heart Condition Monitoring via Fuzzy-TOPSIS", venue: "IEEE", year: "2021", link: "https://ieeexplore.ieee.org/abstract/document/9455848" },
  { title: "Predicting Bradycardia & Atrial Fibrillation Using Fuzzy Logic & IoT", venue: "Elsevier", year: "2021", link: "https://www.sciencedirect.com/science/article/pii/S2590093521000023" },
  { title: "ValveCare: Fuzzy-Based Heart Disease Prediction with Arduino IoT", venue: "Springer", year: "2021", link: "https://link.springer.com/chapter/10.1007/978-3-030-75529-4_18" },
  { title: "SafeBand: IoT Smart Security Band with Instant SOS Messaging", venue: "Springer", year: "2021", link: "https://link.springer.com/chapter/10.1007/978-981-16-5207-3_12" },
];

export const projects = [
  { name: "Gemma-3 Fine-tuned Models", desc: "8 fine-tuned Gemma-3 models for various NLP tasks with 10+ datasets published on HuggingFace.", tags: ["HuggingFace", "LoRA", "Gemma-3"], link: "https://huggingface.co/stabgan", featured: true },
  { name: "Clinical AI — Sepsis-AKI", desc: "Deep learning system for ICU mortality prediction trained on MIMIC-IV clinical data. MTech thesis at IIT Madras.", tags: ["PyTorch", "Clinical AI", "MIMIC-IV"], featured: true },
  { name: "Neural Translation (DSPy)", desc: "Prompt-optimized translation pipeline using DSPy for automated prompt engineering & neural machine translation.", tags: ["DSPy", "NLP", "Prompt Optimization"] },
  { name: "Agentic RAG Workflows", desc: "Production agentic systems using LangChain & LangGraph for automated data processing & intelligent retrieval.", tags: ["LangChain", "LangGraph", "RAG"] },
  { name: "LLM-as-a-Judge", desc: "Evaluation framework using LLMs to assess model outputs with golden dataset curation & automated quality scoring.", tags: ["LLM", "Evaluation", "Quality"] },
  { name: "Liquid Trees", desc: "Volunteer: satellite imagery & ML for river bioremediation & environmental monitoring.", tags: ["Climate ML", "Satellite", "Volunteer"], special: true },
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