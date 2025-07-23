import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white/60 backdrop-blur-md shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo or Brand Name */}
        <Link
          to="/"
          className="text-2xl font-bold text-rose-700 tracking-wide hover:text-rose-800 transition duration-200"
        >
          Herbal Store
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6 text-gray-700 text-base font-medium">
          <Link to="/" className="hover:text-rose-600 transition duration-200">
            Home
          </Link>
          <Link
            to="/products"
            className="hover:text-rose-600 transition duration-200"
          >
            Products
          </Link>
          <Link
            to="/about"
            className="hover:text-rose-600 transition duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-rose-600 transition duration-200"
          >
            Contact
          </Link>
          <Link
            to="/reviews"
            className="hover:text-rose-600 transition duration-200"
          >
            Reviews
          </Link>
        </nav>
      </div>
    </header>
  );
}
