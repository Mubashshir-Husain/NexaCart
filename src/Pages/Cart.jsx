import axios from 'axios';
import React, { useState, useEffect } from 'react'

export default function Cart({ cartItems }) {

  let [cartProuctData, setCartProductData] = useState([]);

  useEffect(() => {

    async function getCartproductData() {
      let temp = [];

      for (let id of cartItems) {
        let res = await axios.get(`${import.meta.env.VITE_API_URL}${id}`);
        temp.push(res.data);
      }

      setCartProductData(temp);
    }

    getCartproductData();

  }, [cartItems]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
            Shopping Cart
          </h1>
          <p className="text-slate-600 text-lg">
            {cartProuctData.length} {cartProuctData.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {/* Cart Items Grid */}
        {cartProuctData.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-block p-6 bg-white rounded-full shadow-lg mb-4">
              <svg className="w-16 h-16 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-700 mb-2">Your cart is empty</h3>
            <p className="text-slate-500">Add some products to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cartProuctData.map((item) => {
              return (
                <div key={item.id} className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-64 bg-gradient-to-br from-slate-100 to-slate-200">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                      <span className="text-2xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        ₹{item.price}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6">
                    {/* Category Badge */}
                    <span className="inline-block text-xs font-semibold text-indigo-700 bg-indigo-100 px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
                      {item.category.name}
                    </span>

                    {/* Title */}
                    <h2 className="text-xl font-bold text-slate-800 mb-4 line-clamp-2 leading-tight min-h-[3.5rem]">
                      {item.title}
                    </h2>

                    {/* Action Buttons */}
                    <div className="flex gap-3 mt-6">
                      <button className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                        Buy Now
                      </button>
                      <button className="p-3 border-2 border-slate-300 text-slate-600 rounded-xl hover:bg-red-50 hover:border-red-300 hover:text-red-600 transition-all duration-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Summary Section */}
        {cartProuctData.length > 0 && (
          <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 border border-slate-200">
            <div className="max-w-md ml-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Order Summary</h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{cartProuctData.reduce((sum, item) => sum + item.price, 0)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="border-t-2 border-slate-200 pt-4 flex justify-between text-xl font-bold text-slate-800">
                  <span>Total</span>
                  <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                    ₹{cartProuctData.reduce((sum, item) => sum + item.price, 0)}
                  </span>
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold py-4 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}