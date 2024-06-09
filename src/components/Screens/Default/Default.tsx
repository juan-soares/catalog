import { Footer } from "../../Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { createContext } from "react";

export const UserContext = createContext("oii");

export function Default() {
  return (
    <UserContext.Provider value="oii">
      <Header />
      <Outlet />
      <Footer />
    </UserContext.Provider>
  );
}
