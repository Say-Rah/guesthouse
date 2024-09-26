'use client'; // This ensures that the component runs client-side

import 'swiper/css';
import 'swiper/css/navigation'; // If you're using navigation buttons
import 'swiper/css/pagination'; // If you're using pagination indicators
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';



export default function Header() {
  return (
    <div className="bg-white p-0">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        
        {/* Text Section */}
        <div className="md:w-1/2 p-6 md:mt-10">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Find A <span className="text-blue-600">Perfect Guest House</span> To Live With Your Family On Vacation
          </h1>
          <p className="text-gray-600 mb-4">
            Experience unique luxury and sophistication at Waikiki's Guest House, where every detail is designed to provide an extraordinary stay. Our Headquarter is Located in Abuja, our guest house offers a sanctuary of elegance and comfort, perfect for discerning travelers seeking an exceptional escape.
          </p>
          <p className="text-gray-600 mb-4">
            From the moment you arrive, you'll be enveloped in an atmosphere of refined opulence, with personalized service and exquisite surroundings that cater to your every need. At Waikiki's Guest House, luxury isn't just a promise—it's our way of life.
          </p>
          
        </div>

        {/* Image Carousel Section */}
        <div className="md:w-1/2 mb-5 md:mb-0">
        {/* <Swiper
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{ delay: 3000 }}  // Auto-swipes every 3 seconds
>
    <SwiperSlide> */}
        <Image
            className="rounded-lg"
            src="/img/carousel-1.jpg"
            alt="Carousel 1"
            width={600}  // Specify width and height
            height={400}
            layout="responsive"
        />
    {/* </SwiperSlide>
    <SwiperSlide>
        <Image
            className="rounded-lg"
            src="/img/carousel-2.jpg"
            alt="Carousel 2"
            width={600}  // Specify width and height
            height={400}
            layout="responsive"
        />
    </SwiperSlide>
</Swiper> */}


        </div>
      </div>
    </div>
  );
}







// import React from 'react';
// import HeaderCarousel from './HeaderCarousel'; // Import the carousel component

// const Header = () => {
//   return (
//     <div className="container-fluid bg-white p-0">
//       <div className="flex flex-col md:flex-row items-center">
//         {/* Text Section */}
//         <div className="md:w-1/2 p-8 mt-8">
//           <h1 className="text-4xl font-bold mb-4 animate-fadeIn">
//             Find A <span className="text-primary">Perfect Guest House</span> To Live With Your Family On Vacation
//           </h1>
//           <p className="text-gray-700 mb-6 animate-fadeIn">
//             Experience unique luxury and sophistication at Waikiki's Guest House, where every detail is designed to provide an extraordinary stay. Located in Abuja, our guest house offers a sanctuary of elegance and comfort, perfect for discerning travelers seeking an exceptional escape. From the moment you arrive, you'll be enveloped in an atmosphere of refined opulence, with personalized service and exquisite surroundings that cater to your every need. At Waikiki's Guest House, luxury isn't just a promise it's our way of life. Indulge in the ultimate luxury experience, and we look forward to welcoming you.
//           </p>
//           <a href="#" className="btn bg-primary text-white py-3 px-5 rounded-md animate-fadeIn">Get Started</a>
//         </div>

//         {/* Carousel Section */}
//         <div className="md:w-1/2">
//           <HeaderCarousel />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
