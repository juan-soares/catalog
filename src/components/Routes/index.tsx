import { createBrowserRouter } from "react-router-dom";
import { ScreenDefault, ScreenError, ScreenLogin } from "../Screens";

const routes = createBrowserRouter([
  {
    path: "/",
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

export default routes;
