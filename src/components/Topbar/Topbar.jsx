import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function Topbar({ user, language, onLanguageChange }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  // Only English language
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
  ];
  const selectedLang = languages.find((l) => l.code === language);

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <div className="fixed top-0 left-60 right-0 h-16 bg-white border-b z-40">
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center space-x-1 ml-4">
          {/* Hamburger removed */}
          <div className="relative w-[500px]">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl">
              <FiSearch />
            </span>
            <input
              type="text"
              placeholder="Search"
              className="pl-11 pr-4 py-2 w-full bg-gray-100 border border-gray-300 focus:border-blue-400 focus:outline-none transition rounded-full text-lg"
            />
          </div>
        </div>
        {/* Language + User Info ek hi flex row me */}
        <div className="flex items-center space-x-4">
          {/* Flag + Dropdown */}
          <div className="flex items-center">
            <span className="mr-2 text-xl">{selectedLang?.flag}</span>
            <select
              value={language}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="border rounded px-2 py-1 bg-white"
              disabled
            >
              {languages.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center space-x-4 relative">
            {/* Avatar */}
            <div className="flex items-center space-x-3">
              <img
                src={user.avatar}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-xl">{user.name}</span>
                <span className="text-sm text-gray-500">{user.role}</span>
              </div>
            </div>
            {/* Down Arrow Button */}
            <button
              className="ml-8 w-8 h-8 flex items-center justify-center rounded-full border border-gray-400 relative"
              onClick={() => setShowMenu((prev) => !prev)}
            >
              <FaChevronDown className="text-lg text-gray-700" />
            </button>
            {showMenu && (
              <div className="absolute right-0 top-14 bg-white border rounded shadow-md py-2 z-50 min-w-[120px]">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
