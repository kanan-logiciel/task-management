"use client";

import { useState } from "react";
import ProtectedRoute from "../components/protectedRoutes";
import DashboardLayout from "../layouts/dashLayout";
import StatCard from "../core-ui/Card/statsCard";
import QuickAccessCard from "../core-ui/Card/quickAccessCard";
import RecentProjects from "../core-ui/Card/recentCard";
import RecentTasks from "../core-ui/Card/recentTaskCard";

interface Metrics {
  completed: number;
  pending: number;
  overdue: number;
}

export default function DashboardPage() {
  const [metrics] = useState<Metrics>({
    completed: 12,
    pending: 5,
    overdue: 3,
  });

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-6">
          {/* Title */}
          <div>
            <h1 className="text-3xl font-semibold text-secondary">Dashboard</h1>
            <p className="text-gray mt-2">Overview of your projects & tasks</p>
          </div>

          {/* Key Metrics Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <StatCard
              title="Completed Tasks"
              value={metrics.completed}
              color="bg-success"
            />
            <StatCard
              title="Pending Tasks"
              value={metrics.pending}
              color="bg-yellow"
            />
            <StatCard
              title="Overdue Tasks"
              value={metrics.overdue}
              color="bg-red-500"
            />
          </div>

          {/* Quick Access Links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuickAccessCard
              title="Projects"
              link="/projects"
              description="View & manage projects"
            />
            <QuickAccessCard
              title="Tasks"
              link="/tasks"
              description="Track & complete tasks"
            />
            <QuickAccessCard
              title="Calendar"
              link="/calendar"
              description="Check deadlines"
            />
          </div>

          {/* Recent Projects & Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <RecentProjects />
            <RecentTasks />
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
