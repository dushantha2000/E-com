import React, { useState, useEffect } from 'react';
import { Bell, ShoppingCart, User, Search, ChevronRight } from 'lucide-react';
import '../index.css';
import SliderOneImg from "../assets/images/banner-1.jpg";
import ProductImg  from "../assets/images/Mens/eight.jpg";

// Custom Card Components
const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = "" }) => (
  <div className={`p-4 ${className}`}>
    {children}
  </div>
);

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const products = [
    { id: 1, name: "Classic Denim Jacket", price: 89.99, originalPrice: 120, tag: "new" },
    { id: 2, name: "Urban Street Hoodie", price: 59.99, originalPrice: 80, tag: "trending" },
    { id: 3, name: "Premium Cotton T-Shirt", price: 29.99, originalPrice: 45, tag: "sale" },
    { id: 4, name: "Slim Fit Chinos", price: 69.99, originalPrice: 90, tag: "new" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Announcement Bar */}
      <div className="bg-black text-white py-2 text-center">
        <p className="text-sm">Free Shipping on Orders Over $100 | Shop Now</p>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold">FASHION</div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-600 transition-colors">Men</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Women</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Kids</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Sale</a>
            </div>

            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
              <User className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
              <div className="relative">
                <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-blue-600 transition-colors" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[70vh] bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <img
          src={SliderOneImg}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Discover Your Style</h1>
            <p className="text-xl mb-8">Explore our new collection of premium fashion items.</p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group overflow-hidden">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={ProductImg}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {product.tag && (
                    <span className="absolute top-4 right-4 bg-black text-white px-3 py-1 text-sm uppercase">
                      {product.tag}
                    </span>
                  )}
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold">${product.price}</span>
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                  </div>
                  <button className="w-full mt-4 bg-black text-white py-2 rounded-full hover:bg-blue-600 transition-colors">
                    Add to Cart
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center text-center p-6">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Free Delivery</h3>
                <p className="text-gray-600">On orders above $100</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center p-6">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600">Get help when you need it</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center p-6">
              <div>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChevronRight className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Returns</h3>
                <p className="text-gray-600">30-day return policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">FASHION</h4>
              <p className="text-gray-400">Your ultimate destination for premium fashion and lifestyle products.</p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Men</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Women</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kids</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Shipping</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">1234 Fashion St</li>
                <li className="text-gray-400">Fashion City, FC 12345</li>
                <li className="text-gray-400">contact@fashion.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FASHION. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;