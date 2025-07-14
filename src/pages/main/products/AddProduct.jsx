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

// Add mock ledger data to each row for demonstration
const mockLedger = [
  { date: "2024-06-01", customer: "Ali", outQty: 10, balance: 1000 },
  { date: "2024-06-05", customer: "Ahmed", outQty: 5, balance: 500 },
  { date: "2024-06-10", customer: "Sara", outQty: 8, balance: 800 },
  { date: "2024-07-01", customer: "Bilal", outQty: 12, balance: 1200 },
];

export default function AddProduct() {
  const [language, setLanguage] = useState("en");
  // Load from localStorage or use initialRows
  const [rows, setRows] = useState(() => {
    const saved = localStorage.getItem(LOCAL_KEY);
    const loaded = saved ? JSON.parse(saved) : initialRows;
    // Ensure every product has a ledger array
    return loaded.map(row => ({
      ...row,
      ledger: Array.isArray(row.ledger) && row.ledger.length > 0
        ? row.ledger
        : [{
            date: new Date().toISOString().slice(0, 10),
            customer: "First Sale",
            outQty: 0,
            balance: 0,
          }]
    }));
  });
  const navigate = useNavigate();
  const location = useLocation();
  const justAddedRef = useRef(false); // <--- add this line

  // Save to localStorage whenever rows change
  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(rows));
  }, [rows]);

  useEffect(() => {
    if (location.state && location.state.newProduct) {
      // Always add ledger array if not present
      const newProduct = {
        ...location.state.newProduct,
        ledger: Array.isArray(location.state.newProduct.ledger) && location.state.newProduct.ledger.length > 0
          ? location.state.newProduct.ledger
          : [{
              date: new Date().toISOString().slice(0, 10),
              customer: "First Sale",
              outQty: 0,
              balance: 0,
            }]
      };
      if (
        newProduct.id &&
        !rows.some(row => row.id === newProduct.id) &&
        !justAddedRef.current
      ) {
        setRows((prevRows) => [
          ...prevRows,
          { sr: prevRows.length + 1, ...newProduct },
        ]);
        justAddedRef.current = true;
      }
      window.history.replaceState({}, document.title);
      navigate("/add-product", { replace: true });
      return;
    } else if (location.state && location.state.updatedProduct !== undefined) {
      setRows((prevRows) => {
        const updatedRows = [...prevRows];
        // Preserve ledger array if not present in updatedProduct
        updatedRows[location.state.index] = {
          ...updatedRows[location.state.index],
          ...location.state.updatedProduct,
          ledger: Array.isArray(location.state.updatedProduct.ledger) && location.state.updatedProduct.ledger.length > 0
            ? location.state.updatedProduct.ledger
            : (updatedRows[location.state.index].ledger || [{
                date: new Date().toISOString().slice(0, 10),
                customer: "First Sale",
                outQty: 0,
                balance: 0,
              }])
        };
        return updatedRows;
      });
      window.history.replaceState({}, document.title);
      navigate("/add-product", { replace: true });
      return;
    }
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
                      <span
                        className="cursor-pointer text-gray-500 hover:text-blue-600"
                        onClick={() => {
                          // Find all rows with same name and code
                          const matchingRows = rows.filter(
                            r => r.name === row.name && r.code === row.code
                          );
                          // Combine all their ledger arrays
                          const combinedLedger = matchingRows.flatMap(r => Array.isArray(r.ledger) ? r.ledger : []);
                          navigate(`/product-ledger/${row.id}`, {
                            state: { product: row, ledger: combinedLedger }
                          });
                        }}
                      >
                        📋
                      </span>
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