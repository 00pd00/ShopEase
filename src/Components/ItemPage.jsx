import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../utils/cartSlice";

const ItemPage = () => {
  const [finaldata, setFinalData] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    fetchdata();
  }, []);

  const dispatch = useDispatch();
  const handleAddItems = item => {
    dispatch(addItem(item));
  };

  const fetchdata = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/products");
    const json = await data.json();

    const filteredData = json.filter(item => item.id == resId);
    setFinalData(filteredData);
  };

  return (
    <div>
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
                    <button
                      onClick={() => handleAddItems(item)}
                      className="my-2 mx-2 border-2 rounded-md bg-blue-950 text-white border-black "
                    >
                      Add to Cart
                    </button>
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
