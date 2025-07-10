import logo from "../../assets/images/logo.png";
import { bottomItems, menuItems } from "../../data";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [showProductOptions, setShowProductOptions] = useState(false);
  const [activeProductChild, setActiveProductChild] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (
      location.pathname === "/add-product" ||
      location.pathname === "/add-product/new" ||
      location.pathname === "/manage-product"
    ) {
      setActiveMenu("Products");
      setShowProductOptions(true);
    } else if (location.pathname === "/") {
      setActiveMenu("Dashboard");
      setShowProductOptions(false);
    } else {
      // Optionally handle other menu items if you add more routes
      setShowProductOptions(false);
    }
  }, [location.pathname]);

  // Arrow SVG for right side
  const ArrowIcon = () => (
    <svg className="ml-auto" width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 5l5 5-5 5" stroke="#388bff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // Set active child based on route
  useEffect(() => {
    if (location.pathname === "/add-product") {
      setActiveProductChild("Add Product");
    } else if (location.pathname === "/manage-product") {
      setActiveProductChild("Manage Product");
    } else {
      setActiveProductChild("");
    }
  }, [location.pathname]);

  return (
    <div className="fixed top-0 left-0 h-screen w-60 bg-white border-r z-30">
      {/* Logo */}
      <img
        src={logo}
        alt="Dashboard Logo"
        className="h-28 w-full object-contain scale-125 mx-auto mb-0"
      />
  
      <nav className="flex flex-col gap-4 w-full mt-0 p-0">
        {menuItems.map((item) => (
          <div key={item.label} className="w-full">
            <button
              className={`flex items-center gap-3 px-6 py-2 text-base font-medium w-full rounded-lg transition relative
                ${
                  activeMenu === item.label
                    ? "bg-blue-500 text-white"
                    : "text-gray-800 hover:bg-blue-100"
                }
              `}
              style={{ marginTop: 0, paddingTop: 0 }}
              onClick={() => {
                setActiveMenu(item.label);
                setShowProductOptions(item.label === "Products");
                if (item.label === "Dashboard") {
                  navigate("/");
                }
              }}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
              {activeMenu === item.label && item.label === "Products" && (
                <span className="absolute left-0 bottom-0 w-full h-1 bg-blue-500 rounded-b"></span>
              )}
            </button>
            {/* Show options ONLY if Products is active and this is the Products item */}
            {item.label === "Products" && activeMenu === "Products" && showProductOptions && (
              <div className="flex flex-col ml-12 mt-1 gap-2">
                <button
                  className={`rounded px-3 py-1 text-sm text-left transition flex items-center w-full ${activeProductChild === "Add Product" ? "bg-blue-100 text-blue-700" : "bg-white text-blue-700 hover:bg-blue-50"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProductChild("Add Product");
                    navigate("/add-product");
                  }}
                >
                  Add Product
                  {activeProductChild === "Add Product" && <ArrowIcon />}
                </button>
                <button
                  className={`rounded px-3 py-1 text-sm text-left transition flex items-center w-full ${activeProductChild === "Manage Product" ? "bg-blue-100 text-blue-700" : "bg-white text-blue-700 hover:bg-blue-50"}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveProductChild("Manage Product");
                    navigate("/manage-product");
                  }}
                >
                  Manage Product
                  {activeProductChild === "Manage Product" && <ArrowIcon />}
                </button>
              </div>
            )}
          </div>
        ))}
      </nav>
      {/* Bottom Options */}
      <div className="flex flex-col gap-1 w-full">
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
