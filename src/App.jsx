
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
// import Nav from './components/navbar';
// import Home from './components/home';
// import Menu from './components/menu';
// import Cart from './components/cart';
// import Footer from './components/Footer';
// import About from './components/about';
// import Contact from './components/Contact';

// const App = () => {
//   const [cart, setCart] = useState({});
//   const [isCartVisible, setCartVisible] = useState(false); // State to control cart visibility

//   const toggleCart = () => {
//     setCartVisible((prev) => !prev); // Toggle cart visibility
//   };

//   return (
//     <div>
//       {/* Pass cart, setCart, and toggleCart to Nav */}

//       <Nav cart={cart} toggleCart={toggleCart} />
//       {/* Conditionally render Cart based on isCartVisible */}
//       {isCartVisible && <Cart cart={cart} setCart={setCart} toggleCart={toggleCart} />}

//       <Home />
//       <About/>
//       <Menu cart={cart} setCart={setCart} />
//       <Footer />
    
//       <Router>
   
//       <Routes>
//       <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Router>
    
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Nav from './components/navbar';
// import Home from './components/home';
// import Menu from './components/menu';
// import Cart from './components/cart';
// import Footer from './components/Footer';
// import About from './components/about';
// import Contact from './components/Contact';

// const App = () => {
//   const [cart, setCart] = useState({});
//   const [isCartVisible, setCartVisible] = useState(false); // State to control cart visibility

//   const toggleCart = () => {
//     setCartVisible((prev) => !prev); // Toggle cart visibility
//   };

//   return (
   
//       <div>
//         {/* Pass cart, setCart, and toggleCart to Nav */}
//         <Nav cart={cart} toggleCart={toggleCart} />
        
//         {/* Conditionally render Cart based on isCartVisible */}
//         {isCartVisible && <Cart cart={cart} setCart={setCart} toggleCart={toggleCart} />}

//         <Home />
//         <About />
//         <Menu cart={cart} setCart={setCart} />

//         <Footer />
        
//         {/* Define Routes here for routing to work correctly */}
//         <Router>
//         <Routes>
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//         </Router>
//       </div>
   
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/navbar';
import Home from './components/home';
import Menu from './components/menu';
import Cart from './components/cart';
import Footer from './components/Footer';
import About from './components/about';
import SignupForm from './components/Contact';

const App = () => {
  const [cart, setCart] = useState({});
  const [isCartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible((prev) => !prev);
  };

  return (
    <Router> {/* Place Router here at the top level */}
      <div>
        <Nav cart={cart} toggleCart={toggleCart} />
        
        {/* Sections rendered on the same page */}
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="menu"><Menu cart={cart} setCart={setCart} /></section>
        <section id="signup"></section>


        {isCartVisible && <Cart cart={cart} setCart={setCart} toggleCart={toggleCart} />}
<SignupForm/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

