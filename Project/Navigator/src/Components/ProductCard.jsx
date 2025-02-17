import React, { useState } from "react";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "iPhone 14", category: "Mobile", price: 799, img: "iPhone 14" },
  { id: 2, name: "Samsung S23", category: "Mobile", price: 899, img: "Samsung S23" },
  { id: 3, name: "MacBook Pro", category: "Laptop", price: 1299, img: "MacBook Pro" },
  { id: 4, name: "Dell XPS 15", category: "Laptop", price: 1199, img: "Dell XPS 15" },
  { id: 5, name: "Sony Headphones", category: "Accessories", price: 199, img: "Sony Headphones" },
  { id: 6, name: "Logitech Mouse", category: "Accessories", price: 49, img: "Logitech Mouse" },
  { id: 7, name: "iPhone 13", category: "Mobile", price: 699, img: "iPhone 13" },
  { id: 8, name: "Google Pixel 7", category: "Mobile", price: 799, img: "Google Pixel 7" },
  { id: 9, name: "Asus ROG", category: "Laptop", price: 1499, img: "Asus ROG" },
  { id: 10, name: "Lenovo ThinkPad", category: "Laptop", price: 1099, img: "Lenovo ThinkPad" },
  { id: 11, name: "JBL Speaker", category: "Accessories", price: 129, img: "JBL Speaker" },
  { id: 12, name: "Bose Headphones", category: "Accessories", price: 299, img: "Bose Headphones" },
  { id: 13, name: "Samsung Galaxy Tab", category: "Laptop", price: 799, img: "Samsung Galaxy Tab" },
  { id: 14, name: "iPad Pro", category: "Laptop", price: 999, img: "iPad Pro" },
  { id: 15, name: "AirPods Pro", category: "Accessories", price: 249, img: "AirPods Pro" },
  { id: 16, name: "Apple Watch", category: "Accessories", price: 399, img: "Apple Watch" },
  { id: 17, name: "Oculus Quest", category: "Accessories", price: 499, img: "Oculus Quest" },
  { id: 18, name: "Microsoft Surface Pro", category: "Laptop", price: 1299, img: "Microsoft Surface Pro" },
  { id: 19, name: "Xiaomi Mi 11", category: "Mobile", price: 799, img: "Xiaomi Mi 11" },
  { id: 20, name: "OnePlus 9", category: "Mobile", price: 749, img: "OnePlus 9" },
  { id: 21, name: "Sony PS5", category: "Accessories", price: 499, img: "Sony PS5" }
];

export default function ProductCard() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("low");

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((product) => (category ? product.category === category : true))
    .sort((a, b) => (sort === "low" ? a.price - b.price : b.price - a.price));

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder="Search Product..."
          className="border p-4 rounded-lg w-full md:w-1/3 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="border p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Mobile">Mobile</option>
          <option value="Laptop">Laptop</option>
          <option value="Accessories">Accessories</option>
        </select>
        <select
          className="border p-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <motion.div key={product.id} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <div className="p-6 border rounded-3xl shadow-xl bg-white text-center hover:shadow-2xl transition-all">
              {/* Image ki jagah text placeholder */}
              <div className="w-full h-48 bg-gray-200 text-xl flex items-center justify-center text-gray-600 font-semibold rounded-lg mb-4">
                {product.img}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-500 mb-2">{product.category}</p>
              <p className="text-2xl font-bold text-blue-600 mb-4">₹{product.price}</p> {/* ₹ symbol added */}
              <button className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition-all transform hover:scale-105">
                Buy Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
