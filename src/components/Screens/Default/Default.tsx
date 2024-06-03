import { Footer } from "../../Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../../Header";

export function Default() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
