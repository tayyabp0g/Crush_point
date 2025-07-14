import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topbar from "../../../components/Topbar/Topbar";
import { useNavigate, useLocation } from "react-router-dom";

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

export default function AddProductForm() {
  const [language, setLanguage] = useState("en");
  const location = useLocation();
  const navigate = useNavigate();
  const [form, setForm] = useState(location.state?.product || {
    code: "",
    unit: "",
    name: "",
    salePrice: "",
    description: "",
  });
  const [error, setError] = useState("");
  const index = location.state?.index;
  const isEdit = index !== undefined;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(""); // clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation: all fields required, trim for strings, and salePrice/unit must be valid numbers
    if (
      !form.code.trim() ||
      !form.unit.toString().trim() ||
      !form.name.trim() ||
      !form.salePrice.toString().trim() ||
      !form.description.trim() ||
      isNaN(Number(form.salePrice)) ||
      isNaN(Number(form.unit))
    ) {
      setError("Please fill all fields with valid values.");
      return;
    }
    if (index !== undefined) {
      // Edit mode
      navigate("/add-product", { state: { updatedProduct: form, index } });
    } else {
      // Add mode
      navigate("/add-product", {
        state: {
          newProduct: {
            id: Date.now() + Math.random(), // unique id
            code: form.code,
            unit: Number(form.unit),
            name: form.name,
            salePrice: Number(form.salePrice),
            description: form.description,
          },
        },
      });
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // index zaroor bhejein
    navigate("/add-product", { state: { updatedProduct: form, index: location.state?.index } });
  };

  return (
    <div className="flex h-screen bg-[#f6f8fc]">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-[#f6f8fc] min-h-screen w-full">
        <main className="p-6 w-full">
          <h1 className="text-xl font-bold font-nunito mb-2 text-center">{isEdit ? 'Update Product' : 'Add New Product'}</h1>
          <div className="max-w-xs bg-white rounded-xl shadow p-2 md:p-3 mx-auto">
            <form onSubmit={handleSubmit} className="space-y-2">
              {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
              <div>
                <label className="block font-semibold mb-1">Product Code :</label>
                <input
                  type="text"
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  className="w-full border rounded px-2 py-1 text-sm focus:outline-none focus:border-blue-400"
                  placeholder="Enter your product code"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Measure Unit <span className="text-red-500">*</span> :</label>
                <input
                  type="text"
                  name="unit"
                  value={form.unit}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Select a measure unit"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Product Name <span className="text-red-500">*</span> :</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your product name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Sale Price <span className="text-red-500">*</span> :</label>
                <input
                  type="number"
                  name="salePrice"
                  value={form.salePrice}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your Sale Price"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Description <span className="text-red-500">*</span> :</label>
                <input
                  type="text"
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your Description"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-1.5 rounded transition font-semibold text-sm"
              >
                {index !== undefined ? "Update" : "Add New Product"}
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
} 