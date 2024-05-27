import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ScreenHome } from "../screens/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ScreenHome />,
  },
  {
    path:"/:category/:title",
    element: <>oi</>
  }
]);

export default function Routes(){
  
  return(
    <RouterProvider router={router} />
  )
}
