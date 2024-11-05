
import Heading from "../componentes/Heading";



import { Outlet, useNavigate } from "react-router-dom";


const DashBoard = () => {
  
  const navigate = useNavigate();
  
  return (
    <>
      <div className=" text-black">
        <div className="py-5 bg-[#9538E2]">
          <Heading
            title={"Dashboard"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          />
          <div className="flex items-center w-full justify-center gap-6">
            <button
              onClick={() => navigate(`/dashboard/cart`)}
              className="btn rounded-2xl"
            >
                
              Cart
            </button>
            <button
              onClick={() => navigate(`/dashboard/wish`)}
              className="btn rounded-2xl"
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
