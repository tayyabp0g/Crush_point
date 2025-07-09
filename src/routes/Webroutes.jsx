import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login/login";
import Signup from "../pages/auth/signup/Signup";
import Dashboard from "../pages/main/dashboard/Dashboard";
export default function WebRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
