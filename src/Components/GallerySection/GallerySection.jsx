import React from 'react';
import './../../Customstylesheet/Gallery.css'; // Ensure the path is correct for the CSS file
import gal1 from './../../assets/galleryimg/gal1.jpg';
import gal2 from './../../assets/galleryimg/gal2.jpg';
import gal3 from './../../assets/galleryimg/gal4.jpg';
import gal4 from './../../assets/galleryimg/gal5.jpg';
import gal5 from './../../assets/galleryimg/gal6.jpg';
import gal6 from './../../assets/galleryimg/gal7.jpg';

const GallerySection = () => {
  return (
    <section className="gallery-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="gallery-title">Our Gallery</h2>
          <p className="gallery-description">
            Explore some of our latest collections and featured products.
          </p>
        </div>
        <div className="row gy-4">
          {/* Row 1 */}
          <div className="col-md-4">
            <div className="gallery-item">
              <img
                src={gal1}
                alt="Gallery Item 1"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="gallery-item">
              <img
                src={gal2}
                alt="Gallery Item 2"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="gallery-item">
              <img
                src={gal3}
                alt="Gallery Item 3"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
          {/* Row 2 */}
          <div className="col-md-4">
            <div className="gallery-item">
              <img
                src={gal4}
                alt="Gallery Item 4"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="gallery-item">
              <img
                src={gal5}
                alt="Gallery Item 5"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="gallery-item">
              <img
                src={gal6}
                alt="Gallery Item 6"
                className="img-fluid rounded shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
