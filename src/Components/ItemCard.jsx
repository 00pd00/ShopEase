import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../utils/firebase";  
import { addDoc, collection } from "firebase/firestore";
import { auth } from "../utils/firebase"; 

const ItemCard = props => {
  const { ApiData } = props;

  //pagination
  const ItemPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const lastIndex = currentPage * ItemPerPage;
  const firstIndex = lastIndex - ItemPerPage;
  const currentItems = ApiData.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(ApiData.length / ItemPerPage);

  const cartHandleSubmit = async item => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in first!");
      return;
    }

    await addDoc(collection(db, "cart"), {
      userId: user.uid,
      items: item
    });


    alert("Added to Cart!");
  };

  return (
    <div>
      <div className="flex flex-wrap gap-4">
        <div className="md:grid md:grid-cols-4 md:gap-4 md:max-w-7xl md:mx-auto md:px-4 md:py-4">
          {currentItems.map(item =>
            <div key={item.id}>
              <Link to={"/itempage/" + item.id} className="cursor-default">
                <div className="m-4 p-4 w-[300px] h-[350px] dark:hover:bg-gray-800 dark:bg-black bg-gray-200 rounded-md hover:bg-gray-300 flex flex-col">
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
                <button
                  onClick={e => {
                    e.preventDefault();
                    cartHandleSubmit(item);
                  }}
                >
                  Save cart
                </button>
              </div>
            </div>
          )}
          <div />
        </div>
        <div className="flex gap-4 mt-4 mx-auto">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 dark:text-black bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <div className="flex gap-2 ">
            {[...Array(totalPages)].map((_, index) =>
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`p-2 ${currentPage === index + 1
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300"} dark:text-black  `}
              >
                {index + 1}
              </button>
            )}
          </div>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 dark:text-black bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
