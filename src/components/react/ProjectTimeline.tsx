import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TimelineNode from './TimelineNode';

interface Project {
  id: string;
  title: string;
  year: number;
  tags: string[];
  image: string;
  status: string;
}

interface Props {
  projects: Project[];
  baseUrl: string;
}

export default function ProjectTimeline({ projects, baseUrl }: Props) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const tag = (e as CustomEvent).detail?.tag ?? null;
      setActiveFilter(tag);
    };
    window.addEventListener('tech-filter', handler);
    return () => window.removeEventListener('tech-filter', handler);
  }, []);

  const filtered = activeFilter
    ? projects.filter(p => p.tags.some(t => t.toLowerCase() === activeFilter.toLowerCase()))
    : projects;

  return (
    <div className="relative">
      {/* Active filter indicator */}
      <AnimatePresence>
        {activeFilter && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <span className="text-sm text-light/70">Filtrando por:</span>
            <span className="bg-white/10 text-purple-200 font-semibold text-sm px-3 py-1 rounded-full border border-purple-400/30">
              {activeFilter}
            </span>
            <button
              onClick={() => {
                setActiveFilter(null);
                window.dispatchEvent(new CustomEvent('tech-filter', { detail: { tag: null } }));
              }}
              className="text-light/50 hover:text-light ml-1 transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Wrapper for scroll container + dynamic fade overlays */}
      <div className="relative">
        {/* Scrollable container — overflow-x-hidden prevents the brief horizontal scrollbar flash during reload */}
        <div className="max-h-[680px] overflow-y-auto overflow-x-hidden px-4 timeline-scroll md:snap-y md:snap-proximity">
          {/* Inner content — line lives here, so it spans the FULL scroll height */}
          <div className="relative flex flex-col gap-8 md:gap-10 py-4">
            {/* Central line — inside content, same coord space as dots */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-purple-300/60 hidden md:block">
              <div className="absolute inset-0 w-px bg-white/30 blur-[1px]"></div>
            </div>

            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <TimelineNode
                  key={project.id}
                  title={project.title}
                  year={project.year}
                  tags={project.tags}
                  image={project.image}
                  status={project.status}
                  link={project.id}
                  index={i}
                  baseUrl={baseUrl}
                />
              ))}
            </AnimatePresence>

            {filtered.length === 0 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-light/50 py-12"
              >
                No hay proyectos con esta tecnología aún.
              </motion.p>
            )}
          </div>
        </div>

        {/* Dynamic fade overlays — pinned at top/bottom of visible scroll area */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-24 bg-gradient-to-b from-purplet via-purplet/90 to-transparent pointer-events-none z-20 hidden md:block" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-24 bg-gradient-to-t from-purplet via-purplet/90 to-transparent pointer-events-none z-20 hidden md:block" />
      </div>
    </div>
  );
}
