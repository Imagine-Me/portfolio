import { motion } from "framer-motion";

interface Props {
  text: string;
  duration?: number;
  delay?: number;
}

interface CustomProps {
  time: number;
  delay: number;
  duration: number;
}

const animate = {
  initial: {
    opacity: 0,
  },
  visible: ({ time, delay, duration }: CustomProps) => {
    const delayTemp = delay + time * duration;
    return {
      opacity: 1,
      transition: {
        delay: delayTemp,
        duration: 0.5,
      },
    };
  },
};

export default function TypewriterText({
  text,
  delay = 0,
  duration = 0.05,
}: Props) {
  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span
          initial="initial"
          animate="visible"
          custom={{ time: index, delay, duration } as CustomProps}
          variants={animate}
          key={`typewriter_${letter}_${index}`}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}
