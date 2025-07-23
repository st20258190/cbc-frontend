// components/Footer.js
export default function Footer() {
  return (
    <footer className="w-full bg-white/60 backdrop-blur-lg shadow-inner mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand / Logo */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-gray-800">Herbal Store</h1>
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} HerbalStore. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-800 transition">
            Home
          </a>
          <a href="#" className="hover:text-gray-800 transition">
            Products
          </a>
          <a href="#" className="hover:text-gray-800 transition">
            About Us
          </a>
          <a href="#" className="hover:text-gray-800 transition">
            Contact
          </a>
          <a href="#" className="hover:text-gray-800 transition">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
