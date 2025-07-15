import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topbar from "../../../components/Topbar/Topbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

export default function ChangePassword() {
  const [language, setLanguage] = useState("en");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="flex h-screen bg-[#f6f8fc]">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-[#f6f8fc] min-h-screen w-full">
        <main className="p-8 w-full">
          <h1 className="text-3xl font-bold font-nunito mb-8">Change Password</h1>
          <div className="flex justify-center items-center min-h-[60vh] w-full">
            <form className="bg-white rounded-2xl shadow p-8 w-full max-w-md">
              <div className="mb-6">
                <label className="block font-semibold mb-2">Old Password :</label>
                <div className="relative">
                  <input
                    type={showOld ? "text" : "password"}
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 pr-10"
                    placeholder="Enter your old Password"
                    value={oldPassword}
                    onChange={e => setOldPassword(e.target.value)}
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowOld(v => !v)}
                  >
                    {showOld ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="mb-6">
                <label className="block font-semibold mb-2">New Password:</label>
                <div className="relative">
                  <input
                    type={showNew ? "text" : "password"}
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 pr-10"
                    placeholder="Enter your New Password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowNew(v => !v)}
                  >
                    {showNew ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <div className="mb-8">
                <label className="block font-semibold mb-2">Confirm Password:</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200 pr-10"
                    placeholder="Confirm your Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowConfirm(v => !v)}
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition">Update</button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
} 