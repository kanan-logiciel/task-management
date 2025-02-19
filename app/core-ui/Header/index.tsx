"use client";
import { FiBell, FiUser, FiMoon, FiSun } from "react-icons/fi";
import { useState, useEffect } from "react";

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;
