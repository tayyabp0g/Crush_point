import React, { useState, useEffect } from "react";
import dashlogo from "../../assets/images/dashlogo.png";
import { bottomItems, menuItems } from "../../data";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBox } from "react-icons/fa";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // ya default route
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [activeBottom, setActiveBottom] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.startsWith("/add-product")
    ) {
      setActiveMenu("Products");
      setOpenMenu("Products");
      setActiveSubMenu("Add Product");
      // setActiveBottom(""); // don't reset bottom
    } else if (location.pathname === "/manage-product") {
      setActiveMenu("Products");
      setOpenMenu("Products");
      setActiveSubMenu("Manage Product");
      // setActiveBottom(""); // don't reset bottom
    } else if (location.pathname === "/dashboard") {
      setActiveMenu("Dashboard");
      setOpenMenu(null);
      setActiveSubMenu("");
      // setActiveBottom(""); // don't reset bottom
    } else if (location.pathname === "/accounts") {
      setActiveMenu("Accounts");
      setOpenMenu(null);
      setActiveSubMenu("");
      // setActiveBottom(""); // don't reset bottom
    } else if (location.pathname === "/sales") {
      setActiveMenu("Sales");
      setOpenMenu(null);
      setActiveSubMenu("");
      // setActiveBottom(""); // don't reset bottom
    } else if (location.pathname === "/vouchers") {
      setActiveMenu("Vouchers");
      setOpenMenu(null);
      setActiveSubMenu("");
      // setActiveBottom(""); // don't reset bottom
    } else if (location.pathname === "/reports") {
      setActiveMenu("Reports");
      setOpenMenu(null);
      setActiveSubMenu("");
      // setActiveBottom(""); // don't reset bottom
    } else if (location.pathname === "/settings") {
      setActiveBottom("Settings");
      setActiveMenu("");
      setOpenMenu(null);
      setActiveSubMenu("");
    } else if (location.pathname === "/logout") {
      setActiveBottom("Logout");
      setActiveMenu("");
      setOpenMenu(null);
      setActiveSubMenu("");
    } else {
      setActiveSubMenu("");
      setOpenMenu(null);
      // setActiveBottom(""); // don't reset bottom
    }
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 h-screen w-60 min-w-[200px] bg-white border-r z-30 overflow-y-auto">
      {/* Logo */}
      <img src={dashlogo} alt="Dashboard Logo" className="h-28 mx-auto" />
      {/* Menu */}
      <nav className="flex flex-col gap-1 md:gap-2 w-full">
        <ul className="list-none p-0 m-0">
          {menuItems.map((item) =>
            item.label === "Products"
              ? (
                <li key={item.label}>
                  <button
                    className={`flex items-center w-full px-4 py-2 rounded transition 
            ${(activeMenu === "Products" || activeSubMenu) ? "bg-blue-600 text-white" : "hover:bg-blue-100"}
          `}
                    onClick={() => {
                      setOpenMenu(openMenu === "Products" ? null : "Products");
                      setActiveMenu("Products");
                      setActiveSubMenu("");
                      setActiveBottom(""); // clear bottom highlight
                    }}
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
                          className={`w-full text-left px-2 py-1 rounded text-sm flex items-center justify-between transition
                  ${activeSubMenu === "Add Product" ? "bg-blue-100 text-blue-700" : "hover:bg-blue-50"}
                `}
                          onClick={() => {
                            setActiveMenu("Products");
                            setActiveSubMenu("Add Product");
                            setActiveBottom(""); // clear bottom highlight
                            navigate("/add-product");
                          }}
                        >
                          Manage Product
                          {activeSubMenu === "Add Product" && (
                            <svg className="ml-2" width="16" height="16" fill="none" stroke="#388bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 8h6M8 5l3 3-3 3"/>
                            </svg>
                          )}
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
            ${activeMenu === item.label && !activeSubMenu ? "bg-blue-600 text-white" : "hover:bg-blue-100"}
          `}
                    onClick={() => {
                      setActiveMenu(item.label);
                      setActiveSubMenu("");
                      setActiveBottom(""); // clear bottom highlight
                      if (item.label === "Dashboard") navigate("/dashboard");
                      if (item.label === "Accounts") navigate("/accounts");
                      if (item.label === "Sales") navigate("/sales");
                      if (item.label === "Vouchers") navigate("/vouchers");
                      if (item.label === "Reports") navigate("/reports");
                    }}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </button>
                </li>
              )
          )}
        </ul>
      </nav>
      {/* Bottom Options */}
      <div className="flex flex-col gap-1 w-full">
        <ul className="mt-auto ml-0">
          {bottomItems.map((item) => (
            <li key={item.label}>
              <button
                className={`flex items-center w-full px-4 py-2 rounded transition ${activeBottom === item.label ? "bg-blue-600 text-white" : "hover:bg-blue-100"}`}
                onClick={() => {
                  setActiveBottom(item.label);
                  if (item.label === "Settings") navigate("/settings");
                  if (item.label === "Logout") {
                    // Clear stored data
                    localStorage.clear();
                    sessionStorage.clear();
                    // Navigate to login page
                    navigate("/login");
                  }
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
