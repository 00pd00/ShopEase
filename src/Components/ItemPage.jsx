import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import Header from "./Header";

const ItemPage = () => {
  const [finaldata, setFinalData] = useState([]);
  const { resId } = useParams();
  const [Added, SetAdded] = useState(false);

  useEffect(() => {
    fetchdata();
  },[]);

  const dispatch = useDispatch();
  const handleAddItems = item => {
    dispatch(addItem(item));
    SetAdded(true);
  };

  const fetchdata = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await data.json();

    const filteredData = json.filter(item => item.id === resId);
    setFinalData(filteredData);
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white min-h-screen" >
      <Header/>
      {finaldata.length > 0
        ? finaldata.map(item =>
            <div key={item.id} className="">
              <div className="font-bold text-5xl px-3">
                {item.title}
              </div>
              <div className="flex justify-between py-3 ">
                <div className="flex">
                  <img
                    src={item.images[0]}
                    className=" px-3 py-3 w-[300px] h-[300px] rounded-2xl "
                    alt="img"
                  />
                  <img
                    src={item.images[1]}
                    className=" px-3 py-3 w-[300px] h-[300px] rounded-2xl "
                    alt="img"
                  />
                  {item.images[2] !== undefined &&
                    <img
                      src={item.images[2]}
                      className=" px-3 py-3 w-[300px] h-[300px] rounded-2xl "
                    />}
                </div>
              </div>
              <div className="mx-[20px]">
                {item.description}
                <br />
                <br />
                <div className="flex  ">
                  <div className="text-4xl">
                    ₹{item.price}
                  </div>
                  <div>
                    {!Added
                      ? <button
                          onClick={() => handleAddItems(item)}
                          className="my-2 mx-2 border-2 rounded-md bg-blue-950 text-white border-black "
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
