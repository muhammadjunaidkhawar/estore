import { Search, ShoppingCart, User, Bell, ChevronDown, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

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

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Shop by Skin Concern
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-sm">
          Find targeted solutions for your specific cosmetic skin needs. Each
          formulation is designed to improve visible appearance.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              title: "Acne-Prone Skin",
              desc: "Formulations to improve blemishes and support clearer skin.",
            },
            {
              title: "Pigmentation Appearance",
              desc: "Brightening actives to reduce dark spots and uneven tone.",
            },
            {
              title: "Glow & Radiance",
              desc: "Illuminating formulas for natural radiance and luminosity.",
            },
            {
              title: "Dry Skin",
              desc: "Deep hydration solutions to nourish moisture levels.",
            },
            {
              title: "Oily Skin",
              desc: "Oil-balancing formulas to refine pores and shine.",
            },
            {
              title: "Sensitive Skin",
              desc: "Gentle soothing formulations for delicate skin.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
            >
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
              <span className="text-sm font-medium cursor-pointer hover:underline">
                Shop Now →
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================= */}
      {/* ========= BESTSELLING SERUMS (ADDED SECTION) ============= */}
      {/* ========================================================= */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-semibold text-center mb-2">
          Our Bestselling Serums
        </h2>
        <p className="text-gray-600 text-center mb-12 text-sm">
          Most-loved by customers across Pakistan. Real reviews from real users.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Vitamin C Brightening Serum",
              price: "Rs. 2,850",
              img: "https://images.unsplash.com/photo-1585232351009-aa87416fca90",
            },
            {
              title: "Hyaluronic Acid Hydrating Serum",
              price: "Rs. 2,650",
              img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
            },
            {
              title: "Niacinamide Pore Refining Serum",
              price: "Rs. 2,550",
              img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd",
            },
          ].map((p, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={p.img}
                alt={p.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-yellow-500 text-sm mb-2">★★★★★ (120)</p>
                <p className="font-semibold">{p.price}</p>
                <p className="text-xs text-gray-500 mt-1">30ml</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <span className="cursor-pointer text-sm font-medium hover:underline">
            View All Products →
          </span>
        </div>
      </section>

      {/* ================= KNOW WHAT GOES ON YOUR SKIN ================= */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xs tracking-widest text-gray-500 mb-2 uppercase">
              Clean Formulations
            </p>

            <h2 className="text-4xl font-serif mb-4">
              Know What Goes On Your Skin
            </h2>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Full ingredient transparency is our commitment. Every active
              ingredient is listed with its concentration and purpose. No hidden
              formulas, no questionable ingredients.
            </p>

            <ul className="space-y-4 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span>
                  <strong>Clinically-Proven Actives</strong>
                  <br />
                  Only ingredients with published research at effective
                  concentrations
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span>
                  <strong>Free from Harmful Chemicals</strong>
                  <br />
                  No parabens, sulfates, phthalates, or synthetic fragrances
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span>
                  <strong>Dermatologist Developed</strong>
                  <br />
                  Formulated with input from qualified skincare professionals
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="text-green-600">✔</span>
                <span>
                  <strong>Cruelty-Free & Vegan</strong>
                  <br />
                  Never tested on animals, suitable for conscious consumers
                </span>
              </li>
            </ul>

            <button className="mt-8 px-6 py-3 bg-black text-white rounded-full text-sm hover:bg-gray-800 transition">
              Explore Our Ingredients →
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
              alt="Lab formulation"
              className="rounded-xl w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= SKINCARE EDUCATION HUB ================= */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-3xl font-serif text-center mb-2">
          Your Skincare Education Hub
        </h2>

        <p className="text-center text-gray-600 text-sm max-w-xl mx-auto mb-14">
          Learn how to get the most from your serums with expert guides and
          evidence-based skincare information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-purple-50 p-8 rounded-xl hover:shadow-md transition">
            <div className="text-purple-600 text-3xl mb-4">📘</div>
            <h3 className="font-semibold mb-2">Complete Serum Guides</h3>
            <p className="text-sm text-gray-600 mb-4">
              Everything you need to know about choosing, applying, and layering
              skincare serums.
            </p>
            <span className="text-sm font-medium cursor-pointer hover:underline">
              Read Guides →
            </span>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50 p-8 rounded-xl hover:shadow-md transition">
            <div className="text-blue-600 text-3xl mb-4">🎥</div>
            <h3 className="font-semibold mb-2">Video Tutorials</h3>
            <p className="text-sm text-gray-600 mb-4">
              Step-by-step application techniques and skincare routine building
              videos.
            </p>
            <span className="text-sm font-medium cursor-pointer hover:underline">
              Watch Videos →
            </span>
          </div>

          {/* Card 3 */}
          <div className="bg-green-50 p-8 rounded-xl hover:shadow-md transition">
            <div className="text-green-600 text-3xl mb-4">🧪</div>
            <h3 className="font-semibold mb-2">Ingredient Dictionary</h3>
            <p className="text-sm text-gray-600 mb-4">
              Understand what each ingredient does and why it works in your
              skincare.
            </p>
            <span className="text-sm font-medium cursor-pointer hover:underline">
              Explore Ingredients →
            </span>
          </div>
        </div>
      </section>

      {/* ================= POPULAR TOPICS ================= */}
      <section className="max-w-7xl mx-auto px-6 py-8 border-t">
        <h4 className="text-sm font-semibold text-center mb-6">
          Popular Topics
        </h4>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-xs text-gray-600">
          <span className="cursor-pointer hover:underline">
            How to Use Vitamin C
          </span>
          <span className="cursor-pointer hover:underline">
            Night Skincare Routine
          </span>
          <span className="cursor-pointer hover:underline">
            Retinol for Beginners
          </span>
          <span className="cursor-pointer hover:underline">
            Know Your Skin Type
          </span>
          <span className="cursor-pointer hover:underline">
            Serum Layering Guide
          </span>
          <span className="cursor-pointer hover:underline">
            Blemish-Prone Care
          </span>
          <span className="cursor-pointer hover:underline">
            Morning Skincare Routine
          </span>
          <span className="cursor-pointer hover:underline">
            Anti-Aging Essentials
          </span>
        </div>
      </section>

      {/* ================= WHY CUSTOMERS TRUST ================= */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="border rounded-2xl p-10">
          <h2 className="text-3xl font-serif text-center mb-2">
            Why Customers Trust Lumière
          </h2>

          <p className="text-center text-sm text-gray-600 mb-10">
            Over 10,000+ satisfied customers across Pakistan
          </p>

          {/* Trust Icons */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-700 mb-14">
            <div>🧪 Dermatologist Tested</div>
            <div>🚚 Free Shipping Over Rs. 2,500</div>
            <div>💎 Premium Quality Guarantee</div>
            <div>🔒 Secure Payment Options</div>
            <div>🐰 100% Cruelty-Free</div>
            <div>✔ Authentic Products Only</div>
          </div>

          {/* Reviews */}
          <h4 className="text-center text-sm font-semibold mb-6">
            What Our Customers Say
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="border rounded-xl p-6">
              <p className="text-yellow-500 mb-2">★★★★★</p>
              <p className="text-gray-600 mb-3">
                “The Vitamin C serum has visibly improved my skin’s appearance.
                I can see a difference in just 2 weeks!”
              </p>
              <p className="text-xs font-semibold">— Aisha K., Karachi</p>
            </div>

            <div className="border rounded-xl p-6">
              <p className="text-yellow-500 mb-2">★★★★★</p>
              <p className="text-gray-600 mb-3">
                “Finally, a brand that’s transparent about ingredients. My skin
                loves this Niacinamide serum.”
              </p>
              <p className="text-xs font-semibold">— Sara M., Lahore</p>
            </div>

            <div className="border rounded-xl p-6">
              <p className="text-yellow-500 mb-2">★★★★★</p>
              <p className="text-gray-600 mb-3">
                “Premium quality at reasonable prices. Fast delivery and
                excellent customer service.”
              </p>
              <p className="text-xs font-semibold">— Fatima R., Islamabad</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOLLOW OUR JOURNEY ================= */}
      <section className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-2">
            Follow Our Journey
          </h2>

          <p className="text-center text-gray-400 text-sm mb-12">
            Join our community for skincare tips, before & afters, and exclusive
            offers
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Instagram */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8">
              <h3 className="font-semibold mb-2">📸 Lumiere.pk</h3>
              <p className="text-sm mb-4">
                Skincare stories, real results and skincare journeys.
              </p>
              <span className="text-sm font-semibold cursor-pointer">
                Follow on Instagram →
              </span>
            </div>

            {/* YouTube */}
            <div className="bg-red-600 rounded-xl p-8">
              <h3 className="font-semibold mb-2">▶ Lumière Pakistan</h3>
              <p className="text-sm mb-4">
                Expert tutorials, ingredient deep-dives, and honest skincare
                education.
              </p>
              <span className="text-sm font-semibold cursor-pointer">
                Subscribe on YouTube →
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm">
            <div>
              <p className="text-2xl font-bold">15K+</p>
              <p className="text-gray-400">Instagram Followers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-gray-400">Happy Customers</p>
            </div>
            <div>
              <p className="text-2xl font-bold">4.8★</p>
              <p className="text-gray-400">Average Rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-gray-400">5-Star Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT INFORMATION ================= */}
      <section className="bg-[#fff9eb] py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-gray-600">
          <h4 className="font-semibold mb-2">Important Information</h4>
          <p className="leading-relaxed max-w-4xl mx-auto">
            Cosmetic Products Disclaimer: All Lumière products are cosmetic
            skincare solutions designed to improve the visible appearance and
            feel of skin. Our serums are not medical treatments and are not
            intended to diagnose, treat, cure or prevent any disease or medical
            condition. Results may vary based on individual skin type, concerns
            and consistency of use. Typically appear within 4–12 weeks of
            regular use. For medical skin concerns, please consult a qualified
            dermatologist. Patch test recommended 24 hours before first use.
          </p>
        </div>
      </section>

      {/* ======================= FOOTER ======================= */}

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
    </div>
  );
}
