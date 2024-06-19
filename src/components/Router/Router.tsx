import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ScreenDefault } from "../Screens";

export function Router() {
  const routes = createBrowserRouter([
    {
      path: "",
      element: <ScreenDefault />,
    },
  ]);

  return <RouterProvider router={routes} />;
}
