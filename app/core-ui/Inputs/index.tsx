"use client";
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({
  label,
  type,
  value,
  onChange,
  placeholder,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePassword = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="relative mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <input
          type={type === "password" && isPasswordVisible ? "text" : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary pr-10"
        />
        {type === "password" && (
          <button
            type="button"
            className="absolute inset-y-0 right-2 flex items-center px-2 text-gray-500"
            onClick={togglePassword}
          >
            {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
