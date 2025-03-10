"use client";

import { useState } from "react";
import Button from "@/app/core-ui/Buttons";
import Input from "@/app/core-ui/Inputs";
import Link from "next/link";
import AuthLayout from "@/app/layouts/authLayout";

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

    try {
      const res = await fetch("/api/user/forget-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("User not found. Please sign up first.");
        }
        throw new Error(data.error);
      }

      setMessage("link sent successfully via email");
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
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
