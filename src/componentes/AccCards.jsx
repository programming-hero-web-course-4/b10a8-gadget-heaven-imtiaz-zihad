import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";



const AccCards = () => {
    // const data = useLoaderData() || []; 
    
  const data = useLoaderData();
  const { category } = useParams();
  const [accs, setAccs] = useState([]);
  console.log(category);

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
      <div className="w-1/5 bg-green-500">
       
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
