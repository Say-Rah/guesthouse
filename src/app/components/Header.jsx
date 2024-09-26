'use client'; // This ensures that the component runs client-side

import 'swiper/css';
import 'swiper/css/navigation'; // If you're using navigation buttons
import 'swiper/css/pagination'; // If you're using pagination indicators
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';



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
            Experience unique luxury and sophistication at Waikiki&lsquo;s Guest House, where every detail is designed to provide an extraordinary stay. Our Headquarter is Located in Abuja, our guest house offers a sanctuary of elegance and comfort, perfect for discerning travelers seeking an exceptional escape.
          </p>
          <p className="text-gray-600 mb-4">
            From the moment you arrive, you&apos;ll be enveloped in an atmosphere of refined opulence, with personalized service and exquisite surroundings that cater to your every need. At Waikiki&lsquo;s Guest House, luxury isnt just a promise—it&apos;s our way of life.
          </p>
          
        </div>

        {/* img Carousel Section */}
        <div className="md:w-1/2 mb-5 md:mb-0">
        {/* <Swiper
    spaceBetween={50}
    slidesPerView={1}
    autoplay={{ delay: 3000 }}  // Auto-swipes every 3 seconds
>
    <SwiperSlide> */}
        <img
            className="rounded-lg"
            src="/img/carousel-1.jpg"
            alt="Carousel 1"
            width={600}  // Specify width and height
            height={400}
            layout="responsive"
        />
    {/* </SwiperSlide>
    <SwiperSlide>
        <img
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

