import { motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import classes from "./layout.module.scss";

interface Props {
  children?: ReactNode;
}

export function LeftContent(props: Props) {
  return <div {...props} className={classes.Left} />;
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
          duration: 1,
        },
        opacity: {
          delay: 1,
        },
      },
    },
    exit: {
      width: 0,
      opacity: 0,
      transition: {
        width: {
          type: "linear",
          delay: 1,
        },
        opacity: {
          duration: 1,
        },
      },
    },
  };
};

export function RightContent(props: Props) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);
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
