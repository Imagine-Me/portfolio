import { ReactNode } from "react";
import classes from './grid.module.scss'

interface RowProps {
  children?: ReactNode;
}
export default function Row({ children }: RowProps) {
  return <div className={classes.Row}>{children}</div>;
}
