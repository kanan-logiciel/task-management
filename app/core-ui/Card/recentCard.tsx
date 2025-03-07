const RecentProjects = () => {
  const projects = [
    { name: "Project Alpha", deadline: "March 15, 2025" },
    { name: "Project Beta", deadline: "April 10, 2025" },
  ];
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold text-gray-900">Recent Projects</h3>
      <ul className="mt-4 space-y-3">
        {projects.map((project, index) => (
          <li key={index} className="flex justify-between text-gray-700">
            <span>{project.name}</span>
            <span className="text-sm text-gray-500">{project.deadline}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentProjects;
