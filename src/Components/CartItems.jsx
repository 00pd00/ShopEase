import { collection, query, where, getDocs } from "firebase/firestore";
import { db, auth } from "../utils/firebase";
import { useState, useEffect } from "react";

const CartComponent = () => {
  const [cartItems, setCartItems] = useState([]);

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

  return (
    <div>
      <h2>Cart Items</h2>
      <ul>
        {cartItems.length > 0
          ? cartItems.map((cart, index) =>
              <li key={index}>
                {JSON.stringify(cart.items)}
              </li>
            )
          : <p>No items in cart</p>}
      </ul>
    </div>
  );
};

export default CartComponent;
