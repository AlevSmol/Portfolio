import { motion } from 'framer-motion';
interface Props {
    name: string;
    image: string;
    description: string;
}
export default function TecnologyCardBack({ name, image, description }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-4 p-4 rounded-xl bg-white shadow-xl backdrop-blur-sm h-[350px]"
    >
      <div className="relative">
      <div className="absolute inset-4 overflow-hidden top-8 left-6 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12">
          <motion.img
            transition={{ duration: 0.2 }}
            src={image}
            alt={`${name}`}
            className="w-full h-full object-contain"
          />
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold text-violett mt-4">{name}</h3>
        <p className="text-slate-800 mt-16 font-medium">{description}</p>
      </div>
      </div>

    </motion.article>
  );
}
