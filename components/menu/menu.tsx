import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import BlogsIcon from "./icons/blogs";
import HomeIcon from "./icons/home";
import ContactIcon from "./icons/menu";
import ProjectIcon from "./icons/project";
import UserIcon from "./icons/user";
import classes from "./menu.module.scss";

const svgs = [
  {
    path: "/",
    icon: HomeIcon,
  },
  {
    path: "/about",
    icon: UserIcon,
  },
  {
    path: "/project",
    icon: ProjectIcon,
  },
  {
    path: "/blogs",
    icon: BlogsIcon,
  },
  {
    path: "/contact",
    icon: ContactIcon,
  },
];

const menuDraw = {
  hidden: { opacity: 0, width: 0, height: 0 },
  visible: (time: number) => {
    const delay = time;
    return {
      opacity: 1,
      width: 45,
      height: 45,
      transition: {
        opacity: { delay, duration: 0.5, bounce: 1 },
        width: { delay, duration: 0.5, bounce: 1 },
        height: { delay, duration: 0.5, bounce: 1 },
      },
    };
  },
};
const drawLine = {
  hidden: { height: 0 },
  visible: (time: number) => {
    const delay = time + 0.5;
    return {
      height: 50,
      transition: {
        height: { delay, duration: 0.5, type: "spring", bounce: 0 },
      },
    };
  },
};

const hoverDraw = {
  show: {
    opacity: 1,
    width: 45,
    height: 45,
  },
  hide: {
    opacity: 0,
    width: 0,
    height: 0,
  },
};

export default function Menu() {
  const [hoverState, setHoverState] = useState<boolean[]>(
    svgs.map((_) => false)
  );
  const router = useRouter();
  return (
    <div className={classes.Container}>
      {svgs.map((svg, index) => {
        const isCurrentPath = router.pathname == svg.path;
        return (
          <Fragment key={`menu_item_${index}`}>
            <Link href={svg.path}>
              <motion.div
                className={[
                  classes.Menu,
                  isCurrentPath ? "" : classes.Active,
                ].join(" ")}
                initial="hidden"
                animate="visible"
                variants={menuDraw}
                custom={index}
                onMouseEnter={() =>
                  setHoverState(hoverState.map((_, i) => i == index))
                }
                onMouseLeave={() => setHoverState(hoverState.map(() => false))}
              >
                <motion.div
                  animate={isCurrentPath || hoverState[index] ? "show" : "hide"}
                  variants={hoverDraw}
                  className={classes.Hover}
                ></motion.div>
                <svg.icon selected={isCurrentPath || hoverState[index]} />
              </motion.div>
            </Link>
            {svgs.length - 1 !== index && (
              <motion.div
                className={classes.Line}
                variants={drawLine}
                initial="hidden"
                animate="visible"
                custom={index}
              ></motion.div>
            )}
          </Fragment>
        );
      })}
    </div>
  );
}
