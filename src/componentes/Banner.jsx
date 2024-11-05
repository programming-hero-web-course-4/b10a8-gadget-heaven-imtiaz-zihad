import Heading from "./Heading";

import myImage from "../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="relative w-full flex min-h-[calc(100vh-232px)] flex-col items-center bg-[#9538E2] rounded-2xl p-8 mb-72">
     
      <div className="text-center mt-8">
        <Heading
          title={
            <>
              Upgrade Your Tech Accessorize with
              <br />
              Gadget Heaven Accessories
            </>
          }
          subtitle={
            <>
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to
              <br />
              the coolest accessories, we have it all!
            </>
          }
        />
        <button className="mt-6 px-8 py-3 bg-white text-[#9538E2] font-semibold rounded-full shadow-lg">
          Shop Now
        </button>
      </div>

     
      <div className="absolute bottom-[-40%] flex justify-center w-full  ">
        <img className="border border-t-8 border-white/25 w-[800px] h-[500px] object-cover rounded-xl shadow-lg " src={myImage} alt="Gadget Heaven Banner " />
      </div>
    </div>
  );
};

export default Banner;
