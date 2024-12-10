import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-500 to-blue-500 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* About Us Section */}
          <div className="mb-4 md:w-1/4">
            <h3 className="text-lg font-bold">About Us</h3>
            <p className="text-gray-200">
              We are dedicated to bringing you the best food experience, combining flavors and freshness to create delightful meals.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-4 md:w-1/4">
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="text-gray-200">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#menu" className="hover:underline">Menu</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="mb-4 md:w-1/4">
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-gray-200 hover:text-white" size={24} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-gray-200 hover:text-white" size={24} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-200 hover:text-white" size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-gray-200 hover:text-white" size={24} />
              </a>
            </div>
          </div>

          {/* Newsletter Subscription Section */}
          <div className="mb-4 md:w-1/4">
            <h3 className="text-lg font-bold">Subscribe to Our Newsletter</h3>
            <form className="flex mt-2">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 p-2 rounded-l-md border border-gray-200 bg-white text-black focus:outline-none focus:ring focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-400 text-white px-4 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Contact Us</h3>
          <p className="text-gray-200">Email: contact@yourfoodwebsite.com</p>
          <p className="text-gray-200">Phone: (123) 456-7890</p>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 mt-6 pt-4 text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} Your Food Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
