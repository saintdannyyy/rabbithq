import Layout from "@/components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ChevronDown } from "lucide-react";

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const categories = [
    { id: "all", name: "All Products" },
    { id: "live", name: "Live Rabbits" },
    { id: "meat", name: "Rabbit Meat" },
    { id: "eggs", name: "Eggs" },
  ];

  const allProducts = [
    {
      id: 1,
      name: "Fresh Rabbit Meat",
      category: "meat",
      price: 24.99,
      stock: 15,
      image: "https://images.unsplash.com/photo-1543914636-71f1c0b7949f?w=500&h=500&fit=crop",
      description: "Premium quality, ethically raised rabbit meat",
    },
    {
      id: 2,
      name: "Live Rabbits",
      category: "live",
      price: 49.99,
      stock: 8,
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4d4b3f0?w=500&h=500&fit=crop",
      description: "Healthy, well-bred rabbits from our farm",
    },
    {
      id: 3,
      name: "Organic Farm Eggs",
      category: "eggs",
      price: 6.99,
      stock: 50,
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd5ccf1?w=500&h=500&fit=crop",
      description: "Fresh, nutrient-rich organic eggs",
    },
    {
      id: 4,
      name: "Rabbit Meat Pack (2kg)",
      category: "meat",
      price: 44.99,
      stock: 5,
      image: "https://images.unsplash.com/photo-1596103442097-8575f47a7c8f?w=500&h=500&fit=crop",
      description: "Bulk rabbit meat pack for families",
    },
    {
      id: 5,
      name: "Premium Live Rabbit Pair",
      category: "live",
      price: 89.99,
      stock: 3,
      image: "https://images.unsplash.com/photo-1585110396000-c9ffd4d4b3f0?w=500&h=500&fit=crop",
      description: "Breeding pair of premium rabbits",
    },
    {
      id: 6,
      name: "Organic Egg Box (24)",
      category: "eggs",
      price: 18.99,
      stock: 20,
      image: "https://images.unsplash.com/photo-1599599810694-b5ac4dd5ccf1?w=500&h=500&fit=crop",
      description: "Dozen eggs from our happy hens",
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">Shop</h1>
          <p className="text-slate-600 mt-2">
            Explore our premium rabbit products and live animals
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1">
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200 sticky top-20">
              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold text-primary mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === cat.id
                          ? "bg-primary text-white font-medium"
                          : "text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="font-semibold text-primary mb-4">Sort By</h3>
                <div className="space-y-2">
                  {[
                    { id: "featured", name: "Featured" },
                    { id: "price-low", name: "Price: Low to High" },
                    { id: "price-high", name: "Price: High to Low" },
                    { id: "name", name: "Name: A to Z" },
                  ].map((sort) => (
                    <button
                      key={sort.id}
                      onClick={() => setSortBy(sort.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        sortBy === sort.id
                          ? "bg-primary text-white font-medium"
                          : "text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {sort.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-slate-600">
                Showing {sortedProducts.length} products
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg overflow-hidden border border-slate-200 hover:border-primary transition-all hover:shadow-lg group"
                >
                  {/* Product Image */}
                  <div className="relative h-64 bg-slate-200 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {product.category.charAt(0).toUpperCase() +
                        product.category.slice(1)}
                    </div>
                    {product.stock < 5 && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Low Stock
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {product.description}
                    </p>

                    {/* Stock Status */}
                    <div className="mb-4">
                      <p className="text-xs text-slate-500">
                        Stock Available:{" "}
                        <span className="font-semibold">{product.stock}</span>
                      </p>
                      <div className="w-full bg-slate-200 rounded-full h-2 mt-2">
                        <div
                          className="bg-accent h-2 rounded-full"
                          style={{ width: `${(product.stock / 50) * 100}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Price and Action */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.stock > 0 ? (
                        <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          <ShoppingCart className="w-4 h-4" />
                          Add to Cart
                        </button>
                      ) : (
                        <button
                          disabled
                          className="inline-flex items-center gap-2 bg-slate-300 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed"
                        >
                          Out of Stock
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
