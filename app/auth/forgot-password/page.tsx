"use client";

import { useState } from "react";
import Button from "@/app/core-ui/Buttons";
import Input from "@/app/core-ui/Inputs";
import Link from "next/link";
import AuthLayout from "@/app/layouts/authLayout";
import { forgotPassword } from "@/app/services/authService";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);
    setMessage("");
    setError("");

    const response = await forgotPassword(email);
    if (response.success) {
      setMessage(response.message);
    } else {
      setError(response.message);
    }

    setLoading(false);
  };

  return (
    <AuthLayout>
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Forgot Password?
      </h2>
      <p className="text-sm text-center text-gray-500 mt-1">
        Enter your email to receive a reset link.
      </p>

      {(error || message) && (
        <div className="text-center mt-4">
          {error && <p className="text-sm text-red-600">{error}</p>}
          {message && <p className="text-sm text-green-600">{message}</p>}
        </div>
      )}

      <div className="mt-6">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <Button variant="primary" onClick={handleForgotPassword}>
        {loading ? "Sending..." : "Send Reset Link"}
      </Button>

      <div className="text-center mt-4">
        <Link
          href="/auth/login"
          className="text-indigo-600 text-sm font-medium hover:underline"
        >
          Back to Login
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
