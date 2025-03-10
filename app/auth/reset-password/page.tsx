"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import AuthLayout from "@/app/layouts/authLayout";
import Input from "@/app/core-ui/Inputs";
import Button from "@/app/core-ui/Buttons";

const ResetPassword = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!token) {
      setError("Invalid or missing token.");
    }
  }, [token]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newPassword) {
      setError("Please enter a new password.");
      return;
    }
    if (!token) {
      setError("Invalid or missing token.");
      return;
    }

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const res = await fetch("/api/user/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, newPassword }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      setMessage("Password reset successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/auth/login");
      }, 2000);
    } catch (error: unknown) {
      setError(
        (error as Error).message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          Reset Password
        </h2>
        <p className="text-sm text-center text-gray-500 mt-1">
          Enter a new password to reset your account.
        </p>

        {(error || message) && (
          <div className="text-center mt-4">
            {error && <p className="text-sm text-red-600">{error}</p>}
            {message && <p className="text-sm text-green-600">{message}</p>}
          </div>
        )}

        <div className="mt-4">
          <Input
            label="New Password"
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <Button
          onClick={() =>
            handleSubmit(new Event("submit") as unknown as React.FormEvent)
          }
          variant="primary"
        >
          {loading ? "Resetting..." : "Reset Password"}
        </Button>
      </form>
    </AuthLayout>
  );
};

export default ResetPassword;
