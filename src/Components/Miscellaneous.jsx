import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Header from "./Header";

const Miscellaneous = () => {
  const [ApiData, setApiData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await data.json();
    const MiscellaneousFilter = json.filter(
      item => item.category.name === "Miscellaneous"
    );
    setApiData(MiscellaneousFilter);
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

export default Miscellaneous;
