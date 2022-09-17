import { ReactNode } from "react";
import classes from "./link-button.module.scss";
import { GithubIcon, LinkIcon } from "../icons/icon";

interface Props {
  children?: ReactNode;
  type: "link" | "github";
  link: string;
}

export default function LinkButton({ children, type, link }: Props) {
  const className = [
    classes.LinkButton,
    type == "link" ? classes.Link : classes.Github,
  ];
  return (
    <a className={className.join(" ")} rel="noreferrer" href={link} target="_blank">
      {type == "link" ? <LinkIcon /> : <GithubIcon />}
      {children}
    </a>
  );
}
