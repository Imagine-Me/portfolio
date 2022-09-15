import { ReactNode } from "react";
import classes from "./h5.module.scss";

interface Props {
  children?: ReactNode;
  className?: string;
}

export default function H5({ children, className }: Props) {
  return <h5 className={[classes.H5, className].join(" ")}>{children}</h5>;
}
