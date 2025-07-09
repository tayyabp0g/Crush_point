import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login/login";
import Signup from "../pages/auth/signup/Signup";
import Dashboard from "../pages/main/dashboard/Dashboard";
export default function Webroutes() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Dashboard />} />
=======
        <Route path="/" eSlement={<Dashboard />} />
>>>>>>> 537a126e4047cb36f1035904d342dd45854f54ca
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
