import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { render } from "react-dom";
import { App } from "./1app/App";

// ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
