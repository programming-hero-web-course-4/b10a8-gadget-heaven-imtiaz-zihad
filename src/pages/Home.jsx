import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../componentes/Banner";
import Categories from "../componentes/Categories";

const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      {/* Banner */}
      <Banner></Banner>
      {/* Heading */}
      <h2 className="text-2xl text-center font-bold text-black pt-24">
        Explore Cutting-Edge Gadgets
      </h2>
      <Categories categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
