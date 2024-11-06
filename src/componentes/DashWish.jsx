import { useEffect, useState } from "react";

import { getAllCart, getAllWish, removeFromWish } from "../utils";
import { FaDeleteLeft } from "react-icons/fa6";
import { Helmet } from "react-helmet";
const DashWish = () => {
  <Helmet>
  <title>hello</title>
</Helmet>
  const [accs, setAccs] = useState([]);

  useEffect(() => {
    const wishs = getAllWish();

    setAccs(wishs);
  }, []);

  const handleWishRemove = (id) => {
    removeFromWish(id);
    const carts = getAllCart();

    setAccs(carts);
  };

  return (
    <div>
      <div className="flex font-bold justify-between mt-20 items-center ">
        <div>
          <h1 className="text-2xl">WishList</h1>
        </div>
      </div>
      <div className="mt-10">
        {accs.map((acc, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border p-4 mb-4 rounded-2xl shadow-lg "
          >
            <div className="w-36 h-24 bg-gray-200 rounded">
              <img className="w-full h-full" src={acc.img} alt="" />
            </div>

            <div className="flex-1 space-y-3">
              <h2 className="text-xl font-semibold">{acc.title}</h2>
              <p className="text-gray-500">{acc.desc}</p>
              <p className="font-bold">Price: ${acc.price}</p>
            </div>

            <button className="text-red-500">
              <FaDeleteLeft
                onClick={() => handleWishRemove(acc.id)}
                size={30}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashWish;
