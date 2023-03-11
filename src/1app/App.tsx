import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage } from "../3pages/AboutPage";
import { MainPage } from "../3pages/MainPage";
import { Navbar } from "../4widgeets/Navbar";

import "./style/index.scss";

interface AppProps {
  className?: string;
}

export const App = (props: AppProps) => {
  const { className } = props;
  return (
    <div>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
