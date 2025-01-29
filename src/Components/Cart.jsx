import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import Header from "./Header";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [groupedCart, setGroupedCart] = useState([]);
  const [variable, setvariable] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const togglepanel = () => {
    setvariable(!variable);
  };

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    setTimeout(() => togglepanel(), 3000);
  };

  const cart = useSelector(store => store.cart.items);

  const groupCartItems = items => {
    const grouped = items.reduce((a, item) => {
      const found = a.find(i => i.id === item.id);
      if (found) {
        found.quantity += 1;
        found.totalPrice += item.price;
      } else {
        a.push({ ...item, quantity: 1, totalPrice: item.price });
      }
      return a;
    }, []);
    return grouped;
  };
  useEffect(
    () => {
      if (cart.length !== 0) {
        const groupedItems = groupCartItems(cart);
        setGroupedCart(groupedItems);

        const finalAmount = groupedItems.reduce((a, b) => a + b.totalPrice, 0);
        setTotalPrice(finalAmount);
      } else {
        setGroupedCart([]);
        setTotalPrice(0);
      }
    },
    [cart]
  );

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="bg-white h-screen dark:bg-gray-900 text-black dark:text-white" >
      <Header/>
      <div className="mx-4 w-auto  ">
        <div className="flex justify-between">
          <div className="font-bold text-5xl">Cart</div>
          <div className="my-3">
            {cart.length !== 0
              ? <div className="font-bold text-xl">
                  Total: ₹{totalPrice}
                </div>
              : <div>Cart is empty! Please add any product in the cart</div>}
          </div>
        </div>

        {groupedCart.map(item =>
          <div className="my-10" key={item.id}>
            <div className="text-xl flex justify-between items-center">
              <img
                className="w-[100px] rounded-md"
                src={item.images[0]}
                alt=""
              />
              <span>
                {item.title} - {item.quantity} = ₹{""}
                {item.totalPrice}/-
              </span>
            </div>
          </div>
        )}

        {cart.length !== 0 &&
          <div className="flex">
            <button
              className="my-5 bg-[#272a32] text-white  rounded-md"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
            <div className="mx-5">
              <button className=" " onClick={togglepanel}>
                {!variable
                  ? <button className="my-5 p-2 bg-[#272a32] text-white  rounded-md">
                      Checkout
                    </button>
                  : <button className="my-5 p-2 bg-[#272a32] text-white  rounded-md">
                      Close
                    </button>}
              </button>

              <div
                className={`fixed top-0 right-0 text-white w-[300px] h-full bg-gray-800  ${variable
                  ? "translate-x-0"
                  : "translate-x-full"} transition-transform duration-1000 z-50 `}
              >
                <div className="text-center">
                  <h1 className="text-4xl">Checkout</h1>
                  {groupedCart.map((item, index) => {
                    return (
                      <div key={index} className="flex my-5 ">
                        {index + 1} -
                        {item.title}
                      </div>
                    );
                  })}

                  <div>
                    <button
                      onClick={handleAlert}
                      className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                      Pay {totalPrice}/- Now
                    </button>
                    {showAlert &&
                      <div className="bg-green-500 text-white px-4 py-2 rounded mt-4">
                        Payment has been completed
                      </div>}
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>
  );
};

export default Cart;
