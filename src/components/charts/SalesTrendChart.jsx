import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
} from "recharts";

const salesData = [
  { name: "Mon", sales: 5000 },
  { name: "Tue", sales: 7000 },
  { name: "Wed", sales: 6000 },
  { name: "Thu", sales: 8000 },
  { name: "Fri", sales: 9000 },
  { name: "Sat", sales: 12000 },
  { name: "Sun", sales: 15000 },
];

export default function ActiveUsersChart() {
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-4">Sales Trend</h3>

      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="name" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#6366f1"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
