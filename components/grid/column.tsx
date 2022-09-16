import React, { ReactNode } from "react";
import classes from "./grid.module.scss";

type ColType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColumnProps {
  children?: ReactNode;
  col?: ColType;
  sm?: ColType;
  md?: ColType;
}

export default function Column({ children, sm, md, col = 12 }: ColumnProps) {
  const className = [classes[`Col${col}`]];
  if (sm) {
    className.push(classes[`Colsm${sm}`]);
  }
  if (md) {
    className.push(classes[`Colmd${md}`]);
  }
  return <div className={className.join(" ")}>{children}</div>;
}
