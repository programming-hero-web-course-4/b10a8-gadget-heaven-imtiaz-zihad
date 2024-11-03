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
      <Outlet></Outlet>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
