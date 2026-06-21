import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";
import App from "@/App";
import Game from "@/Game";
import "@/global";

const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
    errorElement: <div>error</div>,
  },
  {
    path: "/game",
    element: <Game />,
    children: routes,
    errorElement: <div>error</div>
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
