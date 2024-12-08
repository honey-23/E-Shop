import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css"; // Animation styles
import "./../../Customstylesheet/AboutUs.css"; // Custom styles
import Layout from "../Layout/Layout";
import heroImage from "./../../assets/contactimg/aboutus.jpg";// Hero section image
import image from "./../../assets/contactimg/img.jpg"; // About Us image
import image1 from "./../../assets/contactimg/member.jpg"; // Team member 1
import image2 from "./../../assets/contactimg/member2.jpg"; // Team member 2
import image3 from "./../../assets/contactimg/member3.jpg"; // Team member 3

const AboutUs = () => {
  return (
    <Layout>
      <div className="about-us-page">
        {/* Hero Section */}
        <section
  className="hero-section"
  style={{
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.10), rgba(51, 51, 51, 0.5)), url(${heroImage})`,
  }}
  
  
  
>
  <div className="overlay"></div>
  <div className="container text-center">
    <h1 className="display-4 fw-bold">About Us</h1>
    <p className="lead">
      Discover more about our eShop and what makes us your top choice!
    </p>
  </div>
</section>


        {/* About Us Section */}
        <section className="about-us-content py-5 bg-light">
          <div className="container">
            <div className="card shadow-lg border-0 rounded">
              <div className="row no-gutters align-items-center">
                <div className="col-md-6">
                  <img
                    src={image}
                    alt="About Us"
                    className="img-fluid rounded-start"
                    loading="lazy"
                  />
                </div>
                <div className="col-md-6 p-4">
                  <h2 className="fw-bold">Who We Are</h2>
                  <p>
                    At eShop, we aim to provide an exceptional shopping
                    experience. Our journey began with the vision to bring
                    high-quality products to your doorstep. Today, we serve
                    thousands of customers with an extensive range of goods,
                    all with unmatched convenience and reliability.
                  </p>
                  <a
                    href="/contact"
                    className="btn btn-primary btn-lg mt-3"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section py-5">
          <div className="container text-center">
            <h2 className="fw-bold">Meet Our Team</h2>
            <p className="mb-5">
              Our passionate team works hard to make your shopping experience
              seamless.
            </p>
            <div className="row">
              {/* Team Members */}
              {[image1, image2, image3].map((src, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="card team-card shadow border-0">
                    <img src={src} alt={`Team Member ${index + 1}`} className="card-img-top" loading="lazy" />
                    <div className="card-body">
                      <h5 className="card-title">Team Member {index + 1}</h5>
                      <p className="card-text">Position: Team Member</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;
