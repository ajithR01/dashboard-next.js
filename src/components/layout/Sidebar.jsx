"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  FaChartBar,
  FaClipboardList,
  FaUtensils,
  FaUsers,
  FaBox,
  FaBullhorn,
  FaConciergeBell,
  FaTruck,
  FaCog,
} from "react-icons/fa";

const sections = [
  {
    name: "Overview",
    path: "/",
    icon: <FaChartBar className="h-5 w-5" />,
    enabled: true,
  },
  {
    name: "Orders",
    path: "/orders",
    icon: <FaClipboardList className="h-5 w-5" />,
    enabled: false,
  },
  {
    name: "Menu",
    path: "/menu",
    icon: <FaUtensils className="h-5 w-5" />,
    enabled: false,
  },
  {
    name: "Customers",
    path: "/customers",
    icon: <FaUsers className="h-5 w-5" />,
    enabled: false,
  },
  {
    name: "Inventory",
    path: "/inventory",
    icon: <FaBox className="h-5 w-5" />,
    enabled: false,
  },
  {
    name: "Promotions",
    path: "/promotions",
    icon: <FaBullhorn className="h-5 w-5" />,
    enabled: false,
  },
  {
    name: "Reservations",
    path: "/reservations",
    icon: <FaConciergeBell className="h-5 w-5" />,
    enabled: false,
  },
  {
    name: "Delivery",
    path: "/delivery",
    icon: <FaTruck className="h-5 w-5" />,
    enabled: false,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: <FaCog className="h-5 w-5" />,
    enabled: false,
  },
];

export default function Sidebar({ open, setOpen }) {
  const pathname = usePathname(); // Get current route

  return (
    <div
      className={`fixed lg:relative top-0 left-0 h-full w-64 bg-white shadow-md transition-transform 
      ${open ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0`}
    >
      <div className="flex items-center justify-between p-4 lg:hidden">
        <Typography variant="h5" color="blue-gray">
          Pasta & Co.
        </Typography>
        <button onClick={() => setOpen(false)} className="text-gray-600">
          ✖
        </button>
      </div>

      {/* Sidebar Menu */}
      <Card className="h-[calc(100vh-2rem)] w-full p-4">
        <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Pasta & Co.
          </Typography>
        </div>
        <List className="space-y-1">
          {sections.map((section, index) => (
            <Link
              key={index}
              href={section.enabled ? section.path : "#"}
              passHref
            >
              <ListItem
                className={`flex items-center gap-x-4 rounded-lg p-3 transition 
                  ${
                    pathname === section.path
                      ? "bg-blue-500 text-white"
                      : section.enabled
                      ? "hover:bg-gray-200 cursor-pointer"
                      : "cursor-not-allowed opacity-50"
                  }`}
                onClick={(e) => {
                  if (!section.enabled) e.preventDefault(); // Prevent navigation for disabled links
                }}
              >
                <ListItemPrefix>{section.icon}</ListItemPrefix>
                {section.name}
              </ListItem>
            </Link>
          ))}
        </List>
      </Card>
    </div>
  );
}
