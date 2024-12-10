import React from 'react';
import { motion } from 'framer-motion';
import backgroundImage from '../assets/1.jpg'; 

const Home = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white relative px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Food Heaven!
      </motion.h1>

      <motion.p
        className="text-lg sm:text-xl mb-4 text-center max-w-xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Discover delicious meals crafted with love. Your next meal is just a click away!
      </motion.p>

      <motion.button
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg text-lg font-bold transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="#menu">Order Now</a>
      </motion.button>

      <motion.div
        className="absolute bottom-0 left-0 right-0 flex justify-center items-center pb-8"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {/* Optional: Add any additional content here */}
      </motion.div>
    </div>
  );
};

export default Home;
