import { createBrowserRouter } from "react-router-dom";
import {
  ScreenDefault,
  ScreenError,
  ScreenHome,
  ScreenLogin,
} from "../Screens";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ScreenDefault />,
    errorElement: <ScreenError />,
    children: [
      { path: "/", element: <ScreenHome /> },
      { path: "/login", element: <ScreenLogin /> },
    ],
  },
]);

export default routes;
