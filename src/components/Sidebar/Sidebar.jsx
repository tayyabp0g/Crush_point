import React, { useState } from "react";
import dashlogo from "../../assets/images/dashlogo.png";
import { bottomItems, menuItems } from "../../data";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBox } from "react-icons/fa";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // ya default route
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-white border-r z-30">
      {/* Logo */}
      <img src={dashlogo} alt="Dashboard Logo" className="h-28" />
      {/* Menu */}
      <nav className="flex flex-col gap-1 w-full">
        {menuItems.map((item) =>
          item.label === "Products"
            ? (
              <li key={item.label}>
                <button
                  className="flex items-center w-full px-4 py-2 rounded transition hover:bg-blue-100"
                  onClick={() => setOpenMenu(openMenu === "Products" ? null : "Products")}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                  {/* Arrow */}
                  <svg className={`ml-auto transition-transform ${openMenu === 'Products' ? 'rotate-180' : ''}`} width="16" height="16" fill="none" stroke="#222">
                    <path d="M4 6l4 4 4-4"/>
                  </svg>
                </button>
                {/* Submenu */}
                {openMenu === "Products" && (
                  <ul className="ml-8 mt-1 space-y-1">
                    <li>
                      <button
                        className="w-full text-left px-2 py-1 rounded hover:bg-blue-50 text-sm"
                        onClick={() => navigate("/add-product")}
                      >
                        Add Product
                      </button>
                    </li>
                    <li>
                      <button
                        className="w-full text-left px-2 py-1 rounded hover:bg-blue-50 text-sm"
                        onClick={() => navigate("/manage-product")}
                      >
                        Manage Product
                      </button>
                    </li>
                  </ul>
                )}
              </li>
            )
            : (
              <li key={item.label}>
                <button
                  className={`flex items-center w-full px-4 py-2 rounded transition
                ${activeMenu === item.label ? "bg-blue-600 text-white" : "hover:bg-blue-100"}
              `}
                  onClick={() => {
                    setActiveMenu(item.label);
                    if (item.label === "Dashboard") navigate("/dashboard");
                  }}
                >
                  {item.icon}
                  <span className="ml-2">{item.label}</span>
                  {/* Agar Products ke liye arrow dikhana hai toh yahan condition lagao */}
                  {item.label === "Products" && (
                    <svg className="ml-auto" width="16" height="16" fill="none" stroke="#222">
                      <path d="M4 6l4 4 4-4"/>
                    </svg>
                  )}
                </button>
              </li>
            )
        )}
      </nav>
      {/* Bottom Options */}
      <div className="flex flex-col gap-1 w-full">
        <ul className="mt-auto ml-0"> {/* ml-4 se left shift ho jayega */}
          {bottomItems.map((item) => (
            <li key={item.label}>
              <button
                className="flex items-center w-full px-4 py-2 rounded transition hover:bg-blue-100"
                onClick={() => {
                  // Yahan apna navigation logic lagao
                }}
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
