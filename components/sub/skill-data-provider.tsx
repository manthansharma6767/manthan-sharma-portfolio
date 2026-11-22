import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

import { IconType } from "react-icons";

type SkillDataProviderProps = {
  src?: string;
  Icon?: IconType;
  name: string;
  width?: number;
  height?: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  Icon,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.1;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <div className="flex flex-col items-center justify-start w-[100px] h-[110px] gap-3 group">
        <div className="h-[60px] w-[60px] flex items-center justify-center">
          {src && (
            <Image
              src={`/skills/${src}`}
              width={width || 60}
              height={height || 60}
              alt={name}
              className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
              style={{ width: "auto", height: "auto" }}
            />
          )}
        </div>
        <span className="text-gray-400 text-sm font-medium tracking-wide group-hover:text-white transition-colors text-center leading-tight">
          {name}
        </span>
      </div>
    </motion.div>
  );
};
