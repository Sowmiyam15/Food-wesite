import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/Logo.jpg'; // Import the logo

const Nav = ({ cart, toggleCart }) => {
  const navigate = useNavigate(); // Initialize navigate

  // Calculate total items in the cart
  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 mr-2" /> 
          <h1 className="text-xl font-bold">Food Website</h1>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
          <li><a href="#signup" className="hover:text-gray-300">Sign Up</a></li>
          <li>
            <a onClick={toggleCart} className="hover:text-gray-300 flex items-center cursor-pointer">
              <FaShoppingCart className="text-lg" />
              {totalItems > 0 && (
                <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {totalItems}
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
      {/* Mobile view */}
      <div className="md:hidden flex flex-col space-y-2 mt-2">
        <a href="#home" className="block hover:text-gray-300">Home</a>
        <a href="#about" className="block hover:text-gray-300">About Us</a>
        <a href="#menu" className="block hover:text-gray-300">Menu</a>
        <a href="#signup" className="block hover:text-gray-300">Sign Up</a>
        <a onClick={toggleCart} className="flex items-center cursor-pointer">
          <FaShoppingCart className="text-lg" />
          {totalItems > 0 && (
            <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
              {totalItems}
            </span>
          )}
        </a>
      </div>
    </nav>
  );
};

export default Nav;
