import { RouteProps } from "react-router-dom";
import { MainPage } from "3pages/MainPage/";
import { AboutPage } from "3pages/AboutPage/";
export enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}
export const RoutesPath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routesConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutesPath[AppRoutes.MAIN],
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutesPath[AppRoutes.ABOUT],
    element: <AboutPage />,
  },
};
