import { motion } from 'framer-motion';

interface Props {
  title: string;
  year: number;
  tags: string[];
  image: string;
  status: string;
  link: string;
  index: number;
  baseUrl: string;
}

export default function TimelineNode({ title, year, tags, image, status, link, index, baseUrl }: Props) {
  const isLeft = index % 2 === 0;
  const isInProgress = status === 'in-progress';

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative flex items-center gap-4 snap-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
    >
      {/* Timeline dot — offset to the card's side, edge touching the central line */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 z-10 hidden md:block w-3.5 h-3.5 ${
          isLeft ? 'right-1/2 mr-1' : 'left-1/2 ml-1'
        }`}
      >
        <div className={`relative w-3.5 h-3.5 rounded-full border-[3px] border-white shadow-md shadow-purple-900/50 ${isInProgress ? 'bg-amber-400' : 'bg-violett'}`}>
          {isInProgress && (
            <span className="absolute inset-0 rounded-full bg-amber-400 animate-ping opacity-50" />
          )}
        </div>
      </div>

      {/* Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0' : 'md:pl-0'}`}>
        <motion.a
          href={`${baseUrl}/project/${link}`}
          whileHover={{ scale: 1.02, y: -2 }}
          transition={{ duration: 0.2 }}
          className="relative block h-[240px] rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-purple-900/30 transition-all group bg-slate-100"
        >
          {/* Full-bleed background image */}
          <img
            src={image}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-500"
          />

          {/* Subtle top dark gradient for badge contrast */}
          <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/25 via-black/5 to-transparent pointer-events-none" />

          {/* Main fade gradient — image to white at the bottom */}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_38%,rgba(255,255,255,0.55)_58%,rgba(255,255,255,0.95)_78%,rgb(255,255,255)_100%)] pointer-events-none" />

          {/* Status badge */}
          {isInProgress && (
            <span className="absolute top-3 right-3 flex items-center gap-1.5 bg-amber-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-md z-10">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
              En desarrollo
            </span>
          )}

          {/* Text content pinned to bottom — absolute positioning is more robust than flex justify-end */}
          <div className="absolute inset-x-0 bottom-0 p-4 z-[1]">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-violett transition-colors">
                {title}
              </h3>
              <span className="text-sm text-slate-600">{year}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/80 backdrop-blur-sm border border-purple-200 text-purple-800 rounded-full px-2 py-0.5 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.a>
      </div>
    </motion.div>
  );
}
