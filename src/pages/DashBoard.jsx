
import { Helmet } from "react-helmet";
import Heading from "../componentes/Heading";



import { Outlet, useLocation, useNavigate } from "react-router-dom";


const DashBoard = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  
  return (
    <>
       <Helmet>
        <title>Dashboard -Gadget heaven</title>
      </Helmet>
      <div className=" text-black px-8">
        <div className="py-5 bg-[#9538E2] ">
          <Heading
            title={"Dashboard"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
          <div className="flex items-center w-full justify-center gap-6">
            <button
              onClick={() => navigate(`/dashboard/cart`)}
              className={`btn rounded-2xl ${location.pathname === "/dashboard/cart" ? "bg-green-700  text-white" : ""}`}
            >
                
              Cart
            </button>
            <button
              onClick={() => navigate(`/dashboard/wish`)}
              className={`btn rounded-2xl ${location.pathname === "/dashboard/wish" ? "bg-red-700 text-white" : ""}`}
            >
              Wish List
            </button>
          </div>
        </div>
        
        <Outlet></Outlet>
        
      </div>
      
    </>
  );
};

export default DashBoard;
