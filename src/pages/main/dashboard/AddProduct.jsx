import React, { useState, useEffect } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topbar from "../../../components/Topbar/Topbar";
import { useNavigate, useLocation } from "react-router-dom";

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

const initialRows = [
  { sr: 1, name: "Liquid Petroleum Gas", code: "LPG", salePrice: 0, unit: 0 },
  { sr: 2, name: "Bajar 3\"", code: "LDO", salePrice: 0, unit: 0 },
  { sr: 2, name: "Bajar 2\"", code: "LDO", salePrice: 0, unit: 0 },
  { sr: 2, name: "Khaka", code: "LDO", salePrice: 0, unit: 0 },
  { sr: 2, name: "Bajar 2\"", code: "LDO", salePrice: 0, unit: 0 },
  { sr: 2, name: "Pathar", code: "LDO", salePrice: 0, unit: 0 },
  { sr: 2, name: "Khaka", code: "LDO", salePrice: 0, unit: 0 },
  { sr: 2, name: "Light Diesel Oil", code: "LDO", salePrice: 0, unit: 0 },
  { sr: 2, name: "Khaka", code: "LDO", salePrice: 0, unit: 0 },
];

export default function AddProduct() {
  const [language, setLanguage] = useState("en");
  const [rows, setRows] = useState(initialRows);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.newProduct) {
      setRows((prevRows) => [
        ...prevRows,
        { sr: prevRows.length + 1, ...location.state.newProduct },
      ]);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="flex h-screen bg-[#f6f8fc]">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-[#f6f8fc] min-h-screen w-full">
        <main className="p-6 w-full">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold font-nunito">Products</h1>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition"
              onClick={() => navigate("/add-product/new")}
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
                  <tr key={idx} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{row.sr}</td>
                    <td className="px-4 py-2">{row.name}</td>
                    <td className="px-4 py-2">{row.code}</td>
                    <td className="px-4 py-2">
                      {typeof row.salePrice === "number" ? row.salePrice.toFixed(6) : row.salePrice}
                    </td>
                    <td className="px-4 py-2">
                      {typeof row.unit === "number" ? row.unit.toFixed(6) : row.unit}
                    </td>
                    <td className="px-4 py-2 space-x-2">
                      <span className="cursor-pointer text-gray-500 hover:text-blue-600">✏️</span>
                      <span className="cursor-pointer text-gray-500 hover:text-blue-600">📋</span>
                      <span className="cursor-pointer text-gray-500 hover:text-red-500">🗑️</span>
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