import React from "react";
import {
  Users,
  Package,
  ShoppingCart,
  DollarSign,
  Clock,
  CheckCircle,
  Globe,
  CalendarCheck,
  TrendingUp,
} from "lucide-react";

export default function SummarySection() {
  const summaryItems = [
    {
      icon: <Package className="text-blue-400" />,
      label: "Total Menu Items",
      value: 120,
    },
    {
      icon: <Clock className="text-yellow-500" />,
      label: "Pending Orders",
      value: 4,
    },
    {
      icon: <CheckCircle className="text-green-600" />,
      label: "Completed Orders",
      value: 145,
    },
    {
      icon: <Globe className="text-blue-400" />,
      label: "Website Visits",
      value: 240,
    },
    {
      icon: <CalendarCheck className="text-purple-500" />,
      label: "Reservations Today",
      value: 27,
    },
    {
      icon: <TrendingUp className="text-pink-500" />,
      label: "Average Order Value",
      value: "$23",
    },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Summary</h2>
      <div className="space-y-4">
        {summaryItems.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-100 rounded-full">{item.icon}</div>
              <span className="text-gray-700">{item.label}</span>
            </div>
            <span className="text-gray-900 font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
