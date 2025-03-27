import React, { useState } from "react";
import { browserLocalPersistence, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Set auth persistence
      await setPersistence(auth, browserLocalPersistence);
  
      // Sign in user
      await signInWithEmailAndPassword(auth, email, password);
      
      navigate("/home");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen dark:bg-gray-900  bg-gray-100 relative">
      <div className="bg-white dark:bg-gray-700 dark:text-white  shadow-md rounded-lg p-6 w-80 -mt-16">
        {" "}{/* Added negative margin */}
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin}>
          {error &&
            <p className="text-red-500 text-sm mb-4">
              {error}
            </p>}
          <div className="mb-4  ">
            <label htmlFor="email" className="block dark:text-white text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-3 py-2 border dark:text-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block dark:text-white text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-3 py-2 border dark:text-black  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <p className="text-sm dark:text-white text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-500 hover:underline font-semibold"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
