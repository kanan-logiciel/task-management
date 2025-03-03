"use client";

import { useState } from "react";
import Button from "@/app/core-ui/Buttons";
import Input from "@/app/core-ui/Inputs";
import Link from "next/link";
import AuthLayout from "@/app/layouts/authLayout";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleForgotPassword = async () => {
    if (!email) {
      setMessage("Please enter your email.");
      return;
    }
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-sm">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Forgot Password?
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Enter your email to receive a reset link.
        </p>

        <div className="mt-6">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>

        {message && <p className="text-sm text-left text-red-600">{message}</p>}

        <Button variant="primary" onClick={handleForgotPassword}>
          Send Reset Link
        </Button>

        <div className="text-center mt-4">
          <Link
            href="/auth/login"
            className="text-indigo-600 text-sm font-medium hover:underline"
          >
            Back to Login
          </Link>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
