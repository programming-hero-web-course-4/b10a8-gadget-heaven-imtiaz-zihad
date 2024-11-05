import Footer from "../componentes/Footer";
import { Outlet } from "react-router-dom";
import NavBar from "../componentes/NavBar";

const MainLayout = () => {
  return (
    <div>
      {/* NavBar */}

      <div  className="h-16">
        <NavBar></NavBar>
      </div>

      {/* Outlet */}
      <div className="min-h-[calc(100vh-232px)] py-12 container mx-auto ">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
