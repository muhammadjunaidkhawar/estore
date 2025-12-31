import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Signup() {
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
        <source src="/signup-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* ===== SIGNUP CARD ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl px-10 py-8"
      >
        
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <div className="flex justify-center mb-4">
          <img
            src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-black-logo-icon-png-image_4421941.jpg"
            alt="logo"
            className="h-14 w-14 rounded-full"
          />
        </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold text-center mb-1"
        >
          Create Account
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-center mb-6 text-sm"
        >
          Join Cosmetic Store and start your skincare journey
        </motion.p>

        {/* Form */}
        <motion.form
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="space-y-4"
        >
          {/* Inputs */}
          {[
            { type: "text", placeholder: "Full Name" },
            { type: "email", placeholder: "Email Address" },
            { type: "password", placeholder: "Password" },
            { type: "password", placeholder: "Confirm Password" },
          ].map((field, index) => (
            <motion.input
              key={index}
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          ))}

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full py-2.5 bg-black text-white rounded-full hover:bg-gray-900 transition"
          >
            Sign Up
          </motion.button>
        </motion.form>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-sm text-center text-gray-600 mt-5"
        >
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-black font-semibold hover:underline"
          >
            Login
          </Link>
        </motion.p>
      </motion.div>
    </div>
  );
}
