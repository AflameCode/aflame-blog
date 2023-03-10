import React from "react";
import "./style/index.scss";

interface AppProps {
  className?: string;
}

import { Test } from "./Test";

export const App = (props: AppProps) => {
  const { className } = props;
  return (
    <div>
      <Test />
      <p>asadfasdfad</p>
    </div>
  );
};
