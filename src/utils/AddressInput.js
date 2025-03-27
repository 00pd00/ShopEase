import React, { useState } from "react";
import { db } from "../utils/firebase"; // Import Firebase Firestore
import { doc, setDoc } from "firebase/firestore";
import { auth } from "../utils/firebase"; // Import Firebase Auth to get the user ID

const AddressInput = () => {
  const [address, setAddress] = useState("");

  const addresshandleSubmit = async (e) => {
    e.preventDefault();

    const user = auth.currentUser; // Get the logged-in user
    if (!user) {
      alert("Please log in first!");
      return;
    }

    try {
      await setDoc(doc(db, "Address", user.uid), { address }, { merge: true });
      alert("Address saved successfully!");
    } catch (error) {
      console.error("Error saving address:", error);
    }
  };


  return (
    <div>
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={addresshandleSubmit}>Save Address</button>
      
    </div>
  );
};

export default AddressInput;
