import { AboutPage } from "3pages/AboutPage";
import { MainPage } from "3pages/MainPage";
import { routesConfig } from "7shared/config/routesConfig/routesConfig";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

interface AppRouterProps {
  className?: string;
}

export const AppRouter = (props: AppRouterProps) => {
  const { className } = props;
  return (
    <div className="appRouter">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {Object.values(routesConfig).map(({ element, path }) => {
            return <Route path={path} element={element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
};
