import { classNames } from "7shared/lib/classNames/classNames";
import { AppNavLink } from "7shared/ui/AppNavLink/AppNavLink";
import { memo } from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  className?: string;
}
import s from "./Navbar.module.scss";

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(s.navbar, {}, [className])}>
      <div className={s.links}>
        <AppNavLink to={"/"} className={s.main}>
          Main
        </AppNavLink>
        <AppNavLink to={"/about"}>About</AppNavLink>
      </div>
    </div>
  );
});
