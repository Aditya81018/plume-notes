import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import AddNotePage from "./pages/add-note.page.tsx";
import MemorizeNotePage from "./pages/memorize-note.page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/note/add",
    element: <AddNotePage />,
  },
  {
    path: "/note/memorize",
    element: <MemorizeNotePage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
