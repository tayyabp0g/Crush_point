import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Topbar from "../Topbar/Topbar";

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

export default function Layout({ children }) {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex h-screen bg-[#f6f8fc]">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-[#f6f8fc] min-h-screen w-full">
        <main className="p-6 w-full">
          {children}
        </main>
      </div>
    </div>
  );
} 