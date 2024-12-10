
import React from "react";

const restaurants = [
  { id: 1, name: "Pizza Palace", description: "Best pizza in town" },
  { id: 2, name: "Burger House", description: "Delicious burgers" },
];

const RestaurantList = () => {
  return (
    <div className="container mx-auto py-10">
      <h2 className="text-2xl font-bold mb-4">Restaurants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{restaurant.name}</h3>
            <p className="text-gray-600">{restaurant.description}</p>
            {/* <a href={/restaurant/${restaurant.id}} className="text-indigo-600 mt-2 block">View Menu</a> */}

          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantList;
