import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import MainNav from "./Main.nav";

export default function MainLayout() {
  return (
    <div>
      <MainNav />
      <Outlet />
      <Footer />
    </div>
  );
}
