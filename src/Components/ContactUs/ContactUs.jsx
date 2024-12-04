import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import './../../Customstylesheet/ContactPage.css';
import { db } from '../../Firebase/Firebase';
import { collection, addDoc } from 'firebase/firestore';
import toast from 'react-hot-toast';

const ContactUs = () => {
  const [usercontact, setusercontact] = useState({
    username: '',
    email: '',
    message: '',
  });

  const contacthandler = (e) => {
    setusercontact({
      ...usercontact,
      [e.target.name]: e.target.value,
    });
  };

  const contactform = async (e) => {
    e.preventDefault();

    // Validation checks
    if (!usercontact.username || !usercontact.email || !usercontact.message) {
      return toast.error('Please fill all the fields');
    }

    try {
      await addDoc(collection(db, 'UserContact'), {
        username: usercontact.username,
        email: usercontact.email,
        message: usercontact.message,
      });

      toast.success(`Message Sent Successfully! Thank You ${usercontact.username}`);
      setusercontact({
        username: '',
        email: '',
        message: '',
      });
    } catch (error) {
      toast.error(error.message || 'An error occurred while sending the message');
    }
  };

  return (
    <Layout>
      <div className="contact-page">
        <div className="container py-5">
          <div className="row justify-content-center">
            {/* Contact Form Section */}
            <div className="col-md-8 col-lg-6">
              <div className="contact-card p-4 rounded-4 shadow-lg">
                <div className="contact-header text-center mb-4">
                  <h2 className="text-primary fw-bold">Get in Touch</h2>
                  <p className="text-muted">We would love to hear from you!</p>
                </div>

                <form onSubmit={contactform}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input
                      autoComplete="off"
                      name="username"
                      value={usercontact.username}
                      onChange={contacthandler}
                      type="text"
                      className="form-control form-control-lg input-field"
                      id="name"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      autoComplete="off"
                      name="email"
                      value={usercontact.email}
                      onChange={contacthandler}
                      type="email"
                      className="form-control form-control-lg input-field"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">
                      Your Message
                    </label>
                    <textarea
                      autoComplete="off"
                      name="message"
                      value={usercontact.message}
                      onChange={contacthandler}
                      className="form-control form-control-lg input-field"
                      id="message"
                      rows="5"
                      placeholder="Write your message here"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 btn-lg submit-btn"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="col-md-8 col-lg-6 mt-md-0">
              <div className="contact-info text-center">
                <h3 className="text-dark fw-bold">Contact Information</h3>
                <p>
                  <i className="bi bi-envelope-fill"></i> support@eshop.com
                </p>
                <p>
                  <i className="bi bi-geo-alt-fill"></i> 123 E-Shop Street, City,
                  Country
                </p>
                <p>
                  <i className="bi bi-telephone-fill"></i> +1 234 567 890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
