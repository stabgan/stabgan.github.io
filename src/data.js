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
  scholar: "https://scholar.google.com/citations?user=KAUSTABH",
  taglines: [
    "Senior AI/ML Engineer @ Gracenote (Nielsen)",
    "MTech Industrial AI @ IIT Madras",
    "Production ML · Clinical AI · LLM Fine-tuning",
    "Embedding Fine-tuning · DSPy · LangChain · LangGraph",
    "5 Published Research Papers · 8 Fine-tuned LLMs",
  ],
  bio: "I build production ML systems, fine-tune LLMs, and architect data platforms at scale. Currently deep into embedding fine-tuning, neural machine translation with DSPy, prompt optimization, and agentic workflows with LangChain/LangGraph. I also work on golden dataset curation, LLM-as-a-Judge evaluation, AWS Bedrock proxy engineering, and harness engineering for ML pipelines.",
};

export const highlights = [
  { value: "AUROC 0.95", label: "Production ML Models" },
  { value: "5", label: "Peer-Reviewed Papers" },
  { value: "100+", label: "Prod Releases (<2% rework)" },
  { value: "87%", label: "Fewer Data Incidents" },
  { value: "8", label: "Fine-tuned LLM Models" },
  { value: "10+", label: "HuggingFace Datasets & Models" },
  { value: "25+", label: "Engineers Mentored" },
  { value: "11K+", label: "LinkedIn Followers" },
];

export const experience = [
  {
    role: "Senior AI/ML Engineer",
    company: "Gracenote, a Nielsen Company",
    location: "Bengaluru, India",
    period: "2025 – Present",
    description: [
      "Building production ML systems for media recognition and metadata enrichment",
      "Embedding fine-tuning for content similarity and recommendation systems",
      "Neural machine translation pipelines using DSPy and prompt optimization",
      "Agentic workflows with LangChain and LangGraph for automated data processing",
      "Golden dataset curation and LLM-as-a-Judge evaluation frameworks",
      "AWS Bedrock proxy engineering and harness engineering for ML pipelines",
    ],
  },
  {
    role: "Data Architect & Data Scientist",
    company: "TCS (Client: Johnson & Johnson MedTech)",
    location: "Bengaluru, India",
    period: "2023 – 2025",
    description: [
      "Architected enterprise data platform serving 50+ downstream consumers",
      "Built clinical NLP models achieving AUROC 0.95 for sepsis-AKI mortality prediction",
      "Reduced data incidents by 87% through automated quality frameworks",
      "Led migration of legacy ETL to modern cloud-native data pipelines",
      "Mentored 15+ engineers on ML best practices and data architecture",
    ],
  },
  {
    role: "COE R&D Software Engineer",
    company: "TCS (Client: Johnson & Johnson)",
    location: "India",
    period: "2022 – 2023",
    description: [
      "R&D on advanced NLP techniques for medical document processing",
      "Developed automated testing frameworks reducing rework to <2%",
      "100+ production releases with enterprise-grade CI/CD pipelines",
      "Cross-functional collaboration across global engineering teams",
    ],
  },
  {
    role: "Data Engineer → Lead",
    company: "TCS (Client: Johnson & Johnson Vision)",
    location: "India",
    period: "2020 – 2022",
    description: [
      "Promoted from Data Engineer to Lead within 18 months",
      "Built end-to-end data pipelines processing millions of records daily",
      "Designed data models and ETL workflows for vision care analytics",
      "Led a team of 10+ engineers across multiple workstreams",
    ],
  },
  {
    role: "Machine Learning Intern",
    company: "Param.ai",
    location: "Kolkata, India",
    period: "2018",
    description: [
      "Built ML models for resume parsing and candidate-job matching",
      "NLP pipeline development for unstructured text extraction",
    ],
  },
];

export const education = [
  {
    degree: "MTech in Industrial AI",
    school: "Indian Institute of Technology (IIT) Madras",
    period: "2022 – 2024",
    gpa: "GPA: 8.66 / 10",
    thesis: "Sepsis-AKI Mortality Prediction using MIMIC-IV Clinical Data",
    details: "Thesis on clinical AI — built deep learning models for ICU mortality prediction achieving AUROC 0.95 on MIMIC-IV dataset.",
  },
  {
    degree: "BTech in Information Technology",
    school: "Kalyani Government Engineering College (KGEC)",
    period: "2016 – 2020",
    gpa: "CGPA: 8.15 / 10",
    details: "Swami Vivekananda Merit Scholarship recipient. WBJEE Rank 3,450 out of 100K+ candidates. TCS CodeVita Top 1,200 out of 100K+ participants.",
  },
];

export const skills = {
  "ML & AI": ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace Transformers", "LangChain", "LangGraph", "DSPy", "OpenAI API", "AWS Bedrock", "MLflow", "Weights & Biases"],
  "Data Engineering": ["Apache Spark", "Airflow", "dbt", "Snowflake", "Databricks", "Kafka", "Delta Lake", "Great Expectations"],
  "Languages": ["Python", "SQL", "JavaScript", "Java", "Bash", "R"],
  "Cloud & DevOps": ["AWS (SageMaker, Bedrock, S3, Lambda, Glue)", "Azure (AI, Data, Fundamentals)", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD"],
  "NLP & LLMs": ["Fine-tuning (LoRA, QLoRA)", "Prompt Engineering", "RAG", "Embedding Models", "Tokenizers", "RLHF", "LLM-as-a-Judge"],
};

export const publications = [
  {
    title: "Sepsis-AKI Mortality Prediction Using Deep Learning on MIMIC-IV",
    venue: "Springer",
    year: "2024",
    link: "#",
  },
  {
    title: "Automated Medical Document Classification Using Transformer Models",
    venue: "IEEE",
    year: "2023",
    link: "#",
  },
  {
    title: "Optimizing Data Pipeline Performance for Healthcare Analytics",
    venue: "Elsevier",
    year: "2023",
    link: "#",
  },
  {
    title: "Clinical NLP for Adverse Event Detection in Electronic Health Records",
    venue: "IEEE",
    year: "2022",
    link: "#",
  },
  {
    title: "Deep Learning Approaches for Medical Image Analysis",
    venue: "Springer",
    year: "2021",
    link: "#",
  },
];

export const certifications = [
  { name: "PCAP – Certified Associate in Python Programming", issuer: "Python Institute" },
  { name: "Azure AI Fundamentals (AI-900)", issuer: "Microsoft" },
  { name: "Azure Data Fundamentals (DP-900)", issuer: "Microsoft" },
  { name: "Azure Fundamentals (AZ-900)", issuer: "Microsoft" },
  { name: "Machine Learning with Python", issuer: "MIT (Online)" },
];

export const projects = [
  {
    name: "Gemma-3 Fine-tuned Models",
    description: "Collection of 8 fine-tuned Gemma-3 models for various NLP tasks, published on HuggingFace with 10+ datasets.",
    tags: ["HuggingFace", "Fine-tuning", "Gemma-3", "LoRA"],
    link: "https://huggingface.co/stabgan",
  },
  {
    name: "Clinical AI — Sepsis-AKI Prediction",
    description: "Deep learning system for ICU mortality prediction using MIMIC-IV clinical data, achieving AUROC 0.95 in production.",
    tags: ["PyTorch", "Clinical AI", "MIMIC-IV", "Deep Learning"],
  },
  {
    name: "Neural Machine Translation with DSPy",
    description: "Prompt-optimized translation pipeline using DSPy framework for automated prompt engineering and neural translation.",
    tags: ["DSPy", "NLP", "Prompt Optimization", "Translation"],
  },
  {
    name: "Agentic RAG Workflows",
    description: "Production agentic systems using LangChain and LangGraph for automated data processing and intelligent retrieval.",
    tags: ["LangChain", "LangGraph", "RAG", "Agents"],
  },
  {
    name: "LLM-as-a-Judge Evaluation",
    description: "Evaluation framework using LLMs to assess model outputs, golden dataset curation, and automated quality scoring.",
    tags: ["LLM", "Evaluation", "Golden Dataset", "Quality"],
  },
  {
    name: "Liquid Trees — Climate ML",
    description: "Volunteer project using satellite imagery and ML for river bioremediation and environmental monitoring.",
    tags: ["Satellite Data", "Climate", "Computer Vision", "Volunteer"],
    link: "#",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Research", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];