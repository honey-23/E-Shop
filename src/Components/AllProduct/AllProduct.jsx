import React, { useEffect, useState } from 'react';
import Layout from '../Layout/Layout';
import './../../Customstylesheet/AllProduct.css';
import axios from 'axios';
import { useCart } from '../Context/CartContext';
import { useNavigate } from 'react-router-dom'; // To navigate to login page

const AllProduct = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate(); // Initialize navigate for redirection

  const [allCategory, setAllCategory] = useState([]);
  const [allProduct, setAllProduct] = useState([]); // For filtered or all products
  const [selectproduct, setselectproduct] = useState(''); // Selected category key
  const [selectedCategoryName, setSelectedCategoryName] = useState('Filter by Category'); // Selected category name for display
  const [searchQuery, setSearchQuery] = useState(''); // Search query for products

  // Assuming you have a user context that provides user status
  const user = localStorage.getItem('user'); // Replace with your actual login check (UserContext or JWT)

  // Fetch categories
  useEffect(() => {
    const getproductcategory = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products/categories');
        setAllCategory(res.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    getproductcategory();
  }, []);

  // Fetch all products initially
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const res = await axios.get('https://dummyjson.com/products');
        setAllProduct(res.data.products);
      } catch (error) {
        console.error('Error fetching all products:', error);
      }
    };
    fetchAllProducts();
  }, []);

  // Fetch products based on selected category
  useEffect(() => {
    const getproduct = async () => {
      if (selectproduct) {
        try {
          const res = await axios.get(`https://dummyjson.com/products/category/${selectproduct}`);
          setAllProduct(res.data.products);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      }
    };
    getproduct();
  }, [selectproduct]);

  // Filter products by category
  const filterproduct = (categoryKey, categoryName) => {
    setselectproduct(categoryKey);
    setSelectedCategoryName(categoryName);
  };

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter products based on search query
  const filteredProducts = allProduct.filter((item) => {
    return item.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  // Add to cart logic
  const handleAddToCart = (item) => {
    if (user) {
      // If the user is logged in, add the product to the cart
      addToCart(item);
    } else {
      // If the user is not logged in, redirect to the login page
      navigate('/login'); // Assuming you have a login route
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        {/* Search and Category Filter Section */}
        <div className="row justify-content-between align-items-center mb-4">
          {/* Search Input */}
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search for a product"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>

          {/* Category Dropdown */}
          <div className="col-md-4">
            <div className="dropdown">
              <button
                className="btn btn-outline-primary dropdown-toggle w-100"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* Show the selected category name, or default text */}
                {selectedCategoryName === 'Filter by Category' ? 'Select a Category' : selectedCategoryName}
              </button>
              <ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuButton">
                {allCategory
                  .filter((filterItem) => {
                    const excludedCategories = ['motorcycle', 'furniture', 'groceries', 'vehicle', 'kitchen'];
                    if (typeof filterItem === 'string') {
                      return !excludedCategories.includes(filterItem);
                    } else if (typeof filterItem === 'object') {
                      const categoryName = filterItem.slug || filterItem.name;
                      return !excludedCategories.includes(categoryName);
                    }
                    return true;
                  })
                  .map((category, index) => {
                    const categoryName =
                      typeof category === 'object' ? category.name || category.slug : category;
                    return (
                      <li key={index}>
                        <a
                          onClick={() =>
                            filterproduct(
                              typeof category === 'object' ? category.slug || category.name : category,
                              categoryName
                            )
                          }
                          className="dropdown-item"
                          href="#"
                        >
                          {categoryName}
                          {/* Display a "selected" label if the category is the selected one */}
                          {selectedCategoryName === categoryName && (
                            <span className="badge bg-primary ms-2">Selected</span>
                          )}
                        </a>
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>

        {/* Product Display */}
        <div className="row">
          {filteredProducts.length === 0 ? (
            <div className="col-12 text-center">
              <h4>No products found</h4>
            </div>
          ) : (
            filteredProducts.map((item, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="card product-card border-0 shadow-sm">
                  <img
                    src={item.thumbnail || (item.images && item.images[0])}
                    className="card-img-top img-fluid rounded-top"
                    alt={item.title || 'Product Thumbnail'}
                    style={{ height: '250px', objectFit: 'cover' }}
                  />
                  <div className="card-body">
                    <h5 className="card-title text-primary">{item.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Rating: {item.rating}</h6>
                    <p className="card-text text-success fw-bold">${item.price}</p>
                    {/* Corrected the button to use 'item' instead of undefined 'product' */}
                    <button
                      onClick={() => handleAddToCart(item)} // Call the addToCart function
                      className="btn btn-primary"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AllProduct;
