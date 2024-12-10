

// import React, { useRef, useState } from 'react';
// // import '../index.css';
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';     
// import 'swiper/css/navigation';



// // import required modules
// import { Pagination, Navigation ,Mousewheel} from 'swiper/modules';
// import { Card} from '@mui/material';
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import { FaLeaf, FaUtensils, FaHeart } from 'react-icons/fa';


//  function About(){
//   const [swiperRef, setSwiperRef] = useState(null);

//   return (
//     <>
//     <section id="about">
   
//     <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-8 h-[500px]">
//       {/* Left Side Image */}
//       <div className="flex-1 flex justify-center items-center h-72 md:h-auto overflow-hidden rounded-xl shadow-lg bg-white transform transition duration-500 hover:scale-105 max-w-lg">
//         <img
//           src="https://i.pinimg.com/564x/dc/6c/bd/dc6cbd2bc4684f8a9e7f111068b41fed.jpg"
//           alt="Gourmet food display"
//           className="w-full h-[400px] object-cover rounded-xl"
//         />
//       </div>

//       {/* Right Side Content */}
//       <div className="flex-1 mt-8 md:mt-0 md:ml-10 text-center md:text-left px-4 md:px-8">
//         {/* Animated Heading */}
//         <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-red-500 to-pink-600 animate-pulse drop-shadow-md mb-6">
//           Welcome to Our Culinary World
//         </h1>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           At [Your Brand], we create unforgettable dining experiences that blend passion, artistry, and a dedication to fresh, high-quality ingredients. Every dish tells a story, crafted with skill and a love for culinary exploration.
//         </p>

//         {/* Highlight Section */}
//         <div className="flex flex-col md:flex-row justify-around mt-10 space-y-8 md:space-y-0 md:space-x-6">
//           {/* Card 1 */}
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
//             <FaLeaf className="text-green-500 text-4xl mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800">Fresh Ingredients</h3>
//             <p className="mt-2 text-gray-600">
//               We source ingredients from trusted farms to ensure every dish is as fresh as it is flavorful.
//             </p>
//           </div>

//           {/* Card 2 */}
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
//             <FaUtensils className="text-red-500 text-4xl mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800">Creative Recipes</h3>
//             <p className="mt-2 text-gray-600">
//               Each dish combines traditional techniques with bold, creative flavors to surprise and delight.
//             </p>
//           </div>

//           {/* Card 3 */}
//           <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
//             <FaHeart className="text-pink-500 text-4xl mb-4" />
//             <h3 className="text-2xl font-semibold text-gray-800">Customer First</h3>
//             <p className="mt-2 text-gray-600">
//               Our mission is to make each visit memorable, ensuring satisfaction with every bite.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>

//       <Card className=''>
//       <div className='!h-fit !w-4/5 ml-36'>
//       <div className='flex justify-between m-6 font-bold text-2xl '>
      
//         <div>What's on Your Mind?

//         </div>
     
//         <div><KeyboardArrowLeftIcon /><KeyboardArrowRightIcon/></div>
      
//       </div>
      
//       <Swiper
//         onSwiper={setSwiperRef}
//         slidesPerView={7}
//         mousewheel={true}
//         pagination={{
//           type:"none"
//         }}
//        navigation={false}

//         modules={[Pagination, Navigation,Mousewheel]}
//         className="mySwiper"
//       >
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f"></img></SwiperSlide>
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387"></img></SwiperSlide>
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7"></img></SwiperSlide>
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f"></img></SwiperSlide>
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/36184033ebef97d27a85fa3af5c1d403"></img></SwiperSlide>
//         {/* <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png"></img></SwiperSlide> */}
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/d0884e09ef431ee610e54a0bb2dfecd5"></img></SwiperSlide>
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076"></img></SwiperSlide>
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png"></img></SwiperSlide>
       
//         <SwiperSlide><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png"></img></SwiperSlide>
        
//       </Swiper></div>  </Card>

 


//     </section>
//       </> 
//     );
//   };

//   export default About;

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Mousewheel } from 'swiper/modules';
import { Card } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { FaLeaf, FaUtensils, FaHeart } from 'react-icons/fa';

function About() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section id="about">
      <div className="flex flex-col md:flex-row items-center justify-center bg-gradient-to-b from-gray-100 to-gray-300 p-8">
        {/* Left Side Image */}
        <div className="flex-1 flex justify-center items-center overflow-hidden rounded-xl shadow-lg bg-white transform transition duration-500 hover:scale-105 max-w-lg mb-8 md:mb-0">
          <img
            src="https://i.pinimg.com/564x/dc/6c/bd/dc6cbd2bc4684f8a9e7f111068b41fed.jpg"
            alt="Gourmet food display"
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        {/* Right Side Content */}
        <div className="flex-1 text-center md:text-left px-4 md:px-8">
          {/* Animated Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-red-500 to-pink-600 animate-pulse drop-shadow-md mb-6">
            Welcome to Our Culinary World
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At [Your Brand], we create unforgettable dining experiences that blend passion, artistry, and a dedication to fresh, high-quality ingredients. Every dish tells a story, crafted with skill and a love for culinary exploration.
          </p>

          {/* Highlight Section */}
          <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0 md:space-x-6">
            {/* Card 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <FaLeaf className="text-green-500 text-4xl mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Fresh Ingredients</h3>
              <p className="mt-2 text-gray-600">
                We source ingredients from trusted farms to ensure every dish is as fresh as it is flavorful.
              </p>
            </div>

            {/* Card 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <FaUtensils className="text-red-500 text-4xl mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Creative Recipes</h3>
              <p className="mt-2 text-gray-600">
                Each dish combines traditional techniques with bold, creative flavors to surprise and delight.
              </p>
            </div>

            {/* Card 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
              <FaHeart className="text-pink-500 text-4xl mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800">Customer First</h3>
              <p className="mt-2 text-gray-600">
                Our mission is to make each visit memorable, ensuring satisfaction with every bite.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <div className="!h-fit !w-4/5 mx-auto">
          <div className="flex justify-between m-6 font-bold text-2xl">
            <div>What's on Your Mind?</div>
            <div>
              <KeyboardArrowLeftIcon />
              <KeyboardArrowRightIcon />
            </div>
          </div>

          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={7}
            mousewheel={true}
            pagination={{ type: "none" }}
            navigation={false}
            modules={[Pagination, Navigation, Mousewheel]}
            className="mySwiper"
          >
            {/* Swiper Slides */}
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/5dd234f7decdac4b4f71a2ff1408e10f" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/e76b511935016406e6ebc11dd7593387" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/89f3fec702aef5acbb51a6cbc284b3f7" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/8322f6d6df488dc1f5a6674cfe863f0f" alt="Slide 4" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/36184033ebef97d27a85fa3af5c1d403" alt="Slide 5" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/d0884e09ef431ee610e54a0bb2dfecd5" alt="Slide 6" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/rng/md/carousel/production/31f03222ea978aef3b10d386729eb076" alt="Slide 7" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pastry.png" alt="Slide 8" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Momos.png" alt="Slide 9" />
            </SwiperSlide>
          </Swiper>
        </div>
      </Card>
    </section>
  );
}

export default About;
