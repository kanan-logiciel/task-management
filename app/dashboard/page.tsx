"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../core-ui/Sidebar";
import Header from "../core-ui/Header";
import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user, router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
      </div>
    </div>
  );
}
