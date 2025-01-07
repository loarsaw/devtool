import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderBack = () => {
  const navigate = useNavigate();
  return (
    <header className="flex items-center p-3 shadow-md">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="flex items-center p-2 rounded-full bg-gray-300 hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <h1 className="ml-4 text-lg text-white font-semibold">Back</h1>
    </header>
  );
};

export default HeaderBack;
