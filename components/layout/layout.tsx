import { useEffect, useState } from "react";
import BackgroundDesign, {
  BackgroundMobile,
} from "../background-design/background-design";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import classes from "./layout.module.scss";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [bounds, setBounds] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setBounds({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  return (
    <div className={classes.Container}>
      <Logo />
      <Menu />
      <div className={classes.Content}>
        <div className={classes.Left}>{children}</div>
        <div className={classes.Right}>
          {bounds.width < 1220 ? (
            <BackgroundMobile {...bounds} />
          ) : (
            <BackgroundDesign />
          )}
        </div>
      </div>
    </div>
  );
}
