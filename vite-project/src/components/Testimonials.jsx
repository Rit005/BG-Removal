import React from 'react';
import { testimonialsData } from "../assets/assets";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-10 px-8 lg:px-16"> {/* Increased padding */}
      <h2 className="text-center text-3xl font-semibold mb-12">What Our Users Say</h2> {/* Increased font size and margin */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"> {/* Using a grid for desktop layout */}
        {testimonialsData.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-8 shadow-lg rounded-lg text-center"> {/* Increased padding */}
            <img src={testimonial.image} alt={testimonial.author} className="w-24 h-24 rounded-full mx-auto mb-6" /> {/* Increased image size and margin */}
            <p className="text-gray-600 text-lg italic mb-6">"{testimonial.text}"</p> {/* Increased font size and margin */}
            <p className="text-lg font-semibold">{testimonial.author}</p> {/* Increased font size */}
            <p className="text-sm text-gray-500">{testimonial.jobTitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;