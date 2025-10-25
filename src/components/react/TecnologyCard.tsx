import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import ProgressBar from './ui/ProgressBar';

interface Props {
    name: string;
    image: string;
    proficiency: number;
}

const getProficiencyLevel = (proficiency: number) => {
  if (proficiency < 50) return 'Nivel Principiante';
  if (proficiency < 80) return 'Nivel Intermedio';
  return 'Nivel Avanzado';
};

export default function TechCard({ name, image, proficiency }: Props) {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(proficiency);
    }, 100);
    return () => clearTimeout(timer);
  }, [proficiency]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white shadow-xl backdrop-blur-sm"
    >
      <div className="relative justifie-center ">
        <div className="relative">
          <ProgressBar
            radius={100}
            progress={progress}
            strokeWidth={6}
            cut={120}
            rotate={-210}
            strokeColor="#933DC9"
            strokeLinecap="butt"
            trackStrokeWidth={6}
            trackStrokeColor="rgba(147, 61, 201, 0.2)"
            transition="1.5s ease"
          />
          
          
          {/* Imagen centrada */}
          <div className="absolute inset-4  overflow-hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%]">
            <motion.img
              whileHover={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              src={image}
              alt={`${name}`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-dark mb-2">{name}</h3>
        <p className="text-violett font-medium">{getProficiencyLevel(proficiency)}</p>
      </div>

    </motion.article>
  );
}
