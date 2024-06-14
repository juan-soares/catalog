import { createBrowserRouter } from "react-router-dom";
import {
  ScreenAdmin,
  ScreenCategory,
  ScreenCategoryItem,
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
      { path: "/admin", element: <ScreenAdmin /> },
      { path: "/:category", element: <ScreenCategory /> },
      { path: "/:category/:id", element: <ScreenCategoryItem /> },
    ],
  },
]);

export default routes;
