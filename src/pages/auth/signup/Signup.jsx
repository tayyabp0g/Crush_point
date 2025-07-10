import logo from "../../../assets/images/logo.png";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import bgImg from "../../../assets/images/1722823099924.jpg";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#4d83fe]">
      <div
        className="flex w-[900px] h-[600px] rounded-3xl overflow-hidden shadow-2xl border-2 border-black"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center justify-center bg-transparent z-10">
          {/* Logo ya content */}
          <img src={logo} alt="Crushpoint Logo" className="w-125 mb-0 z-10" style={{ marginTop: "100px" }} />
          {/* Background image (optional) */}
          <div className="absolute inset-0 bg-cover bg-center opacity-30 z-0" style={{ backgroundImage: "url('/src/assets/images/bg.png')" }}></div>
        </div>
        {/* Right Side */}
        <div className="flex-1 relative flex flex-col justify-center items-center z-10">
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#39414E] bg-opacity-90"></div>
          {/* Form */}
          <form className="relative z-10 w-full max-w-md px-8 py-10 flex flex-col gap-4">
            <div className="flex flex-col items-center mb-4">
              {/* Icon */}
              <svg width="60" height="60" viewBox="0 0 60 60">
                {/* Purple semi-circle (upar) */}
                <path d="M10 35 Q30 0 50 35 Z" fill="#7c3aed" />
                {/* White circle (upar) */}
                <circle cx="30" cy="18" r="8" fill="#fff" />
                {/* Pink/Red circle (neeche) */}
                <circle cx="30" cy="38" r="12" fill="#f43f5e" />
                {/* Yellow arc (smile) */}
                <path d="M18 38 Q30 55 42 38" stroke="#fbbf24" strokeWidth="4" fill="none" />
              </svg>
              <h2 className="text-2xl font-bold text-white mt-2">Enter your details</h2>
              <div className="flex items-center w-full mt-2">
                <div className="flex-1 h-px bg-gray-400"></div>
                <span className="mx-2 text-white">Or</span>
                <div className="flex-1 h-px bg-gray-400"></div>
              </div>
            </div>
            <div>
              <label className="text-white">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                className="rounded-md px-4 py-2 bg-transparent border border-gray-300 text-white placeholder-white placeholder:opacity-100 placeholder:text-sm focus:outline-none w-full mt-1"
              />
            </div>
            <div>
              <label className="text-white">Plant Name / Code</label>
              <input
                type="text"
                placeholder="Enter Plant Code"
                className="rounded-md px-4 py-2 bg-transparent border border-gray-300 text-white placeholder-white placeholder:opacity-100 placeholder:text-sm focus:outline-none w-full mt-1"
              />
            </div>
            <div className="flex flex-col md:flex-row gap-2">
              {/* Password Field */}
              <div className="flex-1">
                <label className="text-white">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="rounded-md px-4 py-2 bg-transparent border border-gray-300 text-white placeholder-white placeholder:opacity-100 placeholder:text-sm focus:outline-none w-full mt-1 pr-10"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
              {/* Confirm Password Field */}
              <div className="flex-1">
                <label className="text-white">Confirm Password</label>
                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    placeholder="Enter your password"
                    className="rounded-md px-4 py-2 bg-transparent border border-gray-300 text-white placeholder-white placeholder:opacity-100 placeholder:text-sm focus:outline-none w-full mt-1 pr-10"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer"
                    onClick={() => setShowConfirm((prev) => !prev)}
                  >
                    {showConfirm ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 bg-[#663ae0] text-white font-semibold py-3 rounded-full shadow hover:bg-[#4d2bbd] transition"
            >
              SignUp
            </button>
            <a href="/login" className="text-blue-200 text-center mt-2 hover:underline">
              Login Here!
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}
