import { HTMLAttributes } from "react";
import classes from "./h1.module.scss";

export default function H1(props: HTMLAttributes<HTMLHeadingElement>) {
  let { className } = props;
  className = className ? `${classes.h1} ${className}` : classes.h1;
  return <h1 {...props} className={className} />;
}
