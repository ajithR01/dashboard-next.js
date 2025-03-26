import React from "react";
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

export default function OrderStatusChart({ orderStatusData }) {
  const COLORS = ["#FFBB28", "#00C49F", "#FF4444"];

  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <h3 className="text-lg font-semibold mb-4">Order Status</h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={orderStatusData}
            dataKey="value"
            nameKey="name"
            outerRadius={80}
            fill="#8884d8"
          >
            {orderStatusData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
