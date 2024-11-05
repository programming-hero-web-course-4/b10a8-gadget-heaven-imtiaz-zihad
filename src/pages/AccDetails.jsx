import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../componentes/Heading";

const AccDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [acc, setAcc] = useState({});
  const { title, img,  price, desc, spec, avail, rating } = acc || {};

  useEffect(() => {
    const singleData = data.find((acc) => acc.id == id);
    setAcc(singleData);
  }, [data, id]);

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
            <img className="w-full h-full object-cover" src={img} alt={title} />
          </div>

          {/* Details Section */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-2">
              {title || "Product Name"}
            </h2>
            <p className="text-lg font-semibold text-green-600 mb-2">
              ${price || "0.00"}
            </p>
            <span
              className={`block mb-4 ${
                avail ? "text-green-500" : "text-red-500"
              }`}
            >
              {avail ? "In Stock" : "Out of Stock"}
            </span>
            <p className="mb-4">
              {desc || "High-performance device with the best features."}
            </p>

            {/* Dynamic Specifications */}
            <div className="mb-4">
              <h3 className="font-semibold mb-1">Specification:</h3>
              {spec && spec.length > 0 ? (
                <ul className="list-disc list-inside">
                  {spec.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>No specifications available.</p>
              )}
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="text-yellow-500">
                {"★".repeat(Math.floor(rating || 4)) +
                  (rating % 1 !== 0 ? "☆" : "")}
              </div>
              <span className="ml-2">{rating || "4.8"}</span>
            </div>

            {/* Button */}
            <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccDetails;
