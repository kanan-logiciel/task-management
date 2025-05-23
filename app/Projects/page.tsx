"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../layouts/dashLayout";
import Button from "../core-ui/Buttons";

export default function CreateProjectPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    language: "",
    dueDate: "",
    status: "pending",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      router.push("/dashboard");
    } else {
      alert("Failed to create project.");
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen p-6 bg-lightGray flex items-center justify-center">
        <div className="card w-full max-w-xl">
          <h1 className="card-title text-2xl mb-1">Create New Project</h1>
          <p className="card-subtitle text-sm mb-6">
            Fill the form to add a new project
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Project Name
              </label>
              <input
                name="name"
                id="name"
                type="text"
                placeholder="Enter project name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="language"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Language
              </label>
              <input
                name="language"
                id="language"
                type="text"
                placeholder="e.g. JavaScript"
                value={formData.language}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="dueDate"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Due Date
              </label>
              <input
                name="dueDate"
                id="dueDate"
                type="date"
                value={formData.dueDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label
                htmlFor="status"
                className="block text-sm font-medium text-secondary mb-1"
              >
                Status
              </label>
              <select
                name="status"
                id="status"
                value={formData.status}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-secondary focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="pending">Pending</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <Button type="submit" variant="primary">
              Create Project
            </Button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}
