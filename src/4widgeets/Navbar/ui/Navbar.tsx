import React from "react";
import { NavLink } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div>
      <NavLink to={"/"}>Mian</NavLink>
      <NavLink to={"/about"}>About</NavLink>
    </div>
  );
};
