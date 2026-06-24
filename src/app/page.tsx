"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/project-card";
import VideoEmbed from "@/components/video-embed";
import {
  Cpu,
  Database,
  Layers,
  Bot,
  Terminal,
  Code,
  Sliders,
  Mail,
  Phone,
  ExternalLink,
  Play,
  ArrowRight,
  Menu,
  X,
  MapPin,
  Calendar,
  GraduationCap,
  Sparkles,
  ChevronRight
} from "lucide-react";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
}

interface VideoDemo {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  tags: string[];
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const projects: Project[] = [
    {
      title: "AI Voice Agent on Raspberry Pi",
      description: "A locally deployed AI-powered voice assistant designed for private offline interaction, real-time voice communication, and personalized memory-based responses.",
      longDescription: "Built an offline voice AI system on Raspberry Pi using Hugging Face models deployed through Ollama (Phi-3.5), Faster-Whisper for speech recognition, and Kokoro for text-to-speech synthesis. Implemented personalized memory handling through JSON-based user context storage, enabling private conversational interaction without reliance on cloud-based AI services.",
      tech: ["Python", "Ollama", "Phi-3.5", "Faster-Whisper", "Kokoro TTS", "Raspberry Pi", "JSON"],
      githubUrl: "https://github.com/Mashood-Basharat/ai-voice-assistant.git",
    },
    {
      title: "AI-Based Employee Attendance System",
      description: "A private edge-AI attendance system designed for real-time face recognition, local data storage, and offline employee monitoring on Raspberry Pi.",
      longDescription: "Built a Raspberry Pi-based attendance system using MediaPipe, OpenCV, and face recognition pipelines for automated employee identification and attendance marking. Developed a fully local boxed solution with webcam integration, real-time processing, and private on-device data storage without dependence on cloud services.",
      tech: ["Raspberry Pi", "MediaPipe", "OpenCV", "Python", "Face Recognition"],
      githubUrl: "https://github.com/Mashood-Basharat/employee-management-system.git",
    },
    {
      title: "AI-Powered Tech News Monitoring & Research Automation",
      description: "A locally deployed news aggregation and research automation system designed for private monitoring of technology trends and automated content collection using n8n workflows.",
      longDescription: "Developed an automated tech news intelligence workflow using n8n to collect and process technology news from sources such as TechCrunch and Hacker News. Configured RSS-based news ingestion pipelines to automatically gather newly published articles, metadata, publication dates, and source links from multiple technology news platforms. Designed an automated email reporting system that compiled, formatted, and delivered the latest technology news updates in a structured and professional email format.",
      tech: ["n8n", "RSS", "Automation", "Email API", "Python", "Workflows"],
    },
    {
      title: "PyVisual GUI Builder Library",
      description: "A Python-based GUI builder library with reusable OOP classes, interactive components, and custom GUI elements.",
      longDescription: "Contributed to PyVisual, a Python-based GUI builder library, by developing reusable Python classes, interactive UI components, and custom GUI elements using object-oriented programming and component-based architecture. Enabled developers to accelerate desktop app UI generation in Python.",
      tech: ["Python", "OOP", "GUI Library", "Component Architecture"],
    }
  ];

  const videoDemos: VideoDemo[] = [
    {
      id: "stable-diffusion-pi",
      title: "Stable Diffusion on Raspberry Pi",
      description: "Computer Vision Zone course on running image generation locally via Stable Diffusion API on Raspberry Pi.",
      videoUrl: "https://www.youtube.com/watch?v=H9PNhIeQdy0",
      thumbnailUrl: "https://i.ytimg.com/vi/H9PNhIeQdy0/hqdefault.jpg",
      tags: ["Raspberry Pi", "Stable Diffusion", "Course"]
    },
    {
      id: "cv-2026-course",
      title: "Learn Modern Computer Vision in 2026",
      description: "Computer Vision Zone course covering modern computer vision from basics to advanced concepts and practical applications.",
      videoUrl: "https://www.youtube.com/watch?v=E_zUoHGcxRE&start=3560",
      thumbnailUrl: "https://i.ytimg.com/vi/E_zUoHGcxRE/hqdefault.jpg",
      tags: ["Raspberry Pi", "Computer Vision", "Course"]
    },
    {
      id: "gemini-pi",
      title: "Free AI with Raspberry Pi using Gemini",
      description: "Computer Vision Zone course on integrating Gemini-powered AI capabilities on Raspberry Pi hardware.",
      videoUrl: "https://www.youtube.com/watch?v=wEg8gAOantI",
      thumbnailUrl: "https://i.ytimg.com/vi/wEg8gAOantI/hqdefault.jpg",
      tags: ["Raspberry Pi", "Gemini", "Course"]
    },
    {
      id: "openmv-course",
      title: "Learn OpenMV in 1 Hour",
      description: "Computer Vision Zone course covering OpenMV fundamentals for embedded vision workflows.",
      videoUrl: "https://www.youtube.com/watch?v=OnNxKCWjnK0",
      thumbnailUrl: "https://i.ytimg.com/vi/OnNxKCWjnK0/hqdefault.jpg",
      tags: ["OpenMV", "Computer Vision", "Course"]
    }
  ];

  const skillsData = [
    {
      category: "AI & Computer Vision",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
      skills: ["YOLO", "OpenCV", "TensorFlow", "CNNs", "MediaPipe"]
    },
    {
      category: "AI Engineering & LLM Stack",
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      skills: ["RAG", "LangChain", "LlamaIndex", "Ollama", "LLM Deployment", "Agentic Workflows"]
    },
    {
      category: "Backend Development",
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      skills: ["Python", "FastAPI", "Flask", "REST APIs", "SQLAlchemy"]
    },
    {
      category: "Databases & Vector Storage",
      icon: <Database className="w-5 h-5 text-cyan-400" />,
      skills: ["PostgreSQL", "SQLite", "SQLModel", "Vector Databases", "Supabase"]
    },
    {
      category: "Frontend Development",
      icon: <Code className="w-5 h-5 text-amber-400" />,
      skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "Bootstrap", "HTML & CSS"]
    },
    {
      category: "Embedded & Edge AI",
      icon: <Layers className="w-5 h-5 text-rose-400" />,
      skills: ["Raspberry Pi", "Arduino", "Sensor Integration", "Edge AI Applications"]
    },
    {
      category: "Deployment & Tools",
      icon: <Sliders className="w-5 h-5 text-blue-400" />,
      skills: ["Docker", "Git", "GitHub", "Linux", "n8n Workflows"]
    }
  ];

  const scrollIntoView = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 font-sans antialiased overflow-x-hidden">
      {/* Premium Background Ambient Effects */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-indigo-950/20 via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[15%] left-[-10%] w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute top-[45%] right-[-10%] w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-cyan-500/3 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
          <div className="flex-none">
            <a
              href="#contact"
              onClick={(e) => scrollIntoView(e, "contact")}
              className="hidden md:inline-flex px-4 py-2 text-xs font-semibold text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700/80 rounded-lg transition-all"
            >
              Hire Me
            </a>
          </div>

          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-zinc-400">
              <a href="#about" onClick={(e) => scrollIntoView(e, "about")} className="hover:text-white transition-colors">About</a>
              <a href="#skills" onClick={(e) => scrollIntoView(e, "skills")} className="hover:text-white transition-colors">Skills</a>
              <a href="#experience" onClick={(e) => scrollIntoView(e, "experience")} className="hover:text-white transition-colors">Experience</a>
              <a href="#projects" onClick={(e) => scrollIntoView(e, "projects")} className="hover:text-white transition-colors">Projects</a>
              <a href="#courses" onClick={(e) => scrollIntoView(e, "courses")} className="hover:text-white transition-colors">Courses</a>
              <a href="#contact" onClick={(e) => scrollIntoView(e, "contact")} className="hover:text-white transition-colors">Contact</a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-chat"));
                }}
                className="text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Ask AI
              </a>
            </nav>
          </div>

          <div className="flex-none flex items-center space-x-4">
            <a
              href="https://github.com/Mashood-Basharat"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all"
              aria-label="GitHub Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mashood-basharat-844b51243"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-zinc-800/80 bg-zinc-950/95 backdrop-blur-lg px-6 py-6 space-y-4 flex flex-col text-base font-medium">
            <a href="#about" onClick={(e) => scrollIntoView(e, "about")} className="text-zinc-400 hover:text-white py-1">About</a>
            <a href="#skills" onClick={(e) => scrollIntoView(e, "skills")} className="text-zinc-400 hover:text-white py-1">Skills</a>
            <a href="#experience" onClick={(e) => scrollIntoView(e, "experience")} className="text-zinc-400 hover:text-white py-1">Experience</a>
            <a href="#projects" onClick={(e) => scrollIntoView(e, "projects")} className="text-zinc-400 hover:text-white py-1">Projects</a>
            <a href="#courses" onClick={(e) => scrollIntoView(e, "courses")} className="text-zinc-400 hover:text-white py-1">Courses</a>
            <a href="#contact" onClick={(e) => scrollIntoView(e, "contact")} className="text-zinc-400 hover:text-white py-1">Contact</a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-chat"));
              }}
              className="text-indigo-400 hover:text-indigo-300 py-1"
            >
              Ask AI
            </a>
            <div className="h-px bg-zinc-800/60 my-4" />
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/Mashood-Basharat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mashood-basharat-844b51243"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollIntoView(e, "contact")}
                className="flex-1 text-center px-4 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-all"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <section id="hero" className="py-24 md:py-32 flex flex-col items-center justify-center text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 hover:bg-indigo-500/15 transition-all">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Open for Job Roles & Collaboration</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 max-w-4xl leading-tight">
            Hi, I am{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 drop-shadow-[0_0_15px_rgba(99,102,241,0.15)]">
              Mashood Basharat
            </span>
          </h1>

          <h2 className="text-xl md:text-3xl font-semibold text-zinc-300 mb-8 tracking-wide max-w-2xl">
            Computer Vision & AI Developer
          </h2>

          <p className="text-zinc-400 text-base md:text-lg max-w-2xl mb-12 leading-relaxed">
            I build advanced AI solutions, edge computer vision systems, and autonomous agent workflows.
            Specializing in object detection, embedded system deployments, local LLM architectures, and RAG pipelines.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
            <a
              href="#projects"
              onClick={(e) => scrollIntoView(e, "projects")}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center space-x-2"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollIntoView(e, "contact")}
              className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 hover:text-white rounded-xl transition-all"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
                About Me
              </h2>
              <h3 className="text-3xl font-bold mb-6">
                Building practical software systems powered by AI.
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-6 text-sm md:text-base">
                I'm a Software Engineering graduate focused on computer vision, embedded AI, and LLM applications.
              </p>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                At Computer Vision Zone, I developed backend classes to extend the capabilities of PyVisual, a Python-based GUI builder, alongside offline, edge-optimized AI systems including local voice agents, face recognition tools, and n8n-based research workflows.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Education Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
                <div className="p-2 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-lg w-fit mb-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-4">Education</h4>
                <div className="text-xs text-indigo-400 font-semibold mb-2">2021 - 2025</div>
                <p className="font-semibold text-zinc-200 text-sm">Virtual University of Pakistan</p>
                <p className="text-zinc-400 text-xs mt-1">Bachelor of Science in Software Engineering</p>
                <div className="border-t border-zinc-800 my-4" />
                <div className="text-xs text-indigo-400 font-semibold mb-2">2018 - 2020</div>
                <p className="font-semibold text-zinc-200 text-sm">Govt Postgraduate College Sahiwal</p>
                <p className="text-zinc-400 text-xs mt-1">FSc Pre-Medical</p>
              </div>

              {/* Core Interests Card */}
              <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-800/60 backdrop-blur-sm">
                <div className="p-2 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-lg w-fit mb-4">
                  <Cpu className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-lg mb-2">Specializations</h4>
                <ul className="space-y-2.5 text-xs text-zinc-400">
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                    <span>RAG Pipelines & Agentic Automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                    <span>Offline LLM & TTS Systems on Edge hardware</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                    <span>Real-time Object Detection (YOLO, OpenCV)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <ChevronRight className="w-3.5 h-3.5 text-purple-400" />
                    <span>Python GUI Apps (OOP / Architecture)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-zinc-900">
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
              Technical Arsenal
            </h2>
            <h3 className="text-3xl font-bold">Skills & Technologies</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-800/40 hover:border-zinc-700/60 hover:bg-zinc-900/40 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded-lg bg-zinc-800/60 border border-zinc-700/40 group-hover:scale-105 transition-transform duration-200">
                    {category.icon}
                  </div>
                  <h4 className="font-semibold text-zinc-100 text-sm md:text-base">
                    {category.category}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 text-xs bg-zinc-900 border border-zinc-800/80 rounded-md text-zinc-300 font-medium hover:border-indigo-500/40 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 border-t border-zinc-900">
          <div className="mb-16">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
              Professional Path
            </h2>
            <h3 className="text-3xl font-bold">Professional Experience</h3>
          </div>

          <div className="relative border-l border-zinc-800 pl-6 md:pl-8 ml-4 space-y-12 max-w-4xl">
            {/* Dot indicator decoration */}
            <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

            {/* Experience Item 1 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#030303] border-2 border-indigo-500 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-zinc-100">Computer Vision & AI Developer</h4>
                  <p className="text-sm text-indigo-400 font-semibold">Computer Vision Zone</p>
                </div>
                <div className="flex items-center space-x-2 text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Oct 2025 - Present</span>
                  <span className="mx-1">•</span>
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                At Computer Vision Zone, I develop full-stack educational products—designing hardware, writing production code, and delivering complete courses for Arduino computer vision and Raspberry Pi AI tracks.
              </p>

              <ul className="space-y-2 text-xs text-zinc-400 list-disc pl-4">
                <li>Arduino computer vision courses with custom builds for license plate access control, face-based door locks, weapon detection alarms, and dry/wet waste separation systems.</li>
                <li>Raspberry Pi AI courses covering locally hosted chatbot platforms and private employee management workflows—built, coded, and packaged as end-to-end learning paths.</li>
                <li>Own the full pipeline from circuit design and firmware integration to structured curriculum, demo assets, and publish-ready course delivery.</li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="relative">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#030303] border-2 border-zinc-700 flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h4 className="text-xl font-bold text-zinc-100">Python Developer</h4>
                  <p className="text-sm text-zinc-400 font-semibold">Computer Vision Zone</p>
                </div>
                <div className="flex items-center space-x-2 text-xs font-medium text-zinc-400 bg-zinc-900 border border-zinc-800 px-3 py-1 rounded-full w-fit">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  <span>April 2025 - Sept 2025</span>
                  <span className="mx-1">•</span>
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Lahore, Pakistan</span>
                </div>
              </div>

              <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                Contributed to <strong>PyVisual</strong>, a Python-based GUI builder library, accelerating the desktop UI generation process through clean Object-Oriented design.
              </p>

              <ul className="space-y-2 text-xs text-zinc-400 list-disc pl-4">
                <li>Developed reusable Python classes and interactive UI components.</li>
                <li>Engineered custom desktop GUI components utilizing object-oriented programming (OOP) and component-based architectures.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 border-t border-zinc-900">
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
              Featured Work
            </h2>
            <h3 className="text-3xl font-bold">Technical Projects</h3>
            <p className="text-zinc-400 text-sm mt-3 max-w-2xl">
              Standalone systems and libraries—focused on architecture, deployment, and production implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.longDescription || project.description}
                tech={project.tech}
                githubUrl={project.githubUrl}
              />
            ))}
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="py-20 border-t border-zinc-900">
          <div className="mb-12">
            <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
              Computer Vision Zone
            </h2>
            <h3 className="text-3xl font-bold">Courses Built & Published</h3>
            <p className="text-zinc-400 text-sm mt-3 max-w-2xl">
              As a Computer Vision & AI Developer at Computer Vision Zone, I designed, built, and delivered complete educational courses — from hardware design and firmware to production code and structured curriculum. Each course below represents a full learning path I engineered end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Primary Video Display Player */}
            <div className="lg:col-span-8">
              <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800/80 aspect-video shadow-2xl flex items-center justify-center">
                <VideoEmbed
                  url={videoDemos[activeVideoIndex].videoUrl}
                  playing={isVideoPlaying}
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                />
              </div>
              <div className="mt-4 px-2">
                <h4 className="text-lg font-bold text-zinc-100">
                  {videoDemos[activeVideoIndex].title}
                </h4>
                <p className="text-zinc-400 text-xs md:text-sm mt-1">
                  {videoDemos[activeVideoIndex].description}
                </p>
              </div>
            </div>

            {/* Course Playlist Selector */}
            <div className="lg:col-span-4 flex flex-col space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-1 pl-1">
                Select Course:
              </h4>

              {videoDemos.map((demo, idx) => {
                const isActive = idx === activeVideoIndex;
                return (
                  <button
                    key={demo.id}
                    onClick={() => {
                      setActiveVideoIndex(idx);
                      setIsVideoPlaying(true);
                    }}
                    className={`flex items-start text-left p-3.5 rounded-xl border transition-all duration-200 ${
                      isActive
                        ? "bg-zinc-900 border-indigo-500/60 shadow-lg shadow-indigo-500/5"
                        : "bg-zinc-900/30 border-zinc-800/80 hover:bg-zinc-900/50 hover:border-zinc-700/60"
                    }`}
                  >
                    <div className="relative w-20 aspect-video rounded-md overflow-hidden bg-zinc-800 mr-3.5 flex-shrink-0 flex items-center justify-center">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={demo.thumbnailUrl}
                        alt={demo.title}
                        className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Play className={`w-5 h-5 ${isActive ? "text-indigo-400" : "text-zinc-200"}`} />
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-xs md:text-sm text-zinc-100 truncate">
                        {demo.title}
                      </div>
                      <p className="text-[10px] text-zinc-400 mt-1 line-clamp-2 leading-relaxed">
                        {demo.description}
                      </p>
                      <div className="flex gap-1.5 mt-2">
                        {demo.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="px-1.5 py-0.5 rounded text-[8px] bg-zinc-800 text-zinc-300 font-semibold border border-zinc-700/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 border-t border-zinc-900">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
                Connection
              </h2>
              <h3 className="text-3xl font-bold mb-6">Let&apos;s build together</h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-8">
                I am interested in AI developer opportunities, machine learning integrations, and embedded systems consulting roles. Feel free to reach out to discuss collaboration or custom solutions!
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/Mashood-Basharat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                  aria-label="GitHub"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/mashood-basharat-844b51243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80 backdrop-blur-sm space-y-6">
                <h4 className="text-lg font-bold text-zinc-100">Contact Information</h4>

                <div className="space-y-4">
                  {/* Email */}
                  <a
                    href="mailto:mashoodbasharat7890@gmail.com"
                    className="flex items-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-indigo-500/40 hover:bg-zinc-900 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mr-4 group-hover:scale-105 transition-transform">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Email Address</div>
                      <div className="text-zinc-200 font-semibold text-sm mt-0.5">mashoodbasharat7890@gmail.com</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Phone */}
                  <a
                    href="tel:+923117358388"
                    className="flex items-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/60 hover:border-purple-500/40 hover:bg-zinc-900 transition-all group"
                  >
                    <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 mr-4 group-hover:scale-105 transition-transform">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Phone Number</div>
                      <div className="text-zinc-200 font-semibold text-sm mt-0.5">+92-3117358388</div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-zinc-500 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>

                  {/* Location Info */}
                  <div className="flex items-center p-4 rounded-xl bg-zinc-900/50 border border-zinc-850">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mr-4">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-zinc-500 text-xs font-medium uppercase tracking-wider">Location</div>
                      <div className="text-zinc-200 font-semibold text-sm mt-0.5">Lahore, Pakistan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 py-10 mt-16 text-center text-zinc-500 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mashood Basharat. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#about" onClick={(e) => scrollIntoView(e, "about")} className="hover:text-zinc-300">About</a>
            <a href="#skills" onClick={(e) => scrollIntoView(e, "skills")} className="hover:text-zinc-300">Skills</a>
            <a href="#projects" onClick={(e) => scrollIntoView(e, "projects")} className="hover:text-zinc-300">Projects</a>
            <a href="#courses" onClick={(e) => scrollIntoView(e, "courses")} className="hover:text-zinc-300">Courses</a>
            <a href="#contact" onClick={(e) => scrollIntoView(e, "contact")} className="hover:text-zinc-300">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
