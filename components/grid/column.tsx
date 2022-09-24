import React, { ReactNode } from "react";
import classes from "./grid.module.scss";

type ColType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Margin = 0 | 1 | 2 | 3 | 4;

interface ColumnProps {
  children?: ReactNode;
  col?: ColType;
  sm?: ColType;
  md?: ColType;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
}

export default function Column({
  children,
  sm,
  md,
  col = 12,
  m = 0,
  mx = 0,
  my = 0,
  mt = 0,
  mb = 0,
}: ColumnProps) {
  const className = [classes[`Col${col}`]];
  if (sm) {
    className.push(classes[`Colsm${sm}`]);
  }
  if (md) {
    className.push(classes[`Colmd${md}`]);
  }
  className.push(classes[`MarginM${m}`]);
  className.push(classes[`MarginMx${mx}`]);
  className.push(classes[`MarginMy${my}`]);
  className.push(classes[`MarginMt${mt}`]);
  className.push(classes[`MarginMb${mb}`]);
  return <div className={className.join(" ")}>{children}</div>;
}
