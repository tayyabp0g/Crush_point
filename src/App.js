import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Signup from "./pages/auth/signup/Signup";
import Login from "./pages/auth/login/login"; // Make sure file name matches
import './App.css';
import Dashboard from "./pages/main/dashboard/Dashboard";


function App() {
  return <Dashboard />
 
//   return (
//     <Router>
//       <Routes>
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//         {/* Default route: redirect to signup */}
//         <Route path="*" element={<Navigate to="/signup" />} />
//       </Routes>
//     </Router>
//   );
 }

export default App;
