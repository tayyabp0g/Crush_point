import React, { useState, useEffect, useRef } from "react";
import dashlogo from "../../assets/images/dashlogo.png";
import { menuItems } from "../../data";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBox } from "react-icons/fa";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("Dashboard"); // ya default route
  const [openMenu, setOpenMenu] = useState(null);
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const menuRefs = useRef([]); // For main menu
  const subMenuRef = useRef(null); // For submenu

  

  useEffect(() => {
    setTimeout(() => {
      
    }, 10); // Delay for DOM update
  
  }, [activeMenu, activeSubMenu, openMenu]);

  useEffect(() => {
    if (
      location.pathname.startsWith("/add-product")
      || location.pathname.startsWith("/product-ledger")
    ) {
      setActiveMenu("Products");
      setOpenMenu("Products");
      setActiveSubMenu("Add Product");
    } else if (location.pathname === "/manage-product") {
      setActiveMenu("Products");
      setOpenMenu("Products");
      setActiveSubMenu("Manage Product");
    } else if (location.pathname === "/dashboard") {
      setActiveMenu("Dashboard");
      setOpenMenu(null);
      setActiveSubMenu("");
    } else if (location.pathname === "/accounts") {
      setActiveMenu("Accounts");
      setOpenMenu(null);
      // Do not setActiveSubMenu here, let the click handler control it
    } else if (location.pathname === "/sales") {
      setActiveMenu("Sales");
      setOpenMenu(null);
      setActiveSubMenu("");
    } else if (location.pathname === "/vouchers") {
      setActiveMenu("Vouchers");
      setOpenMenu(null);
      setActiveSubMenu("");
    } else if (location.pathname === "/reports") {
      setActiveMenu("Reports");
      setOpenMenu(null);
      setActiveSubMenu("");
    } else if (location.pathname === "/settings") {
      setActiveMenu("Settings");
      setOpenMenu(null);
      setActiveSubMenu("");
    } else if (location.pathname === "/change-password") {
      setActiveMenu("Settings");
      setOpenMenu("Settings");
      setActiveSubMenu("Change Password");
    } else if (location.pathname === "/logout") {
      setActiveMenu("Logout");
      setOpenMenu(null);
      setActiveSubMenu("");
    } else {
      setActiveSubMenu("");
      setOpenMenu(null);
    }
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 h-screen w-60 min-w-[200px] bg-white border-r z-30 overflow-y-auto">
      {/* Logo */}
      <img src={dashlogo} alt="Dashboard Logo" className="h-28 mx-auto" />
      {/* Menu */}
      <nav className="flex flex-col gap-1 md:gap-2 w-full relative">
        {/* Animated Indicator */}
        {/* Remove the blue box */}
        <ul className="list-none p-0 m-0 mt-4">
          {menuItems.map((item, idx) => {
            // Determine if this parent should be highlighted
            const isProductsActive = (item.label === "Products" && (activeMenu === "Products" || (openMenu === "Products" && activeSubMenu)));
            const isSettingsActive = (item.label === "Settings" && (activeMenu === "Settings" || (openMenu === "Settings" && activeSubMenu)));
            const isParentActive = isProductsActive || isSettingsActive;

            if (item.label === "Products") {
              return (
                <li key={item.label} ref={el => menuRefs.current[idx] = el}>
                  <button
                    className={`flex items-center w-full px-4 py-2 rounded transition-all duration-200 
                      ${isProductsActive ? "bg-blue-600 text-white" : "hover:bg-blue-100"}
                    `}
                    onClick={() => {
                      setOpenMenu(openMenu === "Products" ? null : "Products");
                      setActiveMenu("Products");
                      setActiveSubMenu("");
                    }}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                    <svg className={`ml-auto transition-transform ${openMenu === 'Products' ? 'rotate-180' : ''}`} width="16" height="16" fill="none" stroke="#fff">
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
              );
            } else if (item.label === "Settings") {
              return (
                <li key={item.label} ref={el => menuRefs.current[idx] = el}>
                  <button
                    className={`flex items-center w-full px-4 py-2 rounded transition-all duration-200 
                      ${isSettingsActive ? "bg-blue-600 text-white" : "hover:bg-blue-100"}
                    `}
                    onClick={() => {
                      setOpenMenu(openMenu === "Settings" ? null : "Settings");
                      setActiveMenu("Settings");
                      setActiveSubMenu("");
                    }}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                    <svg className={`ml-auto transition-transform ${openMenu === 'Settings' ? 'rotate-180' : ''}`} width="16" height="16" fill="none" stroke="#fff">
                      <path d="M4 6l4 4 4-4"/>
                    </svg>
                  </button>
                  {/* Submenu for Settings */}
                  {openMenu === "Settings" && item.submenu && (
                    <ul className="ml-8 mt-1 space-y-1">
                      {item.submenu.map((sub, subIdx) => (
                        <li key={sub.label}>
                          <button
                            className={`w-full text-left px-2 py-1 rounded text-sm flex items-center justify-between transition
                              ${activeSubMenu === sub.label ? "bg-blue-100 text-blue-700" : "hover:bg-blue-50"}
                            `}
                            onClick={() => {
                              setActiveMenu("Settings");
                              setActiveSubMenu(sub.label);
                              navigate("/change-password");
                            }}
                          >
                            {sub.label}
                            {activeSubMenu === sub.label && (
                              <svg className="ml-2" width="16" height="16" fill="none" stroke="#388bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 8h6M8 5l3 3-3 3"/>
                              </svg>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            } else if (item.label === "Accounts") {
              return (
                <li key={item.label} ref={el => menuRefs.current[idx] = el}>
                  <button
                    className={`flex items-center w-full px-4 py-2 rounded transition-all duration-200 
                    ${activeMenu === item.label && !activeSubMenu ? "bg-blue-600 text-white" : "hover:bg-blue-100"}
                  `}
                    onClick={() => {
                      setActiveSubMenu("");
                      setActiveMenu("Accounts");
                      navigate("/accounts");
                    }}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </button>
                </li>
              );
            } else {
              return (
                <li key={item.label} ref={el => menuRefs.current[idx] = el}>
                  <button
                    className={`flex items-center w-full px-4 py-2 rounded transition-all duration-200 
                      ${activeMenu === item.label && !activeSubMenu ? "bg-blue-600 text-white" : "hover:bg-blue-100"}
                    `}
                    onClick={() => {
                      setActiveSubMenu("");
                      setActiveMenu(item.label);
                      if (item.label === "Dashboard") navigate("/dashboard");
                      if (item.label === "Accounts") navigate("/accounts");
                      if (item.label === "Sales") navigate("/sales");
                      if (item.label === "Vouchers") navigate("/vouchers");
                      if (item.label === "Reports") navigate("/reports");
                      if (item.label === "Logout") {
                        localStorage.clear();
                        sessionStorage.clear();
                        setActiveMenu("Logout");
                        navigate("/login");
                      }
                    }}
                  >
                    {item.icon}
                    <span className="ml-2">{item.label}</span>
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </div>
  );
}
