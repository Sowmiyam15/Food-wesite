import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Grid } from '@mui/material';

// Sample image URLs for menu items.
const menuImages = {
  1: "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_640.jpg",
  2: "https://cdn.pixabay.com/photo/2023/09/25/22/08/ai-generated-8276129_640.jpg",
  3: "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg",
  4: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552_640.jpg",
  5: "https://cdn.pixabay.com/photo/2024/02/02/12/34/lettuce-8548078_640.jpg",
  6: "https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703_640.jpg",
  7: "https://images.pexels.com/photos/13749940/pexels-photo-13749940.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  8: "https://images.pexels.com/photos/29042360/pexels-photo-29042360/free-photo-of-gourmet-pancakes-with-fresh-fruit-toppings.jpeg?auto=compress&cs=tinysrgb&w=600",
  9: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=600",
  10: "https://images.pexels.com/photos/29042371/pexels-photo-29042371/free-photo-of-delicious-belgian-waffle-with-berries-and-whipped-cream.jpeg?auto=compress&cs=tinysrgb&w=600",
  11: "https://images.pexels.com/photos/1860208/pexels-photo-1860208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  12: "https://images.pexels.com/photos/18613267/pexels-photo-18613267/free-photo-of-cake-with-fruit.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
};

const Menu = ({ cart, setCart }) => {
  const menuItems = [
    { id: 1, name: "Italian Pizza", price: 12.00, image: menuImages[1] },
    { id: 2, name: "Classic Burger", price: 8.00, image: menuImages[2] },
    { id: 3, name: "Cheesy Pasta", price: 10.00, image: menuImages[3] },
    { id: 4, name: "Dark Chocolate Cake", price: 17.00, image: menuImages[4] },
    { id: 5, name: "Chicken Salad", price: 13.00, image: menuImages[5] },
    { id: 6, name: "Steak", price: 20.00, image: menuImages[6] },
    { id: 7, name: "Beef Steak", price: 80.00, image: menuImages[7] },
    { id: 8, name: "Mixed Fruit Pancake", price: 80.00, image: menuImages[8] },
    { id: 9, name: "Smoked Beef", price: 45.00, image: menuImages[9] },
    { id: 10, name: "Honey Waffles", price: 49.00, image: menuImages[10] },
    { id: 11, name: "Burrito Bowl", price: 49.00, image: menuImages[11] },
    { id: 12, name: "Chocolate Strawberry Cake", price: 68.00, image: menuImages[12] },
  ];

  const addToCart = (item) => {
    setCart((prevCart) => {
      const currentItem = prevCart[item.id] || { ...item, quantity: 0 };
      return {
        ...prevCart,
        [item.id]: { ...currentItem, quantity: currentItem.quantity + 1 },
      };
    });
  };

  return (
    <section id="menu" className="py-8" style={{ backgroundColor: '#f4f4f4' }}>
      <div className="container mx-auto">
        <Typography variant="h3" component="h2" align="center" gutterBottom style={{ color: '#333', fontWeight: 'bold' }}>
          Menu
        </Typography>
        <Grid container spacing={4}>
          {menuItems.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card 
                className="transition-transform transform hover:scale-105" 
                sx={{ 
                  height: 400,  // Increased height of the Card
                  borderRadius: 2, 
                  boxShadow: 3,
                  backgroundColor: '#ffffff',
                  border: '1px solid #ddd',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  '&:hover': {
                    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                  },
                }}
              >
                <CardMedia 
                  component="img" 
                  height="160"  // Increased height of the image
                  image={item.image} 
                  alt={item.name} 
                  sx={{ 
                    borderTopLeftRadius: 2, 
                    borderTopRightRadius: 2,
                    objectFit: 'cover',
                  }} 
                />
                <CardContent sx={{ textAlign: 'center', flexGrow: 1 }}>
                  <Typography variant="h5" component="div" style={{ color: '#e91e63', fontWeight: '600' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>
                    ${item.price.toFixed(2)}
                  </Typography>

                  {/* Add to Cart Button */}
                  <Button 
                    onClick={() => addToCart(item)} 
                    variant="contained" 
                    color="secondary"
                    size="large" 
                    sx={{ 
                      backgroundColor: '#ff5722', 
                      '&:hover': { backgroundColor: '#e64a19' },
                      marginTop: '10px',
                      padding: '12px 30px',  // Increased padding for larger button size
                      fontSize: '1.1rem', // Larger font size for better visibility
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Menu;
