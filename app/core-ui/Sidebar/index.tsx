"use client";
import { useState } from "react";
import { FiHome, FiCheckSquare, FiSettings, FiMenu } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`h-screen bg-gray-800 text-white p-4 transition-all ${
        collapsed ? "w-16" : "w-64"
      }`}
    >
      <button onClick={() => setCollapsed(!collapsed)} className="mb-6 text-lg">
        <FiMenu />
      </button>
      <nav className="space-y-4">
        <SidebarItem
          href="/"
          icon={<FiHome />}
          text="Dashboard"
          collapsed={collapsed}
        />
        <SidebarItem
          href="/tasks"
          icon={<FiCheckSquare />}
          text="Tasks"
          collapsed={collapsed}
        />
        <SidebarItem
          href="/settings"
          icon={<FiSettings />}
          text="Settings"
          collapsed={collapsed}
        />
      </nav>
    </div>
  );
};

const SidebarItem = ({
  href,
  icon,
  text,
  collapsed,
}: {
  href: string;
  icon: React.ReactNode;
  text: string;
  collapsed: boolean;
}) => (
  <Link
    href={href}
    className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-700"
  >
    {icon}
    {!collapsed && <span>{text}</span>}
  </Link>
);

export default Sidebar;
