import  { useState } from 'react';
import { Search, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { Link } from "react-router-dom";
export default function Header({cartshownumber}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          Dastaq
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-800">
            <Search size={24} />
          </button>
          <Link to="/cart" className="relative text-gray-600 hover:text-gray-800">
            <ShoppingCart size={24} />
            {cartshownumber > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartshownumber}
              </span>
            )}
          </Link>
          <Link to="/" className="text-gray-600 hover:text-gray-800">
            <User size={24} />
          </Link>
          <div className="relative">
            <button 
              className="flex items-center text-gray-600 hover:text-gray-800"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Account
              <ChevronDown size={20} className="ml-1" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                <Link to="/user" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Users</Link>
                <Link to="/order" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</Link>
                <Link to="/product" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Products</Link>
                <button 
                  onClick={() => console.log('Logout clicked')}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>


        <button 
          className="md:hidden text-gray-600 hover:text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2">
          <Link href="/search" className="flex items-center py-2 text-gray-600 hover:text-gray-800">
            <Search size={20} className="mr-2" /> Search
          </Link>
          <Link href="/cart" className="relative flex items-center py-2 text-gray-600 hover:text-gray-800">
            <ShoppingCart size={20} className="mr-2" /> Cart
            {cartshownumber > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartshownumber}
              </span>
            )}
          </Link>
          <Link href="/profile" className="flex items-center py-2 text-gray-600 hover:text-gray-800">
            <User size={20} className="mr-2" /> Profile
          </Link>
          <Link href="/users" className="block py-2 text-gray-600 hover:text-gray-800">Users</Link>
          <Link href="/orders" className="block py-2 text-gray-600 hover:text-gray-800">Orders</Link>
          <Link href="/products" className="block py-2 text-gray-600 hover:text-gray-800">Products</Link>
          <button 
            onClick={() => console.log('Logout clicked')} 
            className="block w-full text-left py-2 text-gray-600 hover:text-gray-800"
          >
            Logout
          </button>
        </nav>
      )}
    </header>
  );
}

