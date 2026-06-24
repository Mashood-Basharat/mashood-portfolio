import type { SupabaseClient } from "@supabase/supabase-js";

type DocumentSeed = {
  content: string;
  document_type: string;
  source_title: string;
};

type ProjectSeed = {
  title: string;
  description: string;
  github_url: string;
  tech_stack: string[];
  featured: boolean;
};

const portfolioDocuments: DocumentSeed[] = [
  {
    document_type: "about",
    source_title: "About Mashood",
    content:
      "Mashood Basharat is a Computer Vision and AI Developer based in Lahore, Pakistan. He holds a BS in Software Engineering from the Virtual University of Pakistan (2021-2025) and FSc Pre-Medical from Govt Postgraduate College Sahiwal (2018-2020). He specializes in RAG pipelines, offline LLM and TTS systems on edge hardware, real-time object detection with YOLO and OpenCV, and Python GUI application architecture.",
  },
  {
    document_type: "skills",
    source_title: "Skills & Technologies",
    content:
      "Mashood's technical skills span AI and Computer Vision (YOLO, OpenCV, TensorFlow, CNNs, MediaPipe), AI Engineering and LLM Stack (RAG, LangChain, LlamaIndex, Ollama, LLM Deployment, Agentic Workflows), Backend Development (Python, FastAPI, Flask, REST APIs, SQLAlchemy), Databases and Vector Storage (PostgreSQL, SQLite, SQLModel, Vector Databases, Supabase), Frontend Development (React, Next.js, JavaScript, Tailwind CSS, Bootstrap, HTML and CSS), Embedded and Edge AI (Raspberry Pi, Arduino, Sensor Integration, Edge AI Applications), and Deployment and Tools (Docker, Git, GitHub, Linux, n8n Workflows).",
  },
  {
    document_type: "experience",
    source_title: "Computer Vision Zone Role",
    content:
      "Mashood works at Computer Vision Zone as a Computer Vision and AI Developer (Oct 2025 - Present). He builds complete educational products including Arduino computer vision courses and Raspberry Pi AI courses. He designs hardware, writes full production code, and develops structured curricula. Arduino course builds include license plate access control, face-based door locks, weapon detection alarms, and dry/wet waste separation systems. Raspberry Pi AI courses cover locally hosted chatbot systems and private employee management platforms.",
  },
  {
    document_type: "experience",
    source_title: "PyVisual Python Developer Role",
    content:
      "Mashood previously worked as a Python Developer at Computer Vision Zone (April 2025 - Sept 2025), contributing to PyVisual, a Python GUI builder library. He developed reusable OOP classes, interactive UI components, and custom GUI elements using component-based architecture.",
  },
  {
    document_type: "course",
    source_title: "Stable Diffusion on Raspberry Pi Course",
    content:
      "Mashood created a Computer Vision Zone course on running Stable Diffusion image generation locally on a Raspberry Pi using the Stable Diffusion API. The course covers setup, optimization, and practical deployment of AI image generation on edge hardware.",
  },
  {
    document_type: "course",
    source_title: "Learn OpenMV in 1 Hour Course",
    content:
      "Mashood developed a Computer Vision Zone course teaching OpenMV fundamentals for embedded vision workflows. The course provides a comprehensive introduction to OpenMV for computer vision applications on microcontroller hardware.",
  },
  {
    document_type: "course",
    source_title: "Free AI with Raspberry Pi using Gemini Course",
    content:
      "Mashood built a Computer Vision Zone course on integrating Google Gemini-powered AI capabilities on Raspberry Pi hardware. The course covers how to leverage Gemini's free tier for AI applications on edge devices.",
  },
  {
    document_type: "course",
    source_title: "Learn Modern Computer Vision in 2026 Course",
    content:
      "Mashood created a Computer Vision Zone course covering modern computer vision from basics to advanced concepts and practical applications. The course covers foundational CV techniques, deep learning approaches, and real-world deployment strategies for building production CV systems.",
  },
  {
    document_type: "project",
    source_title: "AI Voice Agent on Raspberry Pi",
    content:
      "Mashood built an offline AI voice agent on Raspberry Pi using Ollama with Phi-3.5, Faster-Whisper for speech recognition, and Kokoro for text-to-speech. The system supports private conversational interaction with JSON-based memory storage and runs without cloud AI dependencies.",
  },
  {
    document_type: "project",
    source_title: "AI Employee Attendance System",
    content:
      "Mashood developed a Raspberry Pi edge-AI attendance system using MediaPipe, OpenCV, and face recognition pipelines. It performs real-time employee identification with local webcam integration and private on-device data storage.",
  },
  {
    document_type: "project",
    source_title: "Tech News Research Automation",
    content:
      "Mashood created an n8n-based tech news monitoring workflow that ingests RSS feeds from sources like TechCrunch and Hacker News, filters recent AI and software engineering articles, and sends structured email reports automatically.",
  },
  {
    document_type: "contact",
    source_title: "Contact Information",
    content:
      "Contact Mashood Basharat at mashoodbasharat7890@gmail.com or +92-3117358388. He is based in Lahore, Pakistan. GitHub: https://github.com/Mashood-Basharat. LinkedIn: https://www.linkedin.com/in/mashood-basharat-844b51243. He is open to AI developer roles, machine learning integrations, and embedded systems consulting.",
  },
  {
    document_type: "personal",
    source_title: "Job Preferences & Target Roles",
    content:
      "Mashood is seeking roles as an AI Developer, Computer Vision Engineer, Machine Learning Engineer, or Junior AI Engineer. He prefers remote or hybrid work and is open to relocation. He is available for freelance AI consulting. For notice period and availability details, contact Mashood directly at mashoodbasharat7890@gmail.com.",
  },
  {
    document_type: "education",
    source_title: "Favorite University Courses",
    content:
      "During his BS in Software Engineering at Virtual University of Pakistan, Mashood's favorite courses were Artificial Intelligence, Digital Image Processing, Data Structures and Algorithms (DSA), Database Management Systems (DBMS), and Object-Oriented Programming (OOP). These courses shaped his interest in AI, computer vision, and software engineering.",
  },
  {
    document_type: "project",
    source_title: "SyncKingKong AI Lip Syncing Platform (Academic FYP)",
    content:
      "SyncKingKong was Mashood's Final Year Project (FYP) — an AI-based lip syncing platform built as a university requirement. It is an academic project and is NOT featured as a demo on his portfolio website. The name is a word play on syncing and KingKong. He used state-of-the-art Wav2Lip, fine-tuned it by adding degradation techniques, and built the web app using Flask. The project demonstrates his deep learning and full-stack AI deployment skills.",
  },
  {
    document_type: "personal",
    source_title: "AI Journey & Motivation",
    content:
      "Mashood started exploring AI in his third year of university when ChatGPT gained massive popularity. He wanted to learn futuristic technologies. His real turning point was his Final Year Project (FYP) — SyncKingKong, an AI lip syncing platform. This project taught him deep learning, model fine-tuning, and building AI-powered web apps. After his FYP, he started learning computer vision and LLMs more seriously. He only learned edge AI and embedded systems after joining Computer Vision Zone as a professional — these were not part of his university work.",
  },
  {
    document_type: "experience",
    source_title: "Career Timeline Summary",
    content:
      "Mashood's AI journey timeline: 3rd year of university (2023-2024) — got interested in AI after ChatGPT. He then built SyncKingKong (FYP) which was his first major AI project. April 2025 — started as Python Developer at Computer Vision Zone working on PyVisual. October 2025 — promoted to Computer Vision and AI Developer, where he learned edge AI, embedded systems, and built AI courses on Raspberry Pi and Arduino. His professional edge AI experience is entirely from his job, not from university.",
  },
];

const projects: ProjectSeed[] = [
  {
    title: "AI Voice Agent on Raspberry Pi",
    description:
      "Offline speech-to-speech assistant using Ollama, Faster-Whisper, and Kokoro TTS with JSON-based memory on Raspberry Pi.",
    github_url: "https://github.com/Mashood-Basharat",
    tech_stack: ["Python", "Ollama", "Phi-3.5", "Faster-Whisper", "Kokoro TTS", "Raspberry Pi"],
    featured: true,
  },
  {
    title: "AI-Based Employee Attendance System",
    description:
      "Edge face recognition attendance platform with MediaPipe, OpenCV, and local storage on Raspberry Pi.",
    github_url: "https://github.com/Mashood-Basharat",
    tech_stack: ["Raspberry Pi", "MediaPipe", "OpenCV", "Python", "Face Recognition"],
    featured: true,
  },
  {
    title: "AI-Powered Tech News Monitoring & Research Automation",
    description:
      "n8n workflow for RSS ingestion, filtering, and automated email reporting on technology news trends.",
    github_url: "https://github.com/Mashood-Basharat",
    tech_stack: ["n8n", "RSS", "Automation", "Email API", "Python"],
    featured: true,
  },
  {
    title: "PyVisual GUI Builder Library",
    description:
      "Reusable Python GUI components and OOP-based UI building blocks for faster desktop application development.",
    github_url: "https://github.com/Mashood-Basharat",
    tech_stack: ["Python", "OOP", "GUI Library", "Component Architecture"],
    featured: true,
  },
];

export async function seedPortfolioDocuments(
  generateEmbedding: (text: string, options?: { mode?: "query" | "document" }) => Promise<number[]>,
  supabaseServer: SupabaseClient
) {
  const { error: deleteError } = await supabaseServer.from("portfolio_documents").delete().neq("id", 0);

  if (deleteError) {
    throw new Error(`Failed to clear documents: ${deleteError.message}`);
  }

  const results: string[] = [];

  for (const doc of portfolioDocuments) {
    const embedding = await generateEmbedding(doc.content, { mode: "document" });

    const { error } = await supabaseServer.from("portfolio_documents").insert({
      content: doc.content,
      document_type: doc.document_type,
      source_title: doc.source_title,
      embedding,
    });

    if (error) {
      throw new Error(`Failed to insert "${doc.source_title}": ${error.message}`);
    }

    results.push(doc.source_title);
  }

  return results;
}

export async function seedProjects(supabaseServer: SupabaseClient) {
  const { error: deleteError } = await supabaseServer.from("projects").delete().neq("id", 0);

  if (deleteError) {
    throw new Error(`Failed to clear projects: ${deleteError.message}`);
  }

  const { error } = await supabaseServer.from("projects").insert(projects);

  if (error) {
    throw new Error(`Failed to insert projects: ${error.message}`);
  }

  return projects.length;
}
