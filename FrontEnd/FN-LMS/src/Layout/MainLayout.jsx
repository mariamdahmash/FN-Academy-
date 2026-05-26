import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <main className="my-4">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
