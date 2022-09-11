import { motion } from "framer-motion";
import { createRef, useEffect, useMemo, useState } from "react";
import Parallax from "../parallax/parallax";
import classes from "./background-design.module.scss";
import {
  Shape1,
  Shape2,
  Shape3,
  Shape4,
  Shape5,
  Shape6,
} from "./shapes/shapes";

export default function BackgroundDesign() {
  const sectionRefs = useMemo(() => {
    const classList = [
      classes.First,
      classes.Second,
      classes.Third,
      classes.Fourth,
    ];
    return Array(4)
      .fill(1)
      .map((_, i) => ({
        className: classList[i],
        ref: createRef<HTMLDivElement>(),
      }));
  }, []);

  useEffect(() => {
    sectionRefs.forEach((section, index) => {
      if (section.ref.current) {
        const height = section.ref.current.clientHeight;
        const width = height * 2.1;
        section.ref.current.style.width = `${width}px`;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Parallax className={classes.Container}>
      {sectionRefs.map((ref, i) => (
        <div
          key={`background_design_${i}`}
          ref={ref.ref}
          className={ref.className}
        ></div>
      ))}
    </Parallax>
  );
}

var randomNumber = (maximum: number, minimum = 0) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const animate = (innerWidth: number, innerHeight: number) => {
  return {
    top: Array(4)
      .fill(1)
      .map(() =>
        randomNumber(innerHeight + innerHeight / 4, -(innerHeight / 4))
      ),
    left: Array(4)
      .fill(1)
      .map(() => randomNumber(innerWidth + innerWidth / 4, -(innerWidth / 4))),
    rotate: [0, 90, 180, 270, 360],
    transition: {
      top: {
        times: [0, Math.random(), Math.random(), 1].sort((a, b) => b - a),
        repeat: Infinity,
        repeatType: "mirror",
        duration: randomNumber(35, 25),
        type: "linear",
      },
      left: {
        times: [0, Math.random(), Math.random(), 1].sort((a, b) => b - a),
        repeat: Infinity,
        repeatType: "mirror",
        duration: randomNumber(35, 25),
        type: "linear",
      },
      rotate: {
        times: [0, 0.25, 0.5, 0.75, 1],
        repeat: Infinity,
        repeatType: "loop",
        duration: randomNumber(15, 5),
        type: "linear",
        ease: "linear",
      },
    },
  };
};

interface BackgroundMobileProps {
  width: number;
  height: number;
}

export const BackgroundMobile = ({ width, height }: BackgroundMobileProps) => {
  const shapes = [Shape1, Shape2, Shape3, Shape4, Shape5, Shape6];
  return (
    <div className={classes.MobileContainer}>
      {Array(24)
        .fill(1)
        .map((_, i) => {
          const Shape = shapes[i % shapes.length];
          return (
            <motion.div
              className={classes.Shape}
              animate={animate(width, height)}
              key={`shapes+${i}`}
            >
              <Shape />
            </motion.div>
          );
        })}
    </div>
  );
};
