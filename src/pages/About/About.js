import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";
import logo from "../../assets/images/logo.zoroz.jpeg";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-4 flex">
      <div className="w-3/4">
        <Breadcrumbs title="About" prevLocation={prevLocation} />
        <div className="py-10">
          <h1 className="max-w-2xl text-3xl font-semibold text-gray-800 mb-4">
            <span className="text-blue-500">Zoroz.e</span> is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.
          </h1>
          <p className="text-gray-600 mb-6">
            At Zoroz.e, we believe that fashion is an expression of individuality and personal style. Our curated collection of clothing, accessories, and gadgets represents the latest trends and timeless classics to cater to every customer's unique taste.
          </p>
          <p className="text-gray-600 mb-6">
            Our team of passionate fashion enthusiasts handpick each item to ensure exceptional quality and style. Whether you're searching for the perfect outfit, upgrading your gadgets, or looking for stylish accessories, Zoroz.e has got you covered.
          </p>
          <p className="text-gray-600 mb-6">
            With a seamless online shopping experience, secure payment options, and worldwide shipping, we strive to make your shopping journey convenient and enjoyable. Customer satisfaction is our top priority, and we are committed to providing excellent service at every step.
          </p>
          <Link to="/shop">
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default About;
