import React, { useState } from "react";
import { motion } from "framer-motion";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ===== VIDEO BACKGROUND ===== */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/login-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ===== LOGIN CARD ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-white text-black w-full max-w-xl rounded-2xl shadow-2xl px-10 py-8"
      >
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-black-logo-icon-png-image_4421941.jpg"
            alt="logo"
            className="h-14 w-14 rounded-full"
          />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold text-center mb-1">Welcome Back</h2>
        <p className="text-gray-600 text-sm text-center mb-6">
          Login to continue your skincare journey
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type="email"
              placeholder="Email address"
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
            />
            <div
              className="absolute right-3 top-3 cursor-pointer text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </div>
          </div>

          {/* Remember / Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-black" />
              Remember me
            </label>
            <span className="text-gray-600 hover:text-black cursor-pointer">
              Forgot password?
            </span>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-black text-white rounded-full hover:bg-gray-900 transition font-medium"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login */}
        <button className="w-full py-2.5 border border-black rounded-full hover:bg-black hover:text-white transition">
          Continue with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-center text-gray-600 mt-5">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-black font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
