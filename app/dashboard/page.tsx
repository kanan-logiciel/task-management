"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import ProtectedRoute from "../protected-route/protectedRoutes";
import DashboardLayout from "../layouts/dashLayout";
import QuickAccessCard from "../core-ui/Card/quickAccessCard";
import RecentProjects from "../core-ui/Card/recentCard";
import RecentTasks from "../core-ui/Card/recentTaskCard";
import TaskProgressChart from "../core-ui/Chart";
import { FaTasks, FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";

export default function DashboardPage() {
  const taskData = useMemo(() => {
    const totalTasks = Math.floor(Math.random() * 200) + 50;
    const completed = Math.floor(Math.random() * totalTasks);
    const inProgress = Math.floor(Math.random() * (totalTasks - completed));
    const toDo = totalTasks - completed - inProgress;

    return [
      {
        name: "Completed",
        value: completed,
        fill: "rgb(var(--color-success))",
      },
      { name: "To-Do", value: toDo, fill: "rgb(var(--color-yellow))" },
      {
        name: "In Progress",
        value: inProgress,
        fill: "rgb(var(--color-primary))",
      },
    ];
  }, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="space-y-8 p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {taskData.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TaskProgressChart data={[task]} />
                <p className="mt-3 text-md text-secondary flex justify-center items-center">
                  <span className="font-medium">{task.value} tasks</span>
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <QuickAccessCard
              title="Projects"
              link="/projects"
              description="View & manage projects"
              icon={<FaProjectDiagram className="text-primary text-3xl" />}
            />
            <QuickAccessCard
              title="Tasks"
              link="/tasks"
              description="Track & complete tasks"
              icon={<FaTasks className="text-green-500 text-3xl" />}
            />
            <QuickAccessCard
              title="Calendar"
              link="/calendar"
              description="Check deadlines"
              icon={<FaCalendarAlt className="text-yellow text-3xl" />}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            <RecentProjects />
            <RecentTasks />
          </motion.div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
