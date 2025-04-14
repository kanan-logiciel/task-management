"use client";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface TaskProgressChartProps {
  data: { name: string; value: number; fill: string }[];
}

export default function TaskProgressChart({ data }: TaskProgressChartProps) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="flex flex-col items-center bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">
        Task Progress Overview
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius="65%"
            outerRadius="90%"
            paddingAngle={3}
            dataKey="value"
            label={({ value }) => `${Math.round((value / total) * 100)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
