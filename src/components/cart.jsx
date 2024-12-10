

import React, { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart, setCart, toggleCart }) => {
  const cartRef = useRef(); // Create a ref for the cart
  const [paymentMethod, setPaymentMethod] = useState('creditCard'); 
  // Close the cart when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        toggleCart(); 
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleCart]);

  // Calculate total price
  const totalPrice = Object.values(cart).reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemove = (itemId) => {
    setCart((prevCart) => {
      const newCart = { ...prevCart };
      delete newCart[itemId];
      return newCart;
    });

    // Show toast notification
    toast.success(`Removed ${cart[itemId].name} from your cart.`);
  };

  const handleIncrease = (itemId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [itemId]: {
        ...prevCart[itemId],
        quantity: prevCart[itemId].quantity + 1,
      },
    }));
  };

  const handleDecrease = (itemId) => {
    setCart((prevCart) => {
      const newQuantity = prevCart[itemId].quantity - 1;
      if (newQuantity <= 0) {
        const newCart = { ...prevCart };
        delete newCart[itemId];
        return newCart;
      }
      return {
        ...prevCart,
        [itemId]: {
          ...prevCart[itemId],
          quantity: newQuantity,
        },
      };
    });
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  return (
    <div ref={cartRef} className="fixed right-0 top-0 h-full w-1/3 bg-white shadow-lg overflow-y-auto p-4 z-50">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
          ×
        </button>
      </div>
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {Object.entries(cart).map(([itemId, item]) => (
            <div key={itemId} className="flex justify-between items-center border-b py-2">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
              <div className="flex-1">
                <p className="font-semibold">{item.name}</p>
                <div className="flex items-center">
                  <button
                    className="bg-gray-300 text-gray-700 px-2 rounded-l"
                    onClick={() => handleDecrease(itemId)}
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    className="bg-gray-300 text-gray-700 px-2 rounded-r"
                    onClick={() => handleIncrease(itemId)}
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-500">${item.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center">
                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <button
                  className="ml-4 text-red-500 hover:text-red-700"
                  onClick={() => handleRemove(itemId)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="mt-4 font-bold">
            Total: ${totalPrice.toFixed(2)}
          </div>

          {/* Payment Method Section */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Payment Method</h3>
            <div className="mt-2">
              <label className="block">
                <input
                  type="radio"
                  value="creditCard"
                  checked={paymentMethod === 'creditCard'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="paypal"
                  checked={paymentMethod === 'paypal'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                PayPal
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="applePay"
                  checked={paymentMethod === 'applePay'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Apple Pay
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="googlePay"
                  checked={paymentMethod === 'googlePay'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Google Pay
              </label>
              <label className="block">
                <input
                  type="radio"
                  value="cashOnDelivery"
                  checked={paymentMethod === 'cashOnDelivery'}
                  onChange={handlePaymentMethodChange}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>
          </div>

          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Checkout
          </button>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Cart;
