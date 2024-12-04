import React from 'react';
import './../../Customstylesheet/Services.css'; // Ensure the path is correct

const ServicesSection = () => {
  return (
    <section className="services-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="services-title">Our Services</h2>
          <p className="services-description">
            We offer a variety of services to make your shopping experience seamless and enjoyable.
          </p>
        </div>
        <div className="row">
          {/* Service 1 */}
          <div className="col-md-4">
            <div className="service-card text-center p-4 shadow-sm">
              <i className="bi bi-truck fs-1 mb-3 text-primary"></i>
              <h5 className="service-title">Fast Delivery</h5>
              <p className="service-text">
                Get your products delivered to your doorstep in no time with our reliable shipping options.
              </p>
            </div>
          </div>
          {/* Service 2 */}
          <div className="col-md-4">
            <div className="service-card text-center p-4 shadow-sm">
              <i className="bi bi-shield-check fs-1 mb-3 text-success"></i>
              <h5 className="service-title">Secure Payment</h5>
              <p className="service-text">
                Your transactions are safe and secure with our advanced encryption technology.
              </p>
            </div>
          </div>
          {/* Service 3 */}
          <div className="col-md-4">
            <div className="service-card text-center p-4 shadow-sm">
              <i className="bi bi-person-check fs-1 mb-3 text-info"></i>
              <h5 className="service-title">Customer Support</h5>
              <p className="service-text">
                Our team is here to help you 24/7 with any questions or issues you may have.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
