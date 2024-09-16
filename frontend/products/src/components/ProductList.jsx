
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart } from '../redux/cartSlice';
import Swal from 'sweetalert2';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [maxPrice, setMaxPrice] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handlePriceFilter = (event) => {
    setMaxPrice(event.target.value);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    Swal.fire({
      title: 'Added to Cart!',
      text: `${product.name} has been added to your cart.`,
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-700">Our Products</h2>

      {/* Price Filter */}
      <div className="mb-6">
        <label className="block mb-2 text-sm font-medium text-gray-800">Filter by Price:</label>
        <input
          type="number"
          value={maxPrice}
          onChange={handlePriceFilter}
          placeholder="Enter max price"
          className="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products
          .filter((product) => maxPrice === '' || product.price <= maxPrice)
          .map((product) => (
            <div
              key={product._id}
              className="border p-4 rounded shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 bg-white"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-64 object-cover rounded-t mb-4 hover:opacity-90 transition duration-300"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-blue-700 font-bold mb-4">${product.price.toFixed(2)}</p>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition duration-300 transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductList;
