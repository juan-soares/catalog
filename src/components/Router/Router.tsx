import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ScreenDefault,
  ScreenLogin,
  ScreenError,
  ScreenHome,
} from "../Screens";

export function Router() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <ScreenDefault />,
      errorElement: <ScreenError />,
      children: [
        { path: "/", element: <ScreenHome /> },
        { path: "/login", element: <ScreenLogin /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
