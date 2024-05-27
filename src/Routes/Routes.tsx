import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ScreenDefault } from "../screens/Default";
import { ScreenError } from "../screens/Error";
import { ScreenHome } from "../screens/Home";
import { ScreenCategoryTitle } from "../screens/Category";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenDefault />,
    errorElement: <ScreenError />,
    children: [
      {
        path: "/",
        element: <ScreenHome />
      },
      {
        path: "/:category/:title",
        element: <ScreenCategoryTitle />
      }
    ]
  }
]);

export default function Routes(){
  
  return(
    <RouterProvider router={router} />
  )
}
