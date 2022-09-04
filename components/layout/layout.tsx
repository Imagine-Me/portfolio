import BackgroundDesign from "../background-design/background-design";
import Logo from "../logo/logo";
import classes from "./layout.module.scss";

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={classes.Container}>
      <Logo />
      <div className={classes.Content}>
        <div className={classes.Left}>{children}</div>
        <div className={classes.Right}>
          <BackgroundDesign />
        </div>
      </div>
    </div>
  );
}
