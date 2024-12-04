import React, { useState } from "react";
import "./../../Customstylesheet/Testimonial.css";
import image from "./../../assets/testimonialimg/image1.jpg";
import image2 from "./../../assets/testimonialimg/image2.jpg";
import image3 from "./../../assets/testimonialimg/image3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      name: "Emma Johnson",
      location: "New York, USA",
      image: image,
      text: "The products exceeded my expectations! A seamless shopping experience with fast delivery.",
    },
    {
      name: "Liam Smith",
      location: "London, UK",
      image: image2,
      text: "Absolutely love the service! High-quality products, and customer support was fantastic.",
    },
    {
      name: "Sophia Brown",
      location: "Sydney, Australia",
      image: image3,
      text: "This platform is a game-changer! The best shopping experience I've had in years.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-container container my-5">
      <h2 className="text-center mb-5 fw-bold display-5">What Our Customers Say</h2>
      <div className="testimonial-carousel position-relative">
        <button
          className="btn btn-light position-absolute start-0 top-50 translate-middle-y"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <div className="testimonial-slide-wrapper">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-slide ${
                index === currentIndex ? "active" : "inactive"
              }`}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <div className="card shadow-sm border-0 p-4">
                <div className="d-flex align-items-center mb-3">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name}'s picture`}
                    className="rounded-circle me-3"
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                    }}
                  />
                  <div>
                    <h6 className="mb-0 fw-bold">{testimonial.name}</h6>
                    <span className="text-muted small">{testimonial.location}</span>
                  </div>
                </div>
                <p className="text-muted">{testimonial.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="btn btn-light position-absolute end-0 top-50 translate-middle-y"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
