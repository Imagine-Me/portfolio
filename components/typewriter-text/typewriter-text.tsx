import { motion } from "framer-motion";

interface Props {
  text: string;
}

const animate = {
  initial: {
    opacity: 0,
  },
  visible: (time: number) => {
    const delay = time * 0.05;
    return {
      opacity: 1,
      transition: {
        delay,
        duration: .5,
      },
    };
  },
};

export default function TypewriterText({ text }: Props) {
  return (
    <>
      {text.split("").map((letter, index) => (
        <motion.span
          initial="initial"
          animate="visible"
          custom={index}
          variants={animate}
          key={`typewriter_${letter}_${index}`}
        >
          {letter}
        </motion.span>
      ))}
    </>
  );
}
