import React, { useState, useRef, useEffect } from "react";
import { Search, ShoppingCart, User, Bell, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function SkinConcerns() {
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
    <>
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
            <li
              onClick={() => navigate("/")}
              className="hover:text-gray-600 cursor-pointer"
            >
              Home
            </li>

            {/* Dropdowns */}
            {[
              {
                id: "shop-serums",
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
                id: "skin-concerns",
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
                id: "serum-guides",
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
                id: "blog",
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
                <div
                  className="flex items-center gap-1 hover:text-gray-600"
                  onClick={() => navigate(`/${menu.id}`)}
                >
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
      {/* 4️⃣ PAGE CONTENT */}
      <div className="pt-10">
        <h1 className="text-3xl font-bold text-center">Shop Serums</h1>
      </div>
    </>
  );
}
