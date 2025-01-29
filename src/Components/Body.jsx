import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard";
import Header from "./Header";

const Body = () => {
  const [ApiData, setApiData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await data.json();
    setApiData(json);
  };

 

  return (
    <div className="md:bg-white bg-gray-100 dark:bg-gray-900 min-h-screen text-gray-900 dark:text-gray-100">
      <Header />
      
        
        <div className="p-2">
          <ItemCard ApiData={ApiData} />
        </div>
      </div>
  );
};

export default Body;
