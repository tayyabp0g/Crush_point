import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/auth/login/login";
import Signup from "../pages/auth/signup/Signup";
import Dashboard from "../pages/main/dashboard/Dashboard";
import AddProduct from "../pages/main/products/AddProduct";
import AddProductForm from "../pages/main/products/AddProductForm";
import Settings from "../pages/main/setting/Settings";
import Accounts from "../pages/main/accounnts/Accounts";
import Sales from "../pages/main/sales/Sales";
import Vouchers from "../pages/main/vouchers/Vouchers";
import Reports from "../pages/main/Reports/Reports";
import ProductLedger from "../pages/main/products/ProductLedger";
import ProductLedgerDetail from "../pages/main/products/ProductLedgerDetail";


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
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/vouchers" element={<Vouchers />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/product-ledger" element={<ProductLedger />} />
        <Route path="/product-ledger/:id" element={<ProductLedgerDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
