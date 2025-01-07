/* eslint-disable import/no-unresolved */
import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaCog, FaBell, FaSignOutAlt } from "react-icons/fa";
import Feed from "@/components/app/feed";
import Navbar from "@/components/nav/navbar";
import UserRepository from "@/components/app/userRepo";
function App() {
  
  useEffect(() => {
    window.authentication.onLoginSuccess((data: any) => {
      console.log(data);
    });
  }, []);



  return (
    <div className="min-h-screen font-playRight bg-black text-white flex flex-col">
      <div className="flex-grow flex">
        <UserRepository />
        <Feed />
        <Navbar />
      </div>

      <footer className="bg-gray-900 text-gray-400 text-center p-4">
        <p>
          &copy; {new Date().getFullYear()} quickcourse.xyz. All rights
          reserved.
        </p>
        <p>
          Built with ❤️ using Electron Forge and Tailwind CSS
          <a
            href="https://github.com/your-repo"
            className="text-blue-400 hover:underline"
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
