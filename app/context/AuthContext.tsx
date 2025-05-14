"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import type { User } from "next-auth";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  googleSignIn: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (session === undefined) return;

    if (session?.user) {
      setUser(session.user);
      localStorage.setItem("user", JSON.stringify(session.user));

      if (timer) clearTimeout(timer);
      setTimer(setTimeout(logout, 3600000));
    } else {
      localStorage.removeItem("user");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const googleSignIn = async () => {
    try {
      await signIn("google");
    } catch (error) {
      console.error("Google Sign-in Error:", error);
    }
  };

  const login = async (email: string, password: string) => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      throw new Error(res.error);
    }
    router.push("/dashboard");
  };

  const signup = async (email: string, password: string) => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error(await res.text());

      await login(email, password);
    } catch (error) {
      console.error("Signup Error:", error);
    }
  };

  const logout = () => {
    signOut();
    setUser(null);
    localStorage.removeItem("user");
    router.replace("/auth/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, googleSignIn, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
