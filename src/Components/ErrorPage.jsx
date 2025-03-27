import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mt-4">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        className="mt-6 px-6 py-3 text-lg font-semibold bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        onClick={() => navigate("/home")}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default ErrorPage;
