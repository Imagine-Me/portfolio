import useWindow from "../../hooks/useWindow";
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
  const bounds = useWindow();
  return (
    <div className={classes.Container}>
      <Logo />
      <Menu />
      <div className={classes.Content}>
        {children}
        <div className={classes.RightDesign}>
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
