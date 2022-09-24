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
  > & {
    error?: string;
  }
) {
  const { className, error = "", ...inputProps } = props;
  return (
    <motion.div animate={animate}>
      <input {...inputProps} className={`${className} ${classes.Input}`} />
      {error && <div className={classes.Error}>{error}</div>}
    </motion.div>
  );
}

export function TextAreaComponent(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > & {
    rows: number;
    error?: string;
  }
) {
  const { className, error = "", ...inputProps } = props;
  return (
    <motion.div animate={animate}>
      <textarea {...inputProps} className={`${className} ${classes.Input}`} />
      {error && <div className={classes.Error}>{error}</div>}
    </motion.div>
  );
}
