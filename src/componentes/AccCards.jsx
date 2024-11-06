import { useLoaderData, useParams, NavLink } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const AccCards = () => {
  const data = useLoaderData();
  const { category } = useParams();
  const [accs, setAccs] = useState([]);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    // Fetch categories.json when the component mounts
    const fetchCategories = async () => {
      try {
        const response = await fetch('/categories.json'); // Replace with the correct path
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const categoriesData = await response.json();
        console.log('Fetched categories:', categoriesData); // Debug log
        setCats(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    if (category && category !== "All Product") {
      const filterByCtg = [...data].filter((acc) => acc.category === category);
      setAccs(filterByCtg);
    } else {
      setAccs(data);
    }
  }, [data, category]);

  return (
    <div className="flex gap-5">
      <div className="w-1/5 bg-green-400 p-4 rounded-2xl ">
        {/* Map and display categories as buttons using NavLink */}
        {cats.length > 0 ? (
          <div className="flex flex-col gap-2">
            {cats.map((cat) => (
              <NavLink
                key={cat.id || cat.category} // Ensure unique keys
                to={`/category/${cat.category}`} // Link to category path
                className={({ isActive }) =>
                  `w-full p-2 text-2xl font-thin text-center rounded-md ${
                    isActive ? "bg-white text-black" : "bg-gray-200 text-black"
                  } hover:bg-gray-300 transition-colors`
                }
              >
                {cat.category} 
              </NavLink>
            ))}
          </div>
        ) : (
          <p>Loading categories...</p> 
        )}
      </div>

      <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accs.map((acc, idx) => (
          <Card key={idx} acc={acc}></Card>
        ))}
      </div>
    </div>
  );
};

export default AccCards;
