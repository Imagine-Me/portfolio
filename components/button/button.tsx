import { motion } from "framer-motion";
import { FC, forwardRef, ReactNode, Ref, useState } from "react";
import { IconProps } from "../icons/icon";
import classes from "./button.module.scss";

interface Props {
  children?: ReactNode;
  Icon?: FC<IconProps>;
  selected?: boolean;
  href?: string;
  onClick?: () => void;
  fullWidth?: boolean;
  size?: "md" | "lg";
}

const animation = {
  onHover: {
    width: "calc(100% + 1px)",
  },
  onHoverLeft: {
    width: 0,
  },
  selectedColor: {
    color: "#2d2f30",
  },
  unSelectedColor: {
    color: "white",
  },
};

export default forwardRef(function Button(props: Props, ref1) {
  const {
    children,
    Icon,
    selected = false,
    onClick = () => {},
    fullWidth = false,
    size = "md",
  } = props;
  const [hover, setHover] = useState(false);
  return (
    <motion.button
      className={[
        classes.Button,
        fullWidth ? classes.FullWidth : "",
        size == "md" ? classes.Md : classes.Lg,
      ].join(" ")}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      ref={ref1 as Ref<HTMLButtonElement>}
      onClick={onClick}
    >
      <motion.div
        className={classes.Hover}
        variants={animation}
        animate={selected || hover ? "onHover" : "onHoverLeft"}
      />
      <motion.div
        variants={animation}
        animate={selected || hover ? "selectedColor" : "unSelectedColor"}
        className={classes.Content}
      >
        {children}
      </motion.div>
      {Icon && <Icon color={selected || hover ? "#2d2f30" : "white"} />}
    </motion.button>
  );
});
