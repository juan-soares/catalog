import { Outlet } from "react-router-dom";
import { Footer } from "../../Footer";
import { Header } from "../../Header";

export function ScreenDefault() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
