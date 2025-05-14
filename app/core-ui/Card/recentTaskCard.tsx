import { recentTasks } from "@/config/data";

export default function RecentTasks() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900">Recent Tasks</h3>
      <ul className="mt-4 space-y-3">
        {recentTasks.map((task, i) => (
          <li key={i} className="flex justify-between text-gray-700">
            <span>{task.name}</span>
            <span
              className={`text-sm font-semibold ${
                task.status === "Completed"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {task.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
