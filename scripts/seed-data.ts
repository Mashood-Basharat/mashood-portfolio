import dotenv from "dotenv";
import type { SupabaseClient } from "@supabase/supabase-js";

dotenv.config({ path: ".env.local" });

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

async function seedPortfolioDocuments(
  generateEmbedding: (text: string, options?: { mode?: "query" | "document" }) => Promise<number[]>,
  supabaseServer: SupabaseClient
) {
  console.log("Seeding portfolio_documents...");

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

    console.log(`  inserted: ${doc.source_title}`);
  }
}

async function seedProjects(supabaseServer: SupabaseClient) {
  console.log("Seeding projects...");

  const { error } = await supabaseServer.from("projects").insert(projects);

  if (error) {
    throw new Error(`Failed to insert projects: ${error.message}`);
  }

  console.log(`  inserted ${projects.length} projects`);
}

async function main() {
  const { generateEmbedding } = await import("../src/lib/embeddings");
  const { supabaseServer } = await import("../src/lib/supabase-server");

  await seedPortfolioDocuments(generateEmbedding, supabaseServer);
  await seedProjects(supabaseServer);
  console.log("Seed complete.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
