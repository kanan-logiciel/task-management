"use client";

import Button from "@/app/core-ui/Buttons";
import Input from "@/app/core-ui/Inputs";
import { useAuthHook } from "@/app/hooks/useAuth";
import Link from "next/link";
import { useState } from "react";
import AuthLayout from "@/app/layouts/authLayout";

const Signup = () => {
  const { login } = useAuthHook();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }
    setError("");
    login(email, password);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-sm">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Sign up to start using our platform.
        </p>

        {/* Input Fields */}
        <div className="mt-6 mb-4 space-y-4">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
          />
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-sm text-center text-red-600 mt-2 ">{error}</p>
        )}

        {/* Sign Up Button */}
        <Button onClick={handleSignup}>Sign Up</Button>

        {/* Login Link */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/auth/login"
            className="text-indigo-600 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Signup;
