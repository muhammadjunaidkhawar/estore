import { Search, ShoppingCart, User, Bell, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

export default function Home() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <div className="bg-white text-black font-sans">
      {/* ======================= NAVBAR ======================= */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="border-b border-gray-300 bg-white sticky top-0 z-50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img
              src="https://png.pngtree.com/png-clipart/20190903/original/pngtree-black-logo-icon-png-image_4421941.jpg"
              alt="logo"
              className="h-10 w-10 rounded-full"
            />
            <h1 className="text-xl font-bold tracking-wide">Cosmetic Store</h1>
          </div>

          {/* Menu */}
          <ul
            ref={navRef}
            className="hidden md:flex items-center gap-8 font-medium"
          >
            <li className="hover:text-gray-600 cursor-pointer">Home</li>

            {/* Dropdowns */}
            {[
              {
                id: "serums",
                label: "ShopSerums",
                items: [
                  "Vitamin C Serum",
                  "Nicinamide Serum",
                  "Hyaluronic Acid Serum",
                  "Anti Aging/Retinol Serum",
                  "Acne & Dark Spot Serum",
                  "Brightening Serum",
                  "Hydrating Serum",
                  "Open Pores Serum",
                  "Sensitive Skin Serum",
                  "All Serums",
                ],
              },
              {
                id: "concerns",
                label: "SkinConcerns",
                items: [
                  "For Glowing Skin",
                  "For Acne/Pimples",
                  "For Dark Spots/Pigmentation",
                  "For Wrinkes/Anti Aging",
                  "For Dry Skin",
                  ,
                  "For Oily Skin",
                  "For Sensitive Skin",
                  "For Open Pores",
                  "For Dull/ Uneven Skin",
                ],
              },
              {
                id: "guides",
                label: "SerumGuides",
                items: [
                  "How to Apply Serum",
                  "Serum Routine (AM/PM)",
                  "Layering Guide",
                  "Serum Of Skin Types",
                  "Ingredients Guide",
                  "Using Multiple Serums",
                  "Serum Storage Tips",
                  "Beginner Routine",
                  "Precautions",
                ],
              },
              {
                id: "blogs",
                label: "Blogs",
                items: [
                  "Serum Tips & Routines",
                  "Skin Concern Solutions",
                  "Ingredient Knowledge Base",
                  "Comparisons & Review",
                  "Beginner Skincare Routine",
                ],
              },
            ].map((menu) => (
              <li
                key={menu.id}
                className="relative cursor-pointer"
                onMouseEnter={() => setOpenDropdown(menu.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <div className="flex items-center gap-1 hover:text-gray-600">
                  {menu.label} <ChevronDown size={16} />
                </div>

                <AnimatePresence>
                  {openDropdown === menu.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      className="absolute top-8 left-1/2 -translate-x-1/2 bg-white shadow-xl border border-gray-200 rounded p-3 w-[520px]"
                    >
                      <div className="grid grid-cols-2 gap-2">
                        {menu.items.map((item) => (
                          <p
                            key={item}
                            className="hover:bg-gray-100 p-2 rounded text-sm cursor-pointer"
                          >
                            {item}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Icons */}
          <div className="flex items-center gap-5">
            <Search
              className="cursor-pointer hover:text-gray-600"
              onClick={() => setSearchOpen(true)}
            />
            <ShoppingCart className="cursor-pointer hover:text-gray-600" />
            <User className="cursor-pointer hover:text-gray-600" />
            <Bell className="cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </motion.nav>

      {/* ======================= SEARCH MODAL ======================= */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white w-96 p-6 rounded-xl shadow-lg relative"
            >
              <X
                size={22}
                className="absolute top-4 right-4 cursor-pointer"
                onClick={() => setSearchOpen(false)}
              />

              <h2 className="text-xl font-bold mb-4">Search Products</h2>
              <input
                type="text"
                placeholder="Search…"
                className="w-full p-3 border border-gray-300 rounded"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================= HERO SECTION ======================= */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center py-32 bg-black text-white"
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Elevate Your Skincare Routine
        </h1>
        <p className="text-lg max-w-2xl mb-8 text-gray-300">
          Discover premium serums tailored for all skin concerns. Simple, clean,
          and effective skincare for the modern you.
        </p>

        <div className="flex gap-6">
          <button className="px-8 py-3 border border-white rounded-full hover:bg-white hover:text-black transition">
            Explore
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-200 transition"
          >
            Login
          </button>
        </div>
      </motion.section>

      {/* ======================= BLOG SECTION ======================= */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-10 text-center">Latest Blogs</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="border border-gray-300 rounded-xl overflow-hidden bg-white shadow hover:shadow-xl transition-transform hover:-translate-y-2"
            >
              <img
                src={`https://jenpharm.com/cdn/shop/files/before-after-main-images-680x690.jpg?v=1760009046=${i}`}
                alt="blog"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">Blog Title {i}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  This is a short dummy description for the blog post. It
                  introduces the blog in a clean and minimal tone.
                </p>
                <button className="px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">
          {/* Store Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Cosmetic Store</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium skincare products crafted to elevate your natural beauty.
              Clean, minimal, and results-driven formulas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Shop</li>
              <li className="hover:text-white cursor-pointer">Serums</li>
              <li className="hover:text-white cursor-pointer">Blogs</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">FAQ</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
              <li className="hover:text-white cursor-pointer">Shipping</li>
              <li className="hover:text-white cursor-pointer">Returns</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe for updates and skincare tips.
            </p>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded bg-white text-black outline-none"
            />
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm mt-10">
          © {new Date().getFullYear()} Cosmetic Store. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
