import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "./providers/ThemeProvider/lib/useTheme";

import { AboutPage } from "3pages/AboutPage";
import { MainPage } from "3pages/MainPage";
import { Navbar } from "4widgets/Navbar";

import { classNames } from "7shared/lib/classNames/classNames";

import "./styles/index.css";
import { AppRouter } from "./router";

interface AppProps {
  className?: string;
}

export const App = (props: AppProps) => {
  const { className } = props;
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
      <button onClick={toggleTheme}>theme</button>
    </div>
  );
};
