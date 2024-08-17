import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-white py-8 shadow-lg">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        <div className="flex-shrink-0">
          <a href="#" className="flex items-center py-4 px-2">
            <img src="https://via.placeholder.com/50" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold text-gray-500 text-lg">ERTERO</span>
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Privacy
            Policy</a>
          <a href="#" className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Terms
            of Service</a>
          <a href="#" className="py-2 px-4 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Contact
            Us</a>
        </div>

        <div className="flex items-center space-x-3">
          <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.99 3.657 9.126 8.438 9.878v-6.99H7.897v-2.888h2.541V9.605c0-2.508 1.492-3.89 3.775-3.89 1.095 0 2.238.196 2.238.196v2.465h-1.26c-1.243 0-1.629.772-1.629 1.563v1.882h2.773l-.444 2.888h-2.33v6.99C18.343 21.126 22 16.99 22 12z" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-blue-500 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 3.134 8.091 7.285 8.895v-6.281H6.25v-2.614h3.036v-2.098c0-2.418 1.443-3.736 3.653-3.736 1.06 0 2.166.19 2.166.19v2.383H14.18c-1.055 0-1.392.65-1.392 1.316v1.945h2.777l-.444 2.614h-2.333v6.28C18.866 20.092 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500">
        &copy; 2024 ERTERO. All rights reserved.
      </div>
    </div>
  </footer>
    </>
  )
}

export default Footer