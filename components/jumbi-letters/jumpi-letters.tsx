import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import classes from "./jumpi-letter.module.scss";

interface Props {
  text: string;
}

const jumpAnim = (time = 0, delay = 0) => {
  return {
    marginTop: [0, -14, 7, -2, 0],
    transition: {
      marginTop: {
        times: [0, 0.4, 0.7, 0.9, 1],
        duration: 0.8,
        type: "spring",
        bounce: 1,
        delay: time * delay,
      },
    },
  };
};

export default function JumpiLetters({ text }: Props) {
  const letters = text.split("");
  const [delay, setDelay] = useState(0.3);
  useEffect(() => {
    setDelay(0);
  }, []);
  return (
    <div className={classes.Container}>
      {letters.map((letter, index) => {
        return (
          <div
            key={`jumpi_${text}_${letter}`}
            className={classes.LetterContainer}
          >
            <motion.div
              className={classes.Letter}
              animate={jumpAnim(index, delay)}
              whileHover={jumpAnim()}
              whileTap={jumpAnim()}
            >
              {letter}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
