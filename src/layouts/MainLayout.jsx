import Footer from "../componentes/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../componentes/NavBar";
import { Toaster } from "react-hot-toast";


const MainLayout = () => {
  return (
    <div>
     
      {/* NavBar */}

      <Toaster />

      <div className="h-16">
        <NavBar></NavBar>
      </div>

      {/* Outlet */}
      <div className="min-h-[calc(100vh-232px)] container mx-auto ">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
