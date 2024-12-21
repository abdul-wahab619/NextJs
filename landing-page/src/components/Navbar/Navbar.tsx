"use client";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-transparent shadow-md">
      <div className="container flex mx-auto items-center justify-between p-4 ">
        <h1 className="text-2xl font-bold text-black">AW Collection</h1>
        <ul className="hidden space-x-6 md:flex">
          <li>
            <a href="#" className="text-black hover:text-gray-600">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-600">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-600">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="text-black hover:text-gray-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
