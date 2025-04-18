import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import StepIndicator from './StepIndicator';

const Shipping = () => {
  const navigate = useNavigate();
  const [shippingDetails, setShippingDetails] = useState({
    name: '',
    address: '',
    city: '',
    postalCode: '',
  });

  const handleChange = (e) => {
    setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save shipping details logic here...
    navigate('/proceedtopay');
  };

  return (

    
      <div className="bg-white bg-opacity-80 mt-14 backdrop-blur-lg p-8 rounded-xl flex justify-center w-full ">
       
        <div className='max-w-2xl'>
        <StepIndicator />
        {/* <h2 className="text-4xl font-bold text-gray-800 mb-6 text-center">Shipping Details</h2> */}
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 mt-10">
          <div>
            <label className="block font-semibold text-gray-700 text-lg">Full Name</label>
            <input
              type="text"
              name="name"
              value={shippingDetails.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 text-lg">Address</label>
            <input
              type="text"
              name="address"
              value={shippingDetails.address}
              onChange={handleChange}
              placeholder="Enter your shipping address"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 text-lg">City</label>
            <input
              type="text"
              name="city"
              value={shippingDetails.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 text-lg">Postal Code</label>
            <input
              type="text"
              name="postalCode"
              value={shippingDetails.postalCode}
              onChange={handleChange}
              placeholder="Enter your postal code"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-green-700 transition-all duration-200 transform hover:scale-105"
          >
            Continue to Checkout
          </button>
        </form>
        </div>
      </div>

  );
};

export default Shipping;
