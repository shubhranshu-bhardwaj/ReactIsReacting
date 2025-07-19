import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-blue-600">MyWebsite</div>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
