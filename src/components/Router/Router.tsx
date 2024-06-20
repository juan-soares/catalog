import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  ScreenDefault,
  ScreenLogin,
  ScreenError,
  ScreenHome,
  ScreenCategory,
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
        { path: "/:categoryURL", element: <ScreenCategory /> },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
