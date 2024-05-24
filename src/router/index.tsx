import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import { ScreenHome } from "../screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenHome />,
  },
]);
