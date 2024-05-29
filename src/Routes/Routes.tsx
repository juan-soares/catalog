import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ScreenDefault } from "../screens/Default";
import { ScreenError } from "../screens/Error";
import { ScreenHome } from "../screens/Home";
import { ScreenCategory } from "../screens/Category";

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
        path: "/:category",
        element: <ScreenCategory />
      }
    ]
  }
]);

export default function Routes(){
  
  return(
    <RouterProvider router={router} />
  )
}
