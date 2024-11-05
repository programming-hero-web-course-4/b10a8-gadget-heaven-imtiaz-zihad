import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { getAllCart, removeFromCart } from "../utils";
import { FaDeleteLeft } from "react-icons/fa6";

const DashCart = () => {
  const [accs, setAccs] = useState([]);

  useEffect(() => {
    const carts = getAllCart();

    setAccs(carts);
  }, []);

  let totalCost = 0;
  accs.forEach((acc) => {
    totalCost += acc.price;
  });

  const handleCartRemove = (id) => {
    removeFromCart(id);
    const carts = getAllCart();

    setAccs(carts);
  };

  return (
    <div>
      <div className="flex font-bold justify-between mt-20 items-center ">
        <div>
          <h1 className="text-2xl">Cart</h1>
        </div>
        <div className="flex gap-5 items-center">
          <h1>Total Cost: ${totalCost} </h1>
          <div className="btn text-purple-700 hover:bg-red-600 btn-primary rounded-3xl bg-transparent flex gap-3">
            <button>Sort by Price</button>
            <FaSort />
          </div>
          <button className="btn text-white btn-primary rounded-3xl bg-purple-600 border-none">
            Purchase
          </button>
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
                onClick={() => handleCartRemove(acc.id)}
                size={30}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashCart;
