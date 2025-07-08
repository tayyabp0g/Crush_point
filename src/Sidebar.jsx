import React from "react";
import { FaTachometerAlt, FaBox, FaHeart, FaComments, FaListUl, FaFileAlt, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";
import logo from "./images/logo.png";

const menuItems = [
  { label: "Dashboard", icon: <FaTachometerAlt />, active: true },
  { label: "Products", icon: <FaBox /> },
  { label: "Accounts", icon: <FaHeart /> },
  { label: "Sales", icon: <FaComments /> },
  { label: "Vouchers", icon: <FaListUl /> },
  { label: "Reports", icon: <FaFileAlt /> },
  { label: "Expense", icon: <FaCalendarAlt /> },
];

const bottomItems = [
  { label: "Settings", icon: <FaCog /> },
  { label: "Logout", icon: <FaSignOutAlt /> },
];

export default function Sidebar() {
  return (
    <div className="flex flex-col bg-white w-60 h-screen border-r items-center">
      {/* Logo */}
      <img src={logo} alt="Logo" className="h-28" />
      {/* Menu */}
      <nav className="flex flex-col gap-1 w-full">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-6 py-2 text-base font-medium w-full rounded-lg transition
              ${item.active ? "bg-blue-500 text-white" : "text-gray-800 hover:bg-blue-100"}
            `}
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
      {/* Bottom Options */}
      <div className="flex flex-col gap-1 w-full mt-auto mb-12">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="flex items-center gap-3 px-6 py-2 text-base font-medium text-gray-800 hover:bg-blue-100 w-full rounded-lg transition"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}