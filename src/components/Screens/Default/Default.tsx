import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../../../contexts";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

export function ScreenDefault() {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Outlet />
        <Footer />
      </UserContextProvider>
    </div>
  );
}
