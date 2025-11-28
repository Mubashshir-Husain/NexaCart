import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function ProductDetails({cartItems, setCartItems}) {

  let [productData, setProductData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    async function getProductData() {
      let res = await axios.get(`${import.meta.env.VITE_API_URL}${id}`);
      setProductData(res.data);
    }
    getProductData();
  }, [id]);

  if (!productData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600 mb-4"></div>
          <p className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Loading Product Details...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">

      {/* Product Container */}
      <div className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Product Image */}
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 p-4">
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={productData.images[0]} 
              alt={productData.title}
              className="rounded-xl shadow-lg w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <h1 className="text-5xl font-extrabold text-slate-800 leading-tight bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600 bg-clip-text text-transparent">
              {productData.title}
            </h1>
            
            <div className="mt-4 inline-block">
              <span className="text-sm font-semibold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
                {productData.category?.name}
              </span>
            </div>
          </div>

          <p className="text-base text-slate-600 leading-relaxed border-l-4 border-indigo-200 pl-4 bg-slate-50/50 py-3 rounded-r-lg">
            {productData.description}
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100">
            <p className="text-sm font-medium text-slate-600 mb-1">Price</p>
            <p className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ₹ {productData.price}
            </p>
          </div>

          {/* Button */}
          <button onClick={()=>{
            setCartItems([...cartItems, productData.id])
          }}
            className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 hover:scale-[1.02] transition-all duration-300 transform"
          >
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}