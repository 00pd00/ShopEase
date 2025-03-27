import React, { useEffect, useState } from "react";
import Header from "./Header";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../utils/firebase";

const Cart = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [groupedCart, setGroupedCart] = useState([]);
  const [variable, setvariable] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const [cartItems, setCartItems] = useState([]);

  // const clearCart = async () => {
  //   const user = auth.currentUser; // Get logged-in user
  
  //   if (!user) {
  //     alert("Please log in first!");
  //     return;
  //   }
  
  //   const cartRef = doc(db, "cart", user.uid);
  
  //   try {
  //     await updateDoc(cartRef, { cart: [] }); // Set cart to an empty array
  //     alert("Cart has been cleared!");
  //     setCartItems([])
  //   } catch (error) {
  //     console.error("Error clearing cart:", error);
  //   }
  // };


    useEffect(() => {
      const fetchCartItems = async () => {
        const user = auth.currentUser;
        if (!user) {
          console.log("No user logged in");
          return;
        }
  
        console.log("Fetching cart for user:", user.uid);
  
        try {
          const cartQuery = query(
            collection(db, "cart"),
            where("userId", "==", user.uid)
          );
          const cartSnapshot = await getDocs(cartQuery);
  
          if (cartSnapshot.empty) {
            console.log("No cart items found");
          }
  
          const cartData = cartSnapshot.docs.map(doc => doc.data());
          console.log("Cart Data:", cartData);
          setCartItems(cartData);
        } catch (error) {
          console.error("Error fetching cart items:", error);
        }
        
      };
  
      fetchCartItems();
    }, []);





  const togglepanel = () => {
    setvariable(!variable);
  };

  const handleAlert = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
    setTimeout(() => togglepanel(), 3000);
  };

  const cart = cartItems.map((k) => k.items )

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

 

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white">
      <Header />
      <div className="mx-4 w-auto">
        <div className="md:flex md:justify-between">
          <div className="font-bold text-5xl">Cart</div>
          <div className="my-3">
            {cart.length !== 0
              ? <div className="flex font-bold text-xl">
                  Total: ₹{totalPrice}
                </div>
              : <div>Cart is empty! Please add any product in the cart</div>}
          </div>
        </div>

        {groupedCart.map(item =>
          <div className="my-10" key={item.id}>
            <div className="text-xl md:flex md:justify-between items-center">
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
            {/* <button onClick={clearCart} >
              Clear Cart
            </button> */}
            <div className="mx-5">
              <button className=" " onClick={togglepanel}>
                {!variable
                  ? <button className="my-5 p-2 bg-[#272a32] text-white rounded-md">
                      Checkout
                    </button>
                  : <button className="my-5 p-2 bg-[#272a32] text-white rounded-md">
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
                        {index + 1} -{item.title}
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
