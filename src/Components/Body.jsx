import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const Body = () => {
  const [ApiData, setApiData] = useState([]);

  const fetchData = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await data.json();
    setApiData(json);
    console.log(json)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <img src="" alt="" />
      <ItemCard ApiData={ApiData} />
    </div>
  );
};

export default Body;
