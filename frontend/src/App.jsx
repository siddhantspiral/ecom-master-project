import React, { useState } from 'react';

export default function App() {
  const [products] = useState([
    { id: 1, name: "Premium Wireless Headphones", price: 2999, rating: 4.5, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Minimalist Mechanical Keyboard", price: 4500, rating: 4.8, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Smart Fitness Watch v2", price: 3499, rating: 4.2, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Ergonomic Matte Gaming Mouse", price: 1899, rating: 4.6, image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60" }
  ]);

  const [cartCount, setCartCount] = useState(0);

  return (
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
        {/* NAVIGATION BAR */}
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-indigo-600">🛍️ E-Com Store</span>
            </div>

            <div className="hidden md:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input type="text" placeholder="Search products..." className="w-full bg-gray-100 pl-4 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              </div>
            </div>

            <div className="flex items-center gap-6">
              <button className="relative p-2 text-gray-600 hover:text-indigo-600 transition font-semibold">
                🛒 Cart
                {cartCount > 0 && (
                    <span className="ml-1 bg-indigo-600 text-white text-xs font-bold rounded-full px-2 py-0.5 shadow-md">{cartCount}</span>
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* HERO BANNER */}
        <header className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-12 px-4 sm:px-6 lg:px-8 text-center shadow-inner">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold sm:text-5xl">Launch Your Digital Store</h1>
            <p className="mt-4 text-indigo-100 text-lg">Connected dynamically to an enterprise Java Spring Boot backend server architecture.</p>
          </div>
        </header>

        {/* PRODUCT DISPLAY GRID */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-2 mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">🔥 Trending Artifacts</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition duration-200 flex flex-col">
                  <div className="relative bg-gray-100 h-48 w-full overflow-hidden">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 min-h-[40px]">{product.name}</h3>

                    <div className="flex items-center gap-1 mt-2 mb-4">
                      <span className="text-xs font-medium text-amber-500">⭐ {product.rating}</span>
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center text-indigo-600 font-bold">
                        <span>₹{product.price}</span>
                      </div>
                      <button onClick={() => setCartCount(prev => prev + 1)} className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </main>
      </div>
  );
}