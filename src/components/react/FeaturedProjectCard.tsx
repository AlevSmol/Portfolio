import { motion } from 'framer-motion';

interface Props {
  title: string;
  resume: string;
  image: string;
  tags: string[];
  link: string;
  status: string;
  index: number;
  baseUrl: string;
}

export default function FeaturedProjectCard({ title, resume, image, tags, link, status, index, baseUrl }: Props) {
  const isInProgress = status === 'in-progress';

  return (
    <motion.a
      href={`${baseUrl}/project/${link}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md
                 hover:bg-white/10 hover:border-purple-500/30 transition-all group"
    >
      <div className="relative w-24 h-20 rounded-lg overflow-hidden shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {isInProgress && (
          <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-amber-400 rounded-full animate-pulse" />
        )}
      </div>

      <div className="flex flex-col justify-center gap-1.5 min-w-0">
        <h3 className="text-sm font-bold text-white truncate group-hover:text-purple-300 transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-400 line-clamp-2">{resume}</p>
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] bg-purple-500/20 text-purple-300 rounded-full px-2 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
