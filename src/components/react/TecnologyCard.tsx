import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProgressBar from './ui/ProgressBar';

interface Props {
  name: string;
  image: string;
  proficiency: number;
  isActive?: boolean;
}

const getProficiencyLevel = (proficiency: number) => {
  if (proficiency < 35) return 'Principiante';
  if (proficiency < 71) return 'Intermedio';
  return 'Avanzado';
};

export default function TechCard({ name, image, proficiency, isActive }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(proficiency);
    }, 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className={`flex items-center justify-center p-2 rounded-xl bg-white shadow-md transition-all
        ${isActive ? 'ring-2 ring-violett shadow-lg shadow-purple-500/20 scale-[1.03]' : 'hover:shadow-lg'}`}
    >
      <div className="relative inline-flex">
        <ProgressBar
          radius={65}
          progress={progress}
          strokeWidth={5}
          cut={120}
          rotate={-210}
          strokeColor="#933DC9"
          strokeLinecap="butt"
          trackStrokeWidth={5}
          trackStrokeColor="rgba(147, 61, 201, 0.2)"
          transition="1.5s ease"
        />

        {/* Content stacked vertically inside the arc */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none">
          <img
            src={image}
            alt={name}
            className="w-15 h-15 object-contain"
          />
          <div className="text-center leading-tight px-1">
            <h3 className="text-[15px] font-semibold text-dark leading-tight">{name}</h3>
            <p className="text-violett text-[10px] font-medium leading-tight">
              {getProficiencyLevel(proficiency)}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
