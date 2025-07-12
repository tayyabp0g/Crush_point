import React, { useState, useEffect, useRef } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topbar from "../../../components/Topbar/Topbar";
import { useNavigate, useLocation } from "react-router-dom";

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

const initialRows = []; // <-- sirf yeh line change karein

const LOCAL_KEY = "manage_product_rows";

export default function AddProduct() {
  const [language, setLanguage] = useState("en");
  // Load from localStorage or use initialRows
  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    return saved ? JSON.parse(saved) : initialRows;
  });
  const navigate = useNavigate();
  const location = useLocation();
  const justAddedRef = useRef(false); // <--- add this line

  // Save to localStorage whenever rows change
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(rows));
  }, [rows]);

  useEffect(() => {
    // Prevent double add/edit due to React Strict Mode
    if (location.state && location.state.newProduct) {
      if (
        location.state.newProduct.id &&
        !rows.some(row => row.id === location.state.newProduct.id) &&
        !justAddedRef.current // <--- only add if not just added
      ) {
        setRows((prevRows) => [
          ...prevRows,
          { sr: prevRows.length + 1, ...location.state.newProduct },
        ]);
        justAddedRef.current = true; // <--- mark as just added
      }
      window.history.replaceState({}, document.title);
      navigate("/add-product", { replace: true });
      return;
    } else if (location.state && location.state.updatedProduct !== undefined) {
      setRows((prevRows) => {
        const updatedRows = [...prevRows];
        updatedRows[location.state.index] = {
          ...updatedRows[location.state.index],
          ...location.state.updatedProduct,
        };
        return updatedRows;
      });
      window.history.replaceState({}, document.title);
      navigate("/add-product", { replace: true }); // clear state after update
      return;
    }
    // Reset justAddedRef after navigation
    justAddedRef.current = false;
  }, [location.state, navigate]);

  return (
    <div className="flex h-screen bg-[#f6f8fc]">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-[#f6f8fc] min-h-screen w-full">
        <main className="p-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold font-nunito">Manage Product</h1>
            <button
              onClick={() => navigate("/add-product/new")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add New Product
            </button>
          </div>
          <div className="bg-white rounded-xl shadow p-4 w-full overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2">SR</th>
                  <th className="px-4 py-2">NAME</th>
                  <th className="px-4 py-2">Code</th>
                  <th className="px-4 py-2">Sale Price</th>
                  <th className="px-4 py-2">Unit</th>
                  <th className="px-4 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, idx) => (
                  <tr key={row.id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{idx + 1}</td>
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.code}</td>
                    <td className="px-4 py-2">
                      {typeof row.salePrice === "number" ? row.salePrice.toFixed(6) : row.salePrice}
                    </td>
                    <td className="px-4 py-2">
                      {typeof row.unit === "number" ? row.unit.toFixed(6) : row.unit}
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      <span
                        className="cursor-pointer text-gray-500 hover:text-blue-600"
                        onClick={() => navigate("/add-product/edit", { state: { product: row, id: row.id, index: idx } })}
                      >
                        ✏️
                      </span>
                      <span className="cursor-pointer text-gray-500 hover:text-blue-600">📋</span>
                      <span
                        className="cursor-pointer text-gray-500 hover:text-red-500"
                        onClick={() => {
                          setRows((prevRows) => prevRows.filter((_, i) => i !== idx));
                        }}
                      >
                        🗑️
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}