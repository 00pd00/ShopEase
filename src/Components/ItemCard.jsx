import React, { useState } from "react";
import { Link } from "react-router-dom";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemCard = props => {
  const { ApiData } = props;
  const SlicedData = ApiData.slice(2, 40);
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);

  const handleAddItems = item => {
    dispatch(addItem(item));
    setAddedItems(prev => [...prev, item.id]); 
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <div className="md:grid md:grid-cols-4 md:gap-4 md:max-w-7xl md:mx-auto md:px-4 md:py-4">
          {SlicedData.map(item =>
            <div key={item.id}>
              <Link
                to={"/itempage/" + item.id}
                className="cursor-default"
              >
                <div
                  className="m-4 p-4 w-[300px] h-[350px] dark:bg-black bg-gray-200 rounded-md hover:bg-gray-300 flex flex-col"
                >
                  <div className="mb-2 flex relative">
                    <img
                      src={item.images[0]}
                      alt="Img"
                      className="w-full h-[200px] object-cover rounded-md"
                    />
                  </div>

                  <div className="font-bold text-lg mb-2 truncate">
                    {item.title}
                  </div>
                  <div className="text-2xl font-semibold mb-2">
                    ₹{item.price}
                  </div>
                </div>
              </Link>
              <div className="absolute my-[-60px] mx-[15px] ">
                {addedItems.includes(item.id) ? (
                  <div className="text-green-600 font-bold p-2">Added ✓</div>
                ) : (
                  <button
                    onClick={() => handleAddItems(item)}
                    className="my-2 mx-2 border-2 rounded-md bg-blue-950 text-white border-black"
                  >
                    Add+
                  </button>
                )}
              </div>
            </div>
          )}
          <div />
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
