import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ScreenDefault, ScreenLogin, ScreenError } from "../Screens";

export function Router() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <ScreenDefault />,
      errorElement: <ScreenError />,
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
