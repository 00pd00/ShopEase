import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Header from "./Header";

const Shoes = () => {
  const [ApiData, setApiData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await data.json();
    const shoesfilter = json.filter(item => item.category.name === "Shoes");
    setApiData(shoesfilter);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen dark:text-white">
      <Header />

      <img src="" alt="" />
      <ItemCard ApiData={ApiData} />
    </div>
  );
};

export default Shoes;
