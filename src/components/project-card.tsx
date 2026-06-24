import { ArrowRight } from "lucide-react";

export interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800/60 hover:border-zinc-700/60 hover:bg-zinc-900/40 transition-all duration-300 group shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h4 className="text-xl font-bold text-zinc-100 group-hover:text-indigo-400 transition-colors duration-200">
          {title}
        </h4>
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-850 rounded-lg transition-colors"
            title="View Source on GitHub"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>
        )}
      </div>

      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5 border-t border-zinc-900 pt-4">
        {tech.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-[10px] md:text-xs bg-indigo-950/30 border border-indigo-900/40 rounded-full text-indigo-300 font-medium"
          >
            {tag}
          </span>
        ))}
      </div>

      {githubUrl && (
        <div className="flex items-center justify-between mt-auto">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
          >
            <span>View Repository</span>
            <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
          </a>
        </div>
      )}
    </div>
  );
}
