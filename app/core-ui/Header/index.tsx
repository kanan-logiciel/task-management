"use client";
import { useAuth } from "@/app/context/AuthContext";
import { useState, useEffect, useRef } from "react";
import { FiBell, FiUser, FiMoon, FiSun, FiSearch } from "react-icons/fi";

const Header = () => {
  const { logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState(2);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex items-center space-x-4">
        <div className="relative w-64">
          <FiSearch className="absolute left-3 top-2 text-lightGray w-6 h-6" />
          <input
            type="text"
            placeholder="Search tasks or projects"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none transition text-sm"
          />
        </div>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? (
            <FiSun className="text-yellow-500 w-6 h-6" />
          ) : (
            <FiMoon className="text-gray-600 w-6 h-6" />
          )}
        </button>

        <div className="relative">
          <FiBell className="cursor-pointer text-xl w-6 h-6" />
          {notifications > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
              {notifications}
            </span>
          )}
        </div>

        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setDropdownOpen(!isDropdownOpen)}>
            <FiUser className="cursor-pointer text-xl w-6 h-6" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-full w-48 bg-white shadow-lg rounded-lg border border-gray-200 p-2 z-50">
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 transition">
                <span className="text-gray-700">Profile</span>
              </button>
              <div className="border-t border-gray-200 my-1"></div>
              <button
                onClick={logout}
                className="flex items-center gap-2 w-full text-left px-4 py-2 rounded-md text-red-500 hover:bg-red-100 transition"
              >
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
