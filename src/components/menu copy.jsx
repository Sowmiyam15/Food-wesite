
// // import React, { useState } from 'react';

// // const Menu = () => {
// //   const [cart, setCart] = useState({});
// //   const menuItems = [
// //     { id: 1, name: "Pizza", price: 12 },
// //     { id: 2, name: "Burger", price: 8 },
// //     { id: 3, name: "Pasta", price: 10 }
// //   ];

// //   const addToCart = (item) => {
// //     setCart((prevCart) => {
// //       const currentItem = prevCart[item.id] || { ...item, quantity: 0 };
// //       return {
// //         ...prevCart,
// //         [item.id]: { ...currentItem, quantity: currentItem.quantity + 1 }
// //       };
// //     });
// //   };

// //   const removeFromCart = (item) => {
// //     setCart((prevCart) => {
// //       const currentItem = prevCart[item.id];
// //       if (currentItem && currentItem.quantity > 1) {
// //         return {
// //           ...prevCart,
// //           [item.id]: { ...currentItem, quantity: currentItem.quantity - 1 }
// //         };
// //       } else {
// //         const { [item.id]: removedItem, ...restCart } = prevCart;
// //         return restCart;
// //       }
// //     });
// //   };

// //   const totalPrice = Object.values(cart).reduce(
// //     (acc, item) => acc + item.price * item.quantity,
// //     0
// //   );

// //   return (
// //     <section id="menu" className="py-8">
// //       <div className="container mx-auto">
// //         <h2 className="text-3xl font-bold text-center mb-8">Menu</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //           {menuItems.map((item) => (
// //             <div key={item.id} className="bg-white p-4 rounded-lg shadow-md text-center">
// //               <h3 className="text-xl font-bold mb-2">{item.name}</h3>
// //               <p className="text-lg mb-4">${item.price}</p>
// //               <button
// //                 onClick={() => addToCart(item)}
// //                 className="bg-blue-500 text-white px-4 py-2 rounded"
// //               >
// //                 Add to Cart
// //               </button>
// //             </div>
// //           ))}
// //         </div>

// //         <div className="mt-8">
// //           <h2 className="text-2xl font-bold">Cart</h2>
// //           {Object.keys(cart).length === 0 ? (
// //             <p>Your cart is empty</p>
// //           ) : (
// //             <ul>
// //               {Object.values(cart).map((item) => (
// //                 <li key={item.id} className="flex justify-between items-center my-2">
// //                   <span>{item.name} (x{item.quantity})</span>
// //                   <div>
// //                     <button
// //                       onClick={() => removeFromCart(item)}
// //                       className="bg-red-500 text-white px-2 py-1 rounded mr-2"
// //                     >
// //                       -
// //                     </button>
// //                     <button
// //                       onClick={() => addToCart(item)}
// //                       className="bg-blue-500 text-white px-2 py-1 rounded"
// //                     >
// //                       +
// //                     </button>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //           <div className="mt-4">
// //             <h3 className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</h3>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Menu;

// // import React, { useState } from 'react';
// // import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

// // // Sample image URLs; replace these with your actual image paths.
// // const menuImages = {
// //   1: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_640.jpg",
// //   2: "https://via.placeholder.com/100?text=Burger",
// //   3: "https://via.placeholder.com/100?text=Pasta",
// // };

// // const Menu = () => {
// //   const [cart, setCart] = useState({});
// //   const menuItems = [
// //     { id: 1, name: "Pizza", price: 12 },
// //     { id: 2, name: "Burger", price: 8 },
// //     { id: 3, name: "Pasta", price: 10 }
// //   ];

// //   const addToCart = (item) => {
// //     setCart((prevCart) => {
// //       const currentItem = prevCart[item.id] || { ...item, quantity: 0 };
// //       return {
// //         ...prevCart,
// //         [item.id]: { ...currentItem, quantity: currentItem.quantity + 1 }
// //       };
// //     });
// //   };

// //   const removeFromCart = (item) => {
// //     setCart((prevCart) => {
// //       const currentItem = prevCart[item.id];
// //       if (currentItem && currentItem.quantity > 1) {
// //         return {
// //           ...prevCart,
// //           [item.id]: { ...currentItem, quantity: currentItem.quantity - 1 }
// //         };
// //       } else {
// //         const { [item.id]: removedItem, ...restCart } = prevCart;
// //         return restCart;
// //       }
// //     });
// //   };

// //   const totalPrice = Object.values(cart).reduce(
// //     (acc, item) => acc + item.price * item.quantity,
// //     0
// //   );

// //   return (
// //     <section id="menu" className="py-8">
// //       <div className="container mx-auto">
// //         <Typography variant="h3" component="h2" align="center" gutterBottom>
// //           Menu
// //         </Typography>
// //         <Grid container spacing={4}>
// //           {menuItems.map((item) => (
// //             <Grid item xs={12} sm={6} md={4} key={item.id}>
// //               <Card className="transition-transform transform hover:scale-105" sx={{ maxWidth: 260 }}>
// //                 <CardMedia
// //                   component="img"
// //                   height="100" // Reduced height
// //                   image={menuImages[item.id]}
// //                   alt={item.name}
// //                 />
// //                 <CardContent>
// //                   <Typography variant="h5" component="div">
// //                     {item.name}
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     ${item.price}
// //                   </Typography>
// //                   <Button
// //                     onClick={() => addToCart(item)}
// //                     variant="contained"
// //                     color="primary"
// //                     sx={{ mt: 2 }}
// //                   >
// //                     Add to Cart
// //                   </Button>
// //                 </CardContent>
// //               </Card>
// //             </Grid>
// //           ))}
// //         </Grid>

// //         <div className="mt-8">
// //           <Typography variant="h4">Cart</Typography>
// //           {Object.keys(cart).length === 0 ? (
// //             <Typography>Your cart is empty</Typography>
// //           ) : (
// //             <ul>
// //               {Object.values(cart).map((item) => (
// //                 <li key={item.id} className="flex justify-between items-center my-2">
// //                   <span>{item.name} (x{item.quantity})</span>
// //                   <div>
// //                     <Button
// //                       onClick={() => removeFromCart(item)}
// //                       variant="contained"
// //                       color="error"
// //                       sx={{ mr: 1 }}
// //                     >
// //                       -
// //                     </Button>
// //                     <Button
// //                       onClick={() => addToCart(item)}
// //                       variant="contained"
// //                       color="primary"
// //                     >
// //                       +
// //                     </Button>
// //                   </div>
// //                 </li>
// //               ))}
// //             </ul>
// //           )}
// //           <div className="mt-4">
// //             <Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Menu;

// /
// // export default Menu;
// import React, { useState } from 'react';
// import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

// // Sample image URLs; replace these with your actual image paths.
// const menuImages = {
//   1: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_640.jpg",
//   2: "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_640.jpg",
//   3: "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg",
//   4:"https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg",
//   5:"https://cdn.pixabay.com/photo/2024/02/02/12/34/lettuce-8548078_640.jpg",
//   6:"https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703_640.jpg",
// };

// const Menu = () => {
//   const [cart, setCart] = useState({});
//   const menuItems = [
//     { id: 1, name: "Pizza", price: 12 },
//     { id: 2, name: "Burger", price: 8 },
//     { id: 3, name: "Pasta", price: 10 },
//     { id: 4, name: "cake", price: 17 },
//     { id: 5, name: "Salad", price: 13 },
//     { id: 6, name: "", price: 13 },
//   ];

//   const addToCart = (item) => {
//     setCart((prevCart) => {
//       const currentItem = prevCart[item.id] || { ...item, quantity: 0 };
//       return {
//         ...prevCart,
//         [item.id]: { ...currentItem, quantity: currentItem.quantity + 1 }
//       };
//     });
//   };

//   const removeFromCart = (item) => {
//     setCart((prevCart) => {
//       const currentItem = prevCart[item.id];
//       if (currentItem && currentItem.quantity > 1) {
//         return {
//           ...prevCart,
//           [item.id]: { ...currentItem, quantity: currentItem.quantity - 1 }
//         };
//       } else {
//         const { [item.id]: removedItem, ...restCart } = prevCart;
//         return restCart;
//       }
//     });
//   };

//   const totalPrice = Object.values(cart).reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0
//   );

//   return (
//     <section id="menu" className="py-8">
//       <div className="container mx-auto">
//         <Typography variant="h3" component="h2" align="center" gutterBottom>
//           Menu
//         </Typography>
//         <Grid container spacing={4}>
//           {menuItems.map((item) => (
//             <Grid item xs={12} sm={6} md={4} key={item.id}>
//               <Card 
//                 className="transition-transform transform hover:scale-105" 
//                 sx={{ maxWidth: 260, borderRadius: 2, boxShadow: 3 }}
//               >
//                 <CardMedia
//                   component="img"
//                   height="140"
//                   image={menuImages[item.id]}
//                   alt={item.name}
//                   sx={{ borderTopLeftRadius: 2, borderTopRightRadius: 2 }}
//                 />
//                 <CardContent>
//                   <Typography variant="h5" component="div">
//                     {item.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     ${item.price}
//                   </Typography>
//                   <Button
//                     onClick={() => addToCart(item)}
//                     variant="contained"
//                     color="primary"
//                     sx={{ mt: 2 }}
//                   >
//                     Add to Cart
//                   </Button>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>

//         <div className="mt-8">
//           <Typography variant="h4">Carttttttttttt</Typography>
//           {Object.keys(cart).length === 0 ? (
//             <Typography>Your cart is empty</Typography>
//           ) : (
//             <ul>
//               {Object.values(cart).map((item) => (
//                 <li key={item.id} className="flex justify-between items-center my-2">
//                   <span>{item.name} (x{item.quantity})</span>
//                   <div>
//                     <Button
//                       onClick={() => removeFromCart(item)}
//                       variant="contained"
//                       color="error"
//                       sx={{ mr: 1 }}
//                     >
//                       -
//                     </Button>
//                     <Button
//                       onClick={() => addToCart(item)}
//                       variant="contained"
//                       color="primary"
//                     >
//                       +
//                     </Button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div className="mt-4">
//             <Typography variant="h5">Total: ${totalPrice.toFixed(2)}</Typography>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Menu;
import React from 'react';

const Nav = ({ cart }) => {
  // Calculate total items in the cart
  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Food Website</h1>
        <ul className="flex space-x-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#menu" className="hover:text-gray-300">Menu</a></li>
          <li>
            <a href="#cart" className="hover:text-gray-300 flex items-center">
              {/* Display total items in the cart */}
              Shopping Cart
              {totalItems > 0 && (
                <span className="ml-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">
                  {totalItems}
                </span>
              )}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
