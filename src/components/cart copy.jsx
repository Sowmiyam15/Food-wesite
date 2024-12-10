// import React from 'react';

// const Cart = ({ cart = {} }) => {
//   const total = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

//   return (
//     <section id="cart" className="py-8">
//       <div className="container mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>
//         <ul>
//           {Object.values(cart).map((item) => (
//             <li key={item.id} className="flex justify-between mb-4">
//               <span>{item.name} (x{item.quantity})</span>
//               <span>${(item.price * item.quantity).toFixed(2)}</span>
//             </li>
//           ))}
//         </ul>
//         <div className="text-right font-bold text-xl">
//           Total: ${total}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Cart;

import React from 'react';
import { Typography, Button } from '@mui/material';

const Cart = ({ cart, setCart }) => {
  const totalPrice = Object.values(cart).reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <section id="cart" className="py-8">
      <div className="container mx-auto">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Shopping Cart
        </Typography>
        {Object.keys(cart).length === 0 ? (
          <Typography>Your cart is empty</Typography>
        ) : (
          <ul>
            {Object.values(cart).map((item) => (
              <li key={item.id} className="flex justify-between items-center my-2">
                <span>{item.name} (x{item.quantity})</span>
                <div>
                  <Button onClick={() => setCart((prev) => ({ ...prev, [item.id]: { ...item, quantity: item.quantity - 1 } }))} variant="contained" color="error" sx={{ mr: 1 }}>
                    -
                  </Button>
                  <Button onClick={() => setCart((prev) => ({ ...prev, [item.id]: { ...item, quantity: item.quantity + 1 } }))} variant="contained" color="primary">
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-4">
          <Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
        </div>
      </div>
    </section>
  );
};

export default Cart;