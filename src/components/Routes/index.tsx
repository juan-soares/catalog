import { createBrowserRouter } from "react-router-dom";
import { ScreenDefault, ScreenError } from "../Screens";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <ScreenDefault />,
    errorElement: <ScreenError />,
  },
]);

export default routes;
