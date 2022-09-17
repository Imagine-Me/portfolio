import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import classes from "./list.module.scss";

interface Props {
  children?: ReactNode;
  color?: "normal" | "front-end" | "back-end" | "others";
  size?: "small" | "medium";
}

const animation = {
  initial: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  onHover: {
    width: "100%",
  },

  onHoverLeft: {
    width: 0,
  },
};

export default function List({
  children,
  color = "normal",
  size = "medium",
}: Props) {
  const [hover, setHover] = useState(false);
  const containerClass = [classes.Container, classes[size], classes[color]];
  return (
    <motion.div
      initial="initial"
      variants={animation}
      animate="visible"
      className={containerClass.join(" ")}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        animate={hover ? "onHover" : "onHoverLeft"}
        variants={animation}
        className={classes.Hover}
      ></motion.div>
      <div className={classes.Content}>{children}</div>
    </motion.div>
  );
}
