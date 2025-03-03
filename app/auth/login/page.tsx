"use client";

import { useState } from "react";
import Button from "@/app/core-ui/Buttons";
import Input from "@/app/core-ui/Inputs";
import AuthLayout from "@/app/layouts/authLayout";
import { useAuthHook } from "@/app/hooks/useAuth";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
  const { login } = useAuthHook();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <AuthLayout>
      <div className="w-full max-w-sm">
        {/* Login Header */}
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Welcome Back!
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Enter your credentials to access your account
        </p>

        {/* Input Fields */}
        <div className="mt-6 space-y-4">
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
        </div>

        {/* Forgot Password */}
        <div className="text-right mt-2">
          <Link
            href="/auth/forgot-password"
            className="text-indigo-600 text-sm font-medium hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <Button variant="primary" onClick={handleLogin}>
          Login
        </Button>

        {/* OR Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Sign-in Button */}
        <Button
          variant="google"
          onClick={() => console.log("Signing in with Google")}
        >
          <div className="flex items-center justify-center gap-2 w-full">
            <Image src="/google.png" alt="Google" width={30} height={30} />
            <span className="font-medium">Continue with Google</span>
          </div>
        </Button>

        {/* Sign-up Link */}
        <p className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            href="/auth/signup"
            className="text-indigo-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
