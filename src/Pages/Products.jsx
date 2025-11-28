import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Products({cartItems, setCartItems}) {

  let [allProduct, setAllProduct] = useState([])
   let [isLoading,setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`${import.meta.env.VITE_API_URL}`)
      setAllProduct(res.data);
      setIsLoading(false);
    }
    getData();
  }, [])

  return (
    <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 min-h-screen">

      {/* Header */}
     <center>
       <div id="TopSection" className="bg-white/80 backdrop-blur-md sticky top-0 px-8 py-6 border-b border-slate-200/60 z-10">
        <h2 className="text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Products Page</h2>
      </div>
     </center>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-8 py-10 gap-8">
        { isLoading ? (
        <center>
          <h2 className="text-2xl p-5 text-slate-600 animate-pulse">
            Loading Products...
          </h2>
        </center>
      ) : (
          allProduct.map((p) => (
            <div 
              key={p.id} 
              className="group bg-white/90 backdrop-blur-sm p-5 shadow-lg shadow-slate-200/50 rounded-2xl hover:shadow-2xl hover:shadow-indigo-200/40 hover:-translate-y-2 transition-all duration-300 border border-slate-100"
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={p.images[0]} 
                  alt={p.title}
                  className="h-52 w-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <h2 className="text-xl font-bold text-slate-800 leading-snug line-clamp-1">{p.title}</h2>

              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2">₹ {p.price}</h3>

              <p className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full mt-2">{p.category.name}</p>

              <p className="text-sm mt-3 text-slate-600 leading-relaxed line-clamp-2">{p.description}</p>

             <Link to= {`/productDetails/${p.id}`}>
               <button className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-2.5 px-5 rounded-xl hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                Buy Now
              </button>
             </Link>
             <button onClick={()=>{
            setCartItems([...cartItems, p.id])
          }} className="active:bg-indigo-600  mt-4 w-full bg-white text-purple-600 font-semibold py-2.5 px-5 rounded-xl hover:from-indigo-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200">
                Add Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  )
}