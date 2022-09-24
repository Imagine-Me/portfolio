import { motion } from "framer-motion";
import React, { DetailedHTMLProps, InputHTMLAttributes } from "react";
import classes from "./input.module.scss";

const animate = {
  scale: [0.98, 1.02, 1],
  transition: {
    scale: {
      times: [0, 0.66, 1],
      duration: 1,
      type: "spring",
      bounce: 1,
    },
  },
};

export default function InputComponent(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const { className, ...inputProps } = props;
  return (
    <motion.div animate={animate}>
      <input {...inputProps} className={`${className} ${classes.Input}`} />
    </motion.div>
  );
}

export function TextAreaComponent(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > & {
    rows: number
  }
) {
  const { className, ...inputProps } = props;
  return (
    <motion.div animate={animate}>
      <textarea {...inputProps} className={`${className} ${classes.Input}`} />
    </motion.div>
  );
}
