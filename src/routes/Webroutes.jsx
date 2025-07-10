import { BrowserRouter, Route, Routes } from "react-router-dom";
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
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-product/new" element={<AddProductForm />} />
        <Route path="/manage-product" element={<ManageProduct />} />
      </Routes>
    </BrowserRouter>
  );
}
