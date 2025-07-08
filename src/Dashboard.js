import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar.jsx";  
import { FaTachometerAlt, FaUser, FaFileAlt, FaSignOutAlt } from "react-icons/fa";
import logo from "./images/logo.png";

const menuItems = [
  { label: "Dashboard", link: "/dashboard", icon: <FaTachometerAlt />, active: true },
  { label: "Products", link: "/products", icon: <FaFileAlt /> },
  { label: "Accounts", link: "/accounts", icon: <FaUser /> },
  // ...baqi menu items
  { label: "Logout", link: "/logout", icon: <FaSignOutAlt /> }
];

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg"
};

function Dashboard() {
  const [language, setLanguage] = useState("en"); // default English

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar
          user={user}
          language={language}
          onLanguageChange={setLanguage}
        />
        <main className="flex-1 p-6">
          {/* Yahan dashboard ka main content aayega */}
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          {/* ... */}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
