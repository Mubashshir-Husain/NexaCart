import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="relative z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">Welcome to NexaCart</h1>
          <p className="text-xl md:text-2xl mt-5 opacity-95 font-light max-w-3xl mx-auto">
            Discover the latest fashion, electronics, home décor & much more.
          </p>
          <Link to="/products">
            <button className="mt-8 bg-white text-indigo-600 px-10 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/30 hover:scale-105 transition-all duration-300 transform">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6">
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-14">
          Shop by Category
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Category Card */}
          <Link to="/products">
            <div className="group bg-white/90 backdrop-blur-sm shadow-xl shadow-slate-200/50 rounded-2xl p-6 text-center hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-200/40 transition-all duration-500 border border-slate-100">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://img.freepik.com/free-photo/arrangement-different-traveling-elements_23-2148884922.jpg?semt=ais_hybrid&w=740&q=80"
                  className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                  alt="Fashion"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
              <h3 className="font-bold text-2xl mt-5 text-slate-800 group-hover:text-indigo-600 transition-colors">Fashion</h3>
            </div>
          </Link>

          <Link to="/products">
            <div className="group bg-white/90 backdrop-blur-sm shadow-xl shadow-slate-200/50 rounded-2xl p-6 text-center hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-200/40 transition-all duration-500 border border-slate-100">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://img.freepik.com/free-vector/portable-electronics-isometric-icons-illustrated-digital-gadgets-used-daily-life-field-sports-medicine-work-leisure-isolated-vector-illustration_1284-70477.jpg?semt=ais_hybrid&w=740&q=80"
                  className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                  alt="Electronics"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
              <h3 className="font-bold text-2xl mt-5 text-slate-800 group-hover:text-purple-600 transition-colors">Electronics</h3>
            </div>
          </Link>

          <Link to="/products">
            <div className="group bg-white/90 backdrop-blur-sm shadow-xl shadow-slate-200/50 rounded-2xl p-6 text-center hover:-translate-y-3 hover:shadow-2xl hover:shadow-pink-200/40 transition-all duration-500 border border-slate-100">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://media.designcafe.com/wp-content/uploads/2021/12/27144355/design-cafe-modular-furniture-benefits.jpg"
                  className="w-full h-56 object-cover rounded-xl group-hover:scale-110 transition-transform duration-700"
                  alt="Home & Decor"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
              </div>
              <h3 className="font-bold text-2xl mt-5 text-slate-800 group-hover:text-pink-600 transition-colors">Home & Decor</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-20 px-6 bg-white/60 backdrop-blur-sm">
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-14">
          Trending Products
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group bg-white/90 backdrop-blur-sm border border-slate-100 rounded-2xl p-5 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-200/40 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-xl">
                <div className="w-full h-52 bg-gradient-to-br from-slate-200 to-slate-100 rounded-xl group-hover:from-indigo-100 group-hover:to-purple-100 transition-all duration-500" />
              </div>
              <h3 className="font-bold text-xl mt-5 text-slate-800">Product Name</h3>
              <p className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">₹999</p>
              <button className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-xl w-full font-semibold hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-10 text-center border-t border-slate-700">
        <p className="text-slate-300 text-lg">
          © 2025 Trendora Store — All Rights Reserved
        </p>
      </footer>
    </div>
  );
}