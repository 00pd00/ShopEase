import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [groupedCart, setGroupedCart] = useState([]);

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
  console.log(groupedCart);
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
    <div className="mx-4 w-auto">
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
            <img className="w-[100px] rounded-md" src={item.images[0]} alt="" />
            <span>
              {item.title} - {item.quantity} x ₹{item.price} = ₹{""}
              {item.totalPrice}/-
            </span>
          </div>
        </div>
      )}

      {cart.length !== 0 &&
        <button
          className="my-5 bg-[#272a32] text-white w-20 rounded-md"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>}
    </div>
  );
};

export default Cart;
