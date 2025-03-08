"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="hidden md:flex items-center justify-center w-1/2 bg-gradient-to-r from-primary to-indigo-500 relative rounded-tr-[80px] rounded-br-[80px] overflow-hidden shadow-lg"
        style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0 100%)" }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/logo.jpg"
            alt="Auth Illustration"
            fill={true}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            style={{ objectFit: "cover" }}
            className="opacity-70"
          />

          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        <div className="relative z-10 text-white text-center px-6">
          <h2 className="text-4xl font-bold">CollabeSphere</h2>
          <p className="mt-2 text-sm opacity-90">
            Plan smarter, work faster, achieve more.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center w-full md:w-3/5 p-10"
      >
        <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;
