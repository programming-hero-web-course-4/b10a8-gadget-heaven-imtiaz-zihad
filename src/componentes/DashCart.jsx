import { useEffect, useState } from "react";
import { FaSort } from "react-icons/fa";
import { getAllCart, removeFromCart, clearCart } from "../utils";
import { FaDeleteLeft } from "react-icons/fa6";
import verify from "../assets/Group.png";
import { useNavigate } from "react-router-dom";



const DashCart = () => {
  const [accs, setAccs] = useState([]);
  const [sorts, setSorts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
 

  const handleSort = () => {
    const sorted = [...accs].sort((a, b) => b.price - a.price);
    setSorts(sorted);
    setIsSorted(true);
  };

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
    setIsSorted(false);
  };

  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    clearCart();
    setAccs([]);
    navigate("/"); 
  };
  

  return (
    <div>
      

      <div className="flex font-bold justify-between mt-20 items-center ">
        <div>
          <h1 className="text-2xl">Cart ({accs.length})</h1>
        </div>
        <div className="flex gap-5 items-center">
          <h1>Total Cost: ${totalCost.toFixed(2)} </h1>
          <div
            onClick={handleSort}
            className="btn text-purple-700 hover:bg-red-600 btn-primary rounded-3xl bg-transparent flex gap-3"
          >
            <button>Sort by Price</button>
            <FaSort />
          </div>
          <button
            onClick={handlePurchaseClick}
            className="btn text-white btn-primary rounded-3xl bg-purple-600 border-none"
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="mt-10">
        {(isSorted ? sorts : accs).map((acc, index) => (
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 text-center bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <div className=" flex justify-center items-center w-full">
              <img className=" w-32 h-32 " src={verify} alt="" />
            </div>
            <h1 className="text-3xl font-bold text-black">
              Payment Successfully
            </h1>
            <br />
            <hr />
            <h2 className=" font-semibold mb-4">Confirm Your Purchase</h2>
            <p>Total: ${totalCost.toFixed(2)}.</p>
            <div className="flex gap-4 mt-4">
              <button
                onClick={() => {
                  closeModal();
                }}
                className="btn btn-primary flex justify-center items-center w-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashCart;
