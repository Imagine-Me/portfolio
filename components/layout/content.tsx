import { motion } from "framer-motion";
import { ReactNode } from "react";
import classes from "./layout.module.scss";

interface Props {
  children?: ReactNode;
  width?: number;
}

const animate = (windowWidth: number) => {
  let width = "100%";
  if (windowWidth >= 720 && windowWidth < 1220) {
    width = "calc(45% - 15px)";
  } else if (windowWidth > 1220) {
    width = "calc(55% - 105px)";
  }
  return {
    initial: {
      width: 0,
      opacity: 0,
    },
    animate: {
      width,
      opacity: 1,
      transition: {
        width: {
          type: "linear",
          duration: windowWidth < 720 ? 0 : 1,
        },
        opacity: {
          delay: windowWidth < 720 ? 0 : 1,
        },
      },
    },
    exit: {
      width: 0,
      opacity: 0,
      transition: {
        width: {
          type: "linear",
          delay: windowWidth < 720 ? 0 : 1,
          duration: windowWidth < 720 ? 0 : 1,
        },
        opacity: {
          duration: windowWidth < 720 ? 0 : 1,
        },
      },
    },
  };
};


export function LeftContent(props: Props) {
  return (
    <motion.div
      {...props}
      className={classes.Left}
    />
  );
}

export function RightContent({ width = 0, ...props }: Props) {
  return (
    <motion.div
      {...props}
      className={classes.Right}
      variants={animate(width)}
      initial="initial"
      animate="animate"
      exit="exit"
    />
  );
}
