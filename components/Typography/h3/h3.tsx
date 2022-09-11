import { ReactNode } from "react";
import classes from "./h3.module.scss";

interface Props {
  children?: ReactNode;
}

export default function H3({ children }: Props) {
  return <h3 className={classes.H3}>{children}</h3>;
}
