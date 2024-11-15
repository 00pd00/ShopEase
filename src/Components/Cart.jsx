import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const [totalPrice, settotalPrice] = useState([]);

  const cart = useSelector(store => store.cart.items);
  useEffect(
    () => {
      final();
    },
    [cart]
  );

  const final = () => {
    if (cart.length !== 0) {
      const finalAmount = cart
        .map(item => item.price)
        .reduce((a, b) => a + b, 0);
      settotalPrice(finalAmount);
    }
  };

  const dispatch = useDispatch();
  const HandleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="mx-4 w-auto">
      <div className="flex justify-between">
        <div className="font-bold text-5xl">Cart</div>
        
        <div className="my-3">
          {cart.length !== 0
            ? <div className="font-bold text-xl">
                Total: {totalPrice}/-
              </div>
            : <div>Cart is empty! Please add any product in the cart</div>}
        </div>
      </div>
      {cart.map((item, index) => {
        return (
          <div className="my-10">
            <div className="text-xl flex ">
              <span>
                <img
                  className="w-[100px] rounded-md"
                  src={item.images[0]}
                  alt=""
                />
              </span>
              <span>
                {item.title} - {item.price}/-
              </span>
            </div>
          </div>
        );
      })}
      <div className="">
          {cart.length !== 0 &&
            <button
              className=" my-5 bg-[#272a32] text-white w-20 rounded-md"
              onClick={HandleClearCart}
            >
              Clear Cart
            </button>}
        </div>
    </div>
  );
};

export default Cart;
