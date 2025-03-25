import React, { useState } from "react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  FaUser,
  FaCog,
  FaInbox,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";

const profileMenuItems = [
  { label: "My Profile", icon: FaUser },
  { label: "Edit Profile", icon: FaCog },
  { label: "Inbox", icon: FaInbox },
  { label: "Help", icon: FaQuestionCircle },
  { label: "Sign Out", icon: FaSignOutAlt, className: "text-red-500" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-white shadow-md px-6 py-3 w-full">
      <Typography as="a" href="#" className="text-lg font-semibold">
        {/* My Dashboard */}
      </Typography>

      {/* Right Side - Profile Menu */}
      <div className="relative">
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              className="flex items-center gap-2 text-gray-700"
            >
              <FaUserCircle className="h-6 w-6 text-gray-700" />
            </Button>
          </MenuHandler>
          <MenuList className="p-2 w-48">
            {profileMenuItems.map(({ label, icon, className }, index) => (
              <MenuItem
                key={index}
                className={`flex items-center gap-3 p-2 hover:bg-gray-100 ${
                  className || ""
                }`}
              >
                {React.createElement(icon, {
                  className: "h-4 w-4 text-gray-700",
                })}
                <Typography as="span" className="text-gray-700">
                  {label}
                </Typography>
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </div>
    </nav>
  );
}
