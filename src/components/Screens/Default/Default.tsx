import { Outlet } from "react-router-dom";
import {
  CategoriesContextProvider,
  UserContextProvider,
} from "../../../contexts";
import { Header } from "../../Header";
import { Footer } from "../../Footer";

export function ScreenDefault() {
  return (
    <div>
      <UserContextProvider>
        <CategoriesContextProvider>
          <Header />
          <Outlet />
          <Footer />
        </CategoriesContextProvider>
      </UserContextProvider>
    </div>
  );
}
