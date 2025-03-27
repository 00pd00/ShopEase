import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase"; // Import auth from your firebase.js
import { updateProfile } from "firebase/auth"; // Import updateProfile to update display name
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSignup = async e => {
    e.preventDefault();
    try {
      // Create the user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: username 
      });

      console.log("User signed up:", user);
      navigate("/");
  
    } catch (error) {
      console.error("Signup error:", error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center dark:text-white min-h-screen dark:bg-gray-900 bg-gray-100">
      <div className="w-full max-w-md dark:bg-gray-700 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block dark:text-white text-gray-700 font-medium mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              className="w-full p-3 border dark:text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username (Max 5 characters) "
              required
            />
          </div>
          <div className="mb-4">
            <label className="block dark:text-white text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full dark:text-black p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block dark:text-white text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full p-3 dark:text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center mt-4 dark:text-white text-gray-600">
          Already have an account?{" "}
          <Link
            to={'/'}
            className="text-blue-500 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
