import React from "react";

export default function StatCard({ icon, title, value }) {
  return (
    <div className="p-6 bg-white shadow-md rounded-md flex items-center space-x-4 text-black">
      <div className="text-blue-500">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-700">{value}</p>
      </div>
    </div>
  );
}
