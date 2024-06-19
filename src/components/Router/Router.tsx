import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ScreenDefault, ScreenLogin } from "../Screens";

export function Router() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <ScreenDefault />,
      children: [
        {
          path: "/login",
          element: <ScreenLogin />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}
