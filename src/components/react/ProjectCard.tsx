import { motion } from 'framer-motion';

interface Props {
  title: string;
  resume: string;
  image: string;
  tags: string[];
  year: number;
  link: string;
}

export default function ProjectCard({ title, resume, image, tags, year, link}: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col gap-4"
    >
      <span className="text-light/70">{year}</span>
      <a 
        href={`/project/${link}`}
        className="relative rounded-xl overflow-hidden"
        title={`${title}`}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          src={image}
          alt={`Proyecto ${title}`}
          className="w-full h-48 object-cover"
        />
      </a>
      
      <h3 className="text-2xl font-semibold text-light">{title}</h3>
      <p className="text-light/70">{resume}</p>
      
      <ul className="flex gap-2 flex-wrap">
        {tags.map((tag) => (
          <li key={tag}>
            <span className="bg-dark/50 text-violett text-sm rounded-full px-3 py-1">
              {tag}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}