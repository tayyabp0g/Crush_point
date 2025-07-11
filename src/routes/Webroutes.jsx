import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/login/login";
import Signup from "../pages/auth/signup/Signup";
import Dashboard from "../pages/main/dashboard/Dashboard";
import AddProduct from "../pages/main/dashboard/AddProduct";
import AddProductForm from "../pages/main/dashboard/AddProductForm";
import ManageProduct from "../pages/main/dashboard/ManageProduct";

export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/products" element={<Dashboard />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-product/new" element={<AddProductForm />} />
        <Route path="/manage-product" element={<ManageProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
