import { recentProjects } from "@/config/data";

export default function RecentProjects() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
      <ul className="mt-4 space-y-3">
        {recentProjects.map((project, i) => (
          <li key={i} className="flex justify-between text-gray-700">
            <span>{project.name}</span>
            <span className="text-sm text-gray-500">{project.deadline}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
