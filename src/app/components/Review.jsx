"use client";
import React, { useState, useEffect } from "react";

const testimonials = [
  {
    message:
      "Our stay at Waikiki&rsquo;s Guest House was nothing short of spectacular. The ambiance was elegant, and the service was impeccable. Every detail was thoughtfully considered, making our visit both luxurious and comfortable. It&rsquo;s truly a gem in American Victorian. Highly recommended!",
    name: "Emily Thompson",
    occupation: "Actress",
    img: "/img/testimonial1.png",
  },
  {
    message:
      "From the moment I walked through the doors, Waikiki&rsquo;s Guest House made me feel like royalty. The accommodations were stunning, and the staff went above and beyond to ensure I had a perfect stay. It&rsquo;s the ideal retreat for anyone seeking a blend of opulence and relaxation.",
    name: "Robert Gideon-el",
    occupation: "Financial Analyst",
    img: "/img/testimonial2.png",
  },
  {
    message:
      "Waikiki&rsquo;s Guest House is an oasis of luxury. The sophisticated design and attentive service created a memorable experience. It&rsquo;s clear that every detail is crafted with care. If you&rsquo;re looking for the ultimate luxury escape, this guest house is a must-visit!",
    name: "Paul Sylvester",
    occupation: "Travel Blogger",
    img: "/img/testimonial3.JPG",
  },
  {
    message:
      "Waikiki&rsquo;s Guest House offers a comfortable stay with cozy rooms and friendly service, perfect for travelers looking to enjoy a relaxing getaway. Its convenient location near local attractions and beaches adds to the charm, making it a great spot for both leisure and business stays. The property is clean, well-maintained, and provides essential amenities to ensure guests have a pleasant experience.",
    name: "Sayrah Doe",
    occupation: "Business Executive",
    img: "/img/testimonial4.jpg",
  },
];

const Review = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 2
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 2
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-light p-2">
      <div className="container mx-auto py-10 max-w-5xl">
        <div className="text-left mx-auto mb-10 max-w-lg">
          <h1 className="text-3xl font-bold mb-4">Our Clients Say!</h1>
          <p>
            From the moment we arrived at Waikiki&rsquo;s Guest House, we were
            immersed in luxury and exceptional service. The attention to detail
            and the elegance of the surroundings made our stay truly
            unforgettable.
          </p>
        </div>

        {/* Testimonial Content */}
        <div className="relative flex justify-between items-center">
          {/* Left Arrow */}
          <button
            className="absolute left-0 p-2 bg-pink-500 rounded-full text-white"
            onClick={handlePrevious}
          >
            &#8592;
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.slice(currentIndex, currentIndex + 2).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 text-left shadow-lg w-[80%] mx-auto rounded-lg">
                <p className="text-lg italic mb-4">&quot;{testimonial.message}&quot;</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h6 className="text-xl font-bold">{testimonial.name}</h6>
                    <small className="text-gray-500">{testimonial.occupation}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-0 p-2 bg-pink-500 rounded-full text-white"
            onClick={handleNext}
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
