import Logo from "../logo/logo";
import classes from "./layout.module.scss";

export default function Layout() {
  return (
    <div className={classes.container}>
      <Logo />
    </div>
  );
}
