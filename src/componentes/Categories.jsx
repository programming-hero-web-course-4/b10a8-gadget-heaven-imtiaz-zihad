import { NavLink, useLoaderData } from "react-router-dom";
/* eslint-disable react/prop-types */

const Categories = () => {
  const categories = useLoaderData();
  return (
    <div>
      <div  className="tabs tabs-lifted">
      
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/category/${category.category}`}
          role="tab"
          className={({ isActive }) =>
            `tab text-2xl font-thin ${isActive ? "tab-active" : ""}`
          }
        >
          {category.category}
          
        </NavLink>
        
      ))}

      
    </div>

    
    </div>

      
  );
};

export default Categories;
