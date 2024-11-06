import { Outlet } from "react-router-dom";
import Banner from "../componentes/Banner";

import { Helmet } from "react-helmet";





const Home = () => {
  
  return (
    <div>
       <Helmet>
        <title>Home -Gadget heaven</title>
      </Helmet>
      
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <h2 className="text-2xl text-center font-bold text-black pt-24">
        Explore Cutting-Edge Gadgets
      </h2>
      
      
      
      
      <Outlet />
    </div>
  );
};

export default Home;
