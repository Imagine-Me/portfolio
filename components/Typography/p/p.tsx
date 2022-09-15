import { ReactNode } from "react";
import classes from "./p.module.scss";

interface Props {
  children?: ReactNode;
}

export default function P({ children }: Props) {
  return <p className={classes.P}>{children}</p>;
}
