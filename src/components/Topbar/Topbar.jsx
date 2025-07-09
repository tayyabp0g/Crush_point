import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

export default function Topbar({ user, language, onLanguageChange }) {
  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "ur", name: "Urdu", flag: "🇵🇰" },
    { code: "ar", name: "Arabic", flag: "🇸🇦" },
    { code: "fr", name: "French", flag: "🇫🇷" },
    // aur bhi add kar sakte ho
  ];
  const selectedLang = languages.find(l => l.code === language);

  return (
    <div className="flex items-center justify-between p-4 bg-white">
      {/* Left side: menu button, logo, etc. */}
      <div className="flex items-center space-x-2">
        <button className="text-gray-500 focus:outline-none">
          <svg width="14" height="14" fill="none" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        {/* Yahan aur left side ka content aa sakta hai */}
      </div>
      {/* Right side: search bar */}
      <div className="relative w-[500px]">
        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl">
          <FaSearch />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="pl-12 pr-4 py-3 w-full bg-gray-100 border border-gray-300 focus:border-blue-400 focus:outline-none transition rounded-full text-lg"
        />
      </div>
      {/* Language + User Info ek hi flex row me */}
      <div className="flex items-center space-x-4">
        {/* Flag + Dropdown */}
        <div className="flex items-center">
          <span className="mr-2 text-xl">{selectedLang?.flag}</span>
          <select
            value={language}
            onChange={e => onLanguageChange(e.target.value)}
            className="border rounded px-2 py-1 bg-white"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center space-x-4">
          {/* Avatar */}
          <div className="flex items-center space-x-3">
            <img src={user.avatar} alt="User" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col">
              <span className="font-semibold text-xl">{user.name}</span>
              <span className="text-sm text-gray-500">{user.role}</span>
            </div>
          </div>
          {/* Down Arrow Button */}
          <button className="ml-8 w-8 h-8 flex items-center justify-center rounded-full border border-gray-400">
            <FaChevronDown className="text-lg text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
}
