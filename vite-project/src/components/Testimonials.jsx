import React from 'react';
import { testimonialsData } from "../assets/assets";

const rectangleStyle = {
    width: '500px',
    height: '280px',
    borderRadius: '10px',
    border: '1px solid #E1E1E1',
    backgroundColor: '#FFFFFF',
    padding: '25px', // Increased padding
    margin: '20px',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.05)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // Align items to the start
    textAlign: 'left', // Align text to the left
};

const Testimonials = () => {
  return (
    <section className="py-12 px-8 lg:px-16 flex flex-wrap justify-center gap-12">
      <h2 className="text-center text-2xl md:text-3xl lg:text-4xl mt-8 font-semibold text-[#4A5568] mb-10 w-full">Customer Testimonials</h2>
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id} style={rectangleStyle}>
          <p className="text-gray-700 italic text-lg mb-4">“{testimonial.text}”</p> {/* Added closing quote and margin */}
          <div className="flex items-center space-x-4"> {/* Container for image and name/title */}
            <img
              src={testimonial.image}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">{testimonial.author}</h3>
              <p className="text-sm text-gray-500">{testimonial.jobTitle}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Testimonials;