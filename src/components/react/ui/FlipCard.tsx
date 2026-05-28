import { useEffect, useState } from 'react';
import TechCard from '../TecnologyCard';

interface FlipCardProps {
  name: string;
  image: string;
  proficiency: number;
  description: string;
  index?: number;
}

export default function FlipCard({ name, image, proficiency, index }: FlipCardProps) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const tag = (e as CustomEvent).detail?.tag ?? null;
      setIsActive(tag === name);
    };
    window.addEventListener('tech-filter', handler);
    return () => window.removeEventListener('tech-filter', handler);
  }, [name]);

  const handleClick = () => {
    const newActive = !isActive;

    window.dispatchEvent(
      new CustomEvent('tech-filter', { detail: { tag: newActive ? name : null } })
    );

    if (newActive) {
      const roadmap = document.getElementById('projects');
      if (roadmap) {
        roadmap.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      <TechCard name={name} image={image} proficiency={proficiency} isActive={isActive} index={index} />
    </div>
  );
}
