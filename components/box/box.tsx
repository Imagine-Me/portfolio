import { ReactNode } from "react";
import classes from "./box.module.scss";

interface Props {
  children?: ReactNode;
  justify?: "center" | "start" | "end";
  align?: "middle" | "start" | "end";
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: "wrap" | "no-wrap";
}
export default function Box({
  children,
  justify = "start",
  align = "start",
  direction = "row",
  wrap = "wrap",
}: Props) {
  const classNames = [
    classes.Box,
    classes[`justify-${justify}`],
    classes[`align-${align}`],
    classes[`direction-${direction}`],
    classes[`wrap-${wrap}`],
  ];
  return <div className={classNames.join(" ")}>{children}</div>;
}
