import React from 'react';
import Layout from '../../Components/Layout/Layout'; // Import your Layout component
import Herosection from '../../Components/Herosectin/Herosection';
import ServicesSection from '../../Components/Service/ServicesSection';
import GallerySection from '../../Components/GallerySection/GallerySection';
import Testimonial from '../../Components/Testimonial/Testimonial';

const Homepage = () => {
  return (
    <Layout>
     <Herosection />
     <ServicesSection />
     <GallerySection />
     <Testimonial />
    </Layout>
  );
};

export default Homepage;
