"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/context/AuthContext";
import Sidebar from "@/app/core-ui/Sidebar";
import Header from "@/app/core-ui/Header";

const Dashboard = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login"); // Redirect to login if not authenticated
    }
  }, [user, router]);

  if (!user) return null; // Prevents flickering before redirect

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Dashboard Content */}
        <main className="flex-1 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Welcome to the Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Here you can manage your data and settings.
          </p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
