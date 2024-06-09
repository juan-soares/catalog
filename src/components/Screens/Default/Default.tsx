import { Footer } from "../../Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { UserContextProvider } from "../../../contexts";

export function Default() {
  return (
    <UserContextProvider>
      <Header />
      <Outlet />
      <Footer />
    </UserContextProvider>
  );
}
