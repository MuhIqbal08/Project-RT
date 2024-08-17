import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
const Logo = require("../assets/ertero-removebg-preview.png");

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(isModalOpen);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex-shrink-0">
              <Link to={"/"} className="flex items-center py-4 px-2">
                <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
                <span className="font-bold text-gray-500 text-lg">ERTERO</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                to={"/"}
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Home
              </Link>
              <Link
                to={"/pengurus"}
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Pengurus
              </Link>
              <Link
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Services
              </Link>
              <Link
                href="#"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-3">
            <button
  onClick={openModal}
  className="block text-white font-semibold border border-white text-sm px-4 py-2 bg-blue-500 hover:bg-white hover:text-gray-500 hover:border-blue-500 transition duration-300"
>
  Log In
</button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                <svg
                  className="w-6 h-6 text-gray-500 hover:text-blue-500"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMenuOpen ? "block" : "hidden"} mobile-menu`}>
          <ul className="">
            <li>
              <Link
                href="#"
                className="block text-sm px-2 py-4 text-white bg-blue-500 font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block text-sm px-2 py-4 hover:bg-blue-500 transition duration-300"
              >
                Contact
              </Link>
            </li>
            <div className="flex justify-center gap-4 items-center p-2">
              <li>
                <button
                  onClick={openModal}
                  className="block text-white font-semibold border border-white text-sm px-4 py-2 bg-blue-500 hover:bg-white hover:text-gray-500 hover:border-blue-500 transition duration-300"
                >
                  Log In
                </button>
              </li>
            </div>
          </ul>
        </div>
      </nav>

      {/* Modal */}
      {isModalOpen && (
  <div
    id="modal"
    className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 ${isModalOpen ? 'show' : ''}`}
  >
    <div className="modal bg-white rounded-lg shadow-lg p-8 max-w-md w-full mx-4 relative show">
      <button
        onClick={closeModal}
        id="closeModalBtn"
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
        Login
      </h2>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  </div>
)}


    </>
  );
};

export default Navbar;
