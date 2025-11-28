import React from 'react'

export default function NoFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[180px] md:text-[240px] font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-600/10 blur-3xl -z-10"></div>
        </div>

        {/* Message */}
        <div className="mt-8 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
            Page Not Found
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Button */}
        <button 
          onClick={() => window.history.back()}
          className="mt-10 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-indigo-200/50 hover:shadow-2xl hover:shadow-indigo-300/50 hover:scale-105 transition-all duration-300 transform"
        >
          Go Back Home
        </button>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-3">
          <div className="w-3 h-3 rounded-full bg-indigo-600 animate-pulse"></div>
          <div className="w-3 h-3 rounded-full bg-purple-600 animate-pulse delay-75"></div>
          <div className="w-3 h-3 rounded-full bg-pink-600 animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  )
}