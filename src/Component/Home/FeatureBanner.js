import React from "react";

const FeaturedBanner = () => {
  return (
    <div className="w-full px-4 md:px-8 mt-6">
      <div className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0f172a] via-[#0b1a2e] to-[#071426] backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-blue-500/40 hover:shadow-blue-500/20">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative p-6 md:p-8 grid md:grid-cols-2 gap-6 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Master DSA Like a Pro 🚀
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Strengthen your foundations with structured sessions, real
              interview questions, and curated practice sets. This roadmap is
              designed to help you crack top product-based companies.
            </p>

            <button className="mt-5 px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition duration-300 shadow-lg hover:shadow-blue-500/30">
              Explore Now
            </button>
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://res.cloudinary.com/dgfxvpxbr/image/upload/v1771404297/2_fahrwp.jpg"
              alt="DSA Sheet"
              className="rounded-xl object-cover w-full h-40 md:h-52 transition-transform duration-500 hover:scale-105"
            />
            <img
              src="https://res.cloudinary.com/dgfxvpxbr/image/upload/v1771404297/1_smkovn.jpg"
              alt="Interview Prep"
              className="rounded-xl object-cover w-full h-40 md:h-52 transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBanner;
