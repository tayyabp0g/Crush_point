import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topbar from "../../../components/Topbar/Topbar";

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

export default function Accounts() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="flex h-screen bg-[#f6f8fc]">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-[#f6f8fc] min-h-screen w-full">
        <main className="p-8 w-full">
          <h1 className="text-3xl font-bold font-nunito mb-8">Accounts Page</h1>
          {/* Yahan apna accounts ka content daalain */}
        </main>
      </div>
    </div>
  );
} 