import React, { useState, useRef, useEffect } from "react";
import { Search, ShoppingCart, User, Bell, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";


export default function ShopSerums() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const navRef = useRef(null);
  const [openFAQ, setOpenFAQ] = React.useState(null);

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

      <div className="bg-white text-black">
        {/* ================= PAGE HEADER ================= */}
        <section className="max-w-7xl mx-auto px-6 pt-12 pb-6">
          <p className="text-xs text-gray-500 mb-2">Home / Shop Serums</p>

          <h1 className="text-4xl font-serif mb-4">Shop Serums</h1>

          <p className="text-gray-600 text-sm max-w-3xl leading-relaxed">
            High-performance cosmetic formulations designed to improve visible
            skin appearance. Each serum contains clinically-studied active
            ingredients at effective concentrations to address specific skin
            concerns such as hydration, radiance, texture, and visible signs of
            aging.
          </p>
        </section>

        {/* ================= MAIN LAYOUT ================= */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* ================= SIDEBAR (STICKY) ================= */}
            <aside className="md:col-span-1">
              <div className="sticky top-28 border rounded-xl p-5">
                {/* Skin Type */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm mb-3">Skin Type</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {["Normal", "Dry", "Oily", "Combination", "Sensitive"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-2">
                          <input type="checkbox" />
                          {item}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Skin Concern */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm mb-3">Skin Concern</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      "Acne & Blemishes",
                      "Dark Spots",
                      "Fine Lines",
                      "Dullness",
                      "Large Pores",
                      "Dehydration",
                      "Uneven Texture",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <input type="checkbox" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h3 className="font-semibold text-sm mb-3">Key Ingredient</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {[
                      "Vitamin C",
                      "Hyaluronic Acid",
                      "Niacinamide",
                      "Retinol",
                      "Peptides",
                      "AHA/BHA",
                      "Azelaic Acid",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <input type="checkbox" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price */}
                <div>
                  <h3 className="font-semibold text-sm mb-3">Price Range</h3>
                  <input type="range" min="0" max="5000" className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Rs. 0</span>
                    <span>Rs. 5,000</span>
                  </div>
                </div>

                <button className="mt-6 w-full border rounded-full py-2 text-sm hover:bg-black hover:text-white transition">
                  Clear All Filters
                </button>
              </div>
            </aside>

            {/* ================= PRODUCTS ================= */}
            <div className="md:col-span-3">
              {/* Top Bar */}
              <div className="flex justify-between items-center mb-6 text-sm">
                <p className="text-gray-500">9 Products</p>
                <select className="border rounded px-3 py-1 text-sm">
                  <option>Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Vitamin C Brightening Serum",
                    price: "Rs. 2,850",
                    badge: "Bestseller",
                    img: "https://images.unsplash.com/photo-1585232351009-aa87416fca90",
                  },
                  {
                    title: "Hyaluronic Acid Hydrating Serum",
                    price: "Rs. 2,650",
                    badge: "Clean Formula",
                    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
                  },
                  {
                    title: "Retinol Anti-Aging Serum",
                    price: "Rs. 3,250",
                    badge: "New",
                    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
                  },
                  {
                    title: "Niacinamide Pore Refining Serum",
                    price: "Rs. 2,550",
                    badge: "Top Rated",
                    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
                  },
                  {
                    title: "Peptide Firming Serum",
                    price: "Rs. 3,450",
                    badge: "Premium",
                    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
                  },
                  {
                    title: "Azelaic Acid Clearing Serum",
                    price: "Rs. 2,750",
                    badge: "",
                    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
                  },
                  {
                    title: "Azelaic Acid Clearing Serum",
                    price: "Rs. 2,750",
                    badge: "",
                    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
                  },
                  {
                    title: "Azelaic Acid Clearing Serum",
                    price: "Rs. 2,750",
                    badge: "",
                    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
                  },
                  {
                    title: "Azelaic Acid Clearing Serum",
                    price: "Rs. 2,750",
                    badge: "",
                    img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
                  },
                ].map((p, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="border rounded-xl overflow-hidden hover:shadow-lg transition"
                  >
                    <div className="relative">
                      {p.badge && (
                        <span className="absolute top-3 left-3 bg-black text-white text-xs px-2 py-1 rounded-full">
                          {p.badge}
                        </span>
                      )}
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-56 w-full object-cover"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="font-semibold text-sm mb-1">{p.title}</h3>
                      <p className="text-yellow-500 text-xs mb-1">
                        ★★★★★ (120)
                      </p>
                      <p className="font-semibold text-sm">{p.price}</p>
                      <p className="text-xs text-gray-500 mt-1">30ml</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* ================= LOAD MORE ================= */}
              <div className="flex justify-center mt-16">
                <button className="border rounded-full px-6 py-2 text-sm hover:bg-black hover:text-white transition">
                  Load More Products
                </button>
              </div>

              {/* ================= SERUM EDUCATION SECTION ================= */}
              <section className="mt-24 bg-purple-50 rounded-2xl p-10">
                <h2 className="text-3xl font-serif mb-4">
                  How to Choose the Right Serum
                </h2>

                <p className="text-sm text-gray-600 max-w-3xl mb-10">
                  Selecting the right face serum depends on your primary skin
                  concern and skin type. While multiple concerns are common,
                  focusing on one main goal helps you choose the most effective
                  formulation.
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold mb-2">
                      For Brightening & Radiance
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Look for serums with Vitamin C, Tranexamic Acid, or Alpha
                      Arbutin. These ingredients help improve the appearance of
                      dark spots and enhance natural skin radiance.
                    </p>
                    <span className="text-sm font-medium text-purple-600 cursor-pointer hover:underline">
                      Shop Brightening Serums →
                    </span>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold mb-2">
                      For Hydration & Plumping
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Hyaluronic Acid and Ceramides are excellent for improving
                      skin moisture levels and creating a plump, dewy
                      appearance.
                    </p>
                    <span className="text-sm font-medium text-purple-600 cursor-pointer hover:underline">
                      Shop Hydrating Serums →
                    </span>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold mb-2">
                      For Visible Aging Signs
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Retinol and Peptides help improve the appearance of fine
                      lines and support skin firmness for a more youthful look.
                    </p>
                    <span className="text-sm font-medium text-purple-600 cursor-pointer hover:underline">
                      Shop Anti-Aging Serums →
                    </span>
                  </div>

                  <div className="bg-white rounded-xl p-6">
                    <h4 className="font-semibold mb-2">
                      For Blemish-Prone Skin
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Niacinamide and Azelaic Acid can help improve the
                      appearance of blemishes and support clearer-looking skin.
                    </p>
                    <span className="text-sm font-medium text-purple-600 cursor-pointer hover:underline">
                      Shop Clearing Serums →
                    </span>
                  </div>
                </div>

                {/* Layering Guide */}
                <div className="mb-10">
                  <h4 className="font-semibold mb-3">
                    Layering Multiple Serums
                  </h4>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
                    <li>
                      Start with one serum for 2 weeks before adding another
                    </li>
                    <li>Apply from thinnest to thickest consistency</li>
                    <li>Wait 1–2 minutes between each layer</li>
                    <li>
                      Some actives work better at different times (e.g., Vitamin
                      C AM, Retinol PM)
                    </li>
                  </ul>
                </div>

                {/* Related Guides */}
                <div>
                  <h4 className="font-semibold mb-3">Related Guides</h4>
                  <div className="flex flex-wrap gap-6 text-sm">
                    <span className="text-purple-600 cursor-pointer hover:underline">
                      Complete Serum Layering Guide
                    </span>
                    <span className="text-purple-600 cursor-pointer hover:underline">
                      Morning Skincare Routine
                    </span>
                    <span className="text-purple-600 cursor-pointer hover:underline">
                      Night Skincare Routine
                    </span>
                    <span className="text-purple-600 cursor-pointer hover:underline">
                      Ingredient Dictionary
                    </span>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-black text-white pt-16">
        <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6">
          {/* Store Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">
              Cosmetic <span className="text-red-500">Store</span>
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your Beauty Partner. Premium skincare products crafted to elevate
              your natural beauty.
            </p>

            <div className="mt-6 text-sm text-gray-300">
              <p className="font-semibold text-white mb-1">Address</p>
              <p>Kashmir Highway, Islamabad</p>
              <p>Pakistan</p>

              <p className="font-semibold text-white mt-4 mb-1">Contact</p>
              <p>404-415-460</p>
              <p>409-411-560</p>
              <p>CosmeticStore123@gmail.com</p>
            </div>
          </div>

          {/* Shop Serum */}
          <div>
            <h3 className="font-semibold mb-4">Shop Serum</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">
                Vitamin C Serum
              </li>
              <li className="hover:text-white cursor-pointer">
                Niacinamide Serum
              </li>
              <li className="hover:text-white cursor-pointer">
                Hyaluronic Acid Serum
              </li>
              <li className="hover:text-white cursor-pointer">Retinol Serum</li>
              <li className="hover:text-white cursor-pointer">
                Acne & Dark Spot Serum
              </li>
              <li className="hover:text-white cursor-pointer">Other Serums</li>
            </ul>
          </div>

          {/* Skin Solutions */}
          <div>
            <h3 className="font-semibold mb-4">Skin Solutions</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Glowing Skin</li>
              <li className="hover:text-white cursor-pointer">
                Acne & Pimples
              </li>
              <li className="hover:text-white cursor-pointer">Dark Spots</li>
              <li className="hover:text-white cursor-pointer">
                Wrinkles & Aging
              </li>
              <li className="hover:text-white cursor-pointer">
                Dry / Oily Skin
              </li>
              <li className="hover:text-white cursor-pointer">Open Pores</li>
            </ul>
          </div>

          {/* ✅ Serum Guides (ONLY ADDITION) */}
          <div>
            <h3 className="font-semibold mb-4">Serum Guides</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">How to Apply</li>
              <li className="hover:text-white cursor-pointer">
                AM / PM Routine
              </li>
              <li className="hover:text-white cursor-pointer">
                Layering Order
              </li>
              <li className="hover:text-white cursor-pointer">
                Best for Your Skin Type
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Track Order</li>
              <li className="hover:text-white cursor-pointer">Refund Policy</li>
              <li className="hover:text-white cursor-pointer">
                Shipping Policy
              </li>
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us On</h3>

            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, index) => (
                <div
                  key={index}
                  className="p-3 rounded-full border border-gray-600 text-gray-300
                       hover:text-white hover:border-white hover:scale-110
                       transition-all duration-300 cursor-pointer"
                >
                  <Icon size={18} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-14 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Cosmetic Store. All rights reserved.
        </div>
      </footer>

      
    </>
  );
}
