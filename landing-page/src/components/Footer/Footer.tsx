"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-black py-8">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Logo and About Section */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold mb-4">AW Collection</h1>
          <p className="text-sm">
            Discover our latest collections and trends, crafted with passion and
            precision.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media and Contact */}
        <div className="text-center md:text-right">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex justify-center md:justify-end space-x-4">
            <a
              href="#"
              className="text-black hover:text-gray-400"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-400"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-black hover:text-gray-400"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="text-sm mt-4">
            © {new Date().getFullYear()} AW Collection. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
