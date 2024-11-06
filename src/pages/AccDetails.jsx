import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../componentes/Heading";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { addToCart, addToWish, getAllCart, getAllWish } from "../utils";
import toast from "react-hot-toast";

const AccDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [acc, setAcc] = useState({});
  const { title, img, price, desc, spec, avail, rating } = acc || {};
  const [isCart, setIsCart] = useState(false);
  const [isWish, setIsWish] = useState(false);

  useEffect(() => {
    const singleData = data.find((acc) => acc.id == id);
    if (singleData) {
      setAcc(singleData);

      const carts = getAllCart();
      const isExists = carts.find((item) => item.id == singleData.id);
      if (isExists) {
        setIsCart(true);
      }
    }
  }, [data, id]);

  useEffect(() => {
    const singleData = data.find((acc) => acc.id == id);
    if (singleData) {
      setAcc(singleData);

      const wishs = getAllWish();
      const isExists = wishs.find((item) => item.id == singleData.id);
      if (isExists) {
        setIsWish(true);
      }
    }
  }, [data, id]);

  const handleAddToCart = (acc) => {
    if (isCart) {
      return toast.error("Already added !");
    }
    addToCart(acc);
    setIsCart(true);
  };
  const handleAddToWish = (acc) => {
    if (isWish) {
      return toast.error("Already added !");
    }
    addToWish(acc);
    setIsWish(true);
  };

  return (
    <div className="bg-purple-700 w-full h-[400px] p-8 relative">
      <Heading
        title="Product Details"
        subtitle="Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
      />
      <div className="absolute right-[20%] w-4/5 max-w-4xl bg-white p-6 rounded-lg shadow-xl">
        <div className="flex gap-6">
          {/* Image Section */}
          <div className="w-1/3 bg-gray-200 rounded-lg overflow-hidden">
            <img className="cover h-full" src={img} alt={title} />
          </div>

          {/* Details Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="text-lg font-semibold text-green-600 mb-2">
              ${price}
            </p>
            <span
              className={`block mb-4 ${
                avail ? "text-green-500" : "text-red-500"
              }`}
            >
              {avail ? "In Stock" : "Out of Stock"}
            </span>
            <p className="mb-4">{desc}</p>

            {/* Dynamic Specifications */}
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Specifications:</h3>
              <ul className="list-disc list-inside">
                {(spec || ["No specifications available"]).map(
                  (item, index) => (
                    <li key={index}>{item}</li>
                  )
                )}
              </ul>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <span className="ml-2">{rating}</span>
            </div>

            {/* Button */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => handleAddToCart(acc)}
                className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-full shadow-md"
              >
                <span>Add to Cart</span>
                <FaShoppingCart className="ml-2" />
              </button>
              <button
                onClick={() => handleAddToWish(acc)}
                className="flex items-center justify-center w-10 h-10 text-gray-500 bg-white rounded-full shadow-md"
              >
                <FaRegHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccDetails;
