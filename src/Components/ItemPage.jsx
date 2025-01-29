import React, { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import Header from "./Header";

const ItemPage = () => {
  const [finaldata, setFinalData] = useState([]);
  const { resId } = useParams(); // This is a string, so we will convert it to a number
  const [Added, SetAdded] = useState(false);

  const dispatch = useDispatch();

  // Memoize the fetchdata function to avoid unnecessary re-renders
  const fetchdata = useCallback(
    async () => {
      const data = await fetch("https://api.escuelajs.co/api/v1/products/");
      const json = await data.json();

      // Convert resId to a number to match the product ID
      const filteredData = json.filter(item => item.id === Number(resId));
      setFinalData(filteredData);
    },
    [resId]
  ); // Now it's properly dependent on resId

  useEffect(
    () => {
      fetchdata(); // Call the memoized fetchdata function
    },
    [fetchdata]
  ); // Adding fetchdata as a dependency ensures it gets updated if the function changes

  const handleAddItems = item => {
    dispatch(addItem(item));
    SetAdded(true);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen pb-2">
      <Header />
      {finaldata.length > 0
        ? finaldata.map(item =>
            <div key={item.id} className="">
              <div className="font-bold text-5xl px-3">
                {item.title}
              </div>
              <div className="md:flex md:justify-between md:py-3">
                <div className="md:flex">
                  <img
                    src={item.images[0]}
                    className="px-3 py-3 w-[300px] h-[300px] rounded-2xl"
                    alt="img"
                  />
                  <img
                    src={item.images[1]}
                    className="px-3 py-3 w-[300px] h-[300px] rounded-2xl"
                    alt="img"
                  />
                  {item.images[2] !== undefined &&
                    <img
                      src={item.images[2]}
                      alt="img"
                      className="px-3 py-3 w-[300px] h-[300px] rounded-2xl"
                    />}
                </div>
              </div>
              <div className="mx-[20px]">
                {item.description}
                <br />
                <br />
                <div className="flex">
                  <div className="text-4xl">
                    ₹{item.price}
                  </div>
                  <div>
                    {!Added
                      ? <button
                          onClick={() => handleAddItems(item)}
                          className="my-2 mx-2 border-2 rounded-md bg-blue-950 text-white border-black"
                        >
                          Add+
                        </button>
                      : <div className="text-green-600 font-bold p-2">
                          Added ✓
                        </div>}
                  </div>
                </div>
              </div>
            </div>
          )
        : <p>Loading...</p>}
    </div>
  );
};

export default ItemPage;
