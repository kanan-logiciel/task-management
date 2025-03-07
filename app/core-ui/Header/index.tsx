"use client";
import { FiBell, FiUser, FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useAuth } from "@/app/context/AuthContext";

const Header = () => {
  const { logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800 dark:text-white">
      <h1 className="text-xl font-bold">Task Manager</h1>
      <div className="flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>
        <FiBell />
        <FiUser />
        <button
          onClick={logout}
          className="px-4 py-2 bg-gray text-white rounded-md hover:bg-gray-600 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
