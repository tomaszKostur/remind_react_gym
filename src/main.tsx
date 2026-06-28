import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";
import App from "@/App";
import Game from "@/game_components/Game";
import ExternalData from "@/external_api_components/ExternalData";
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
  },
  {
    path: "/external_data",
    element: <ExternalData />,
    children: routes,
    errorElement: <div>error</div>
  }
]);

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
