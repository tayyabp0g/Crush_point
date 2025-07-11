import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/login/login";
import Signup from "../pages/auth/signup/Signup";
import Dashboard from "../pages/main/dashboard/Dashboard";
import AddProduct from "../pages/main/dashboard/AddProduct";
import AddProductForm from "../pages/main/dashboard/AddProductForm";
import Settings from "../pages/main/dashboard/Settings";
import Logout from "../pages/main/dashboard/Logout";
import Accounts from "../pages/main/dashboard/Accounts";
import Sales from "../pages/main/dashboard/Sales";
import Vouchers from "../pages/main/dashboard/Vouchers";
import Reports from "../pages/main/dashboard/Reports";


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
        <Route path="/add-product/edit" element={<AddProductForm />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </BrowserRouter>
  );
}
