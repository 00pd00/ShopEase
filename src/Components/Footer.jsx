import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:flex md:justify-between">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">ShopEase</h2>
          <p className="text-sm text-gray-400">
            Making your life better, one product at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul>
            <li>
              <Link to="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-500" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter className="text-2xl hover:text-blue-400" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram className="text-2xl hover:text-pink-500" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin className="text-2xl hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        © 2025 ShopEase. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
