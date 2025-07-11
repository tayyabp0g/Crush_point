import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Topbar from "../../../components/Topbar/Topbar";
import { useNavigate } from "react-router-dom";

const user = {
  name: "Usman",
  role: "Admin",
  avatar: "https://randomuser.me/api/portraits/men/1.jpg",
};

export default function ManageProduct() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");
  const [form, setForm] = useState({
    code: "",
    unit: "",
    name: "",
    salePrice: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    // Send updated product back to AddProduct.jsx
    navigate("/add-product", { state: { updatedProduct: form } });
  };

  return (
    <div className="flex h-screen bg-[#f6f8fc]">
      <Sidebar />
      <Topbar user={user} language={language} onLanguageChange={setLanguage} />
      <div className="ml-60 pt-20 bg-[#f6f8fc] min-h-screen w-full">
        <main className="p-6 w-full">
          <h1 className="text-3xl font-bold font-nunito mb-8 text-center">Edit Product</h1>
          <div className="max-w-xl mx-auto bg-white rounded-3xl shadow p-8">
            <form onSubmit={handleUpdate} className="space-y-6">
              <div>
                <label className="block font-semibold mb-1">Product Code :</label>
                <input
                  type="text"
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-400"
                  placeholder="Enter your product code"
                  required
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
                <label className="block font-semibold mb-1">Description :</label>
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
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition font-semibold"
              >
                Update
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
} 