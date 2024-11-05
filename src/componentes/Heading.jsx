
/* eslint-disable react/prop-types */
const Heading = ({ title, subtitle }) => {
    return (
        <div className="flex flex-col w-full justify-center items-center my-12  text-white  ">
        <h1 className="text-2xl md:text-2xl lg:text-4xl font-bold text-center mb-4  ">{title}</h1>
        <p className="text-xs md:text-base text-white text-center font-thin"> {subtitle}</p>
      </div>
    );
};

export default Heading;