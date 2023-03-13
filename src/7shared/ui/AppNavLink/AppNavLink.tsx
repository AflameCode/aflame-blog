import { classNames } from "7shared/lib/classNames/classNames";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { NavLinkProps } from "react-router-dom";
import s from "./AppNavLink.module.scss";

export enum AppNavLinkVariant {
  PRIMARY = "primary",
  SECONDATY = "secondary",
}
interface AppNavLinkProps extends NavLinkProps {
  children: ReactNode;
  className?: string;
  variant?: string;
}
export const AppNavLink = (props: AppNavLinkProps) => {
  const {
    className,
    children,
    to,
    variant = AppNavLinkVariant.PRIMARY,
  } = props;
  return (
    <NavLink
      className={classNames(s.appNavLink, {}, [className, s[variant]])}
      to={to}
    >
      <>{children}</>
    </NavLink>
  );
};
