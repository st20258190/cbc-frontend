import { Link, Route, Routes } from "react-router-dom";
import { BsBox2 } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { PiUsersFourLight } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import ProductsAdminPage from "./admin/productsAdminPage";
import AddProductAdminPage from "./admin/addproductAdminPage";

export default function AdminPage() {
  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <div className="w-[300px] min-h-screen bg-white/60 backdrop-blur-md shadow-xl border-r border-white/30 flex flex-col">
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-rose-700 mb-10 tracking-wide">
            Admin Panel
          </h2>

          <nav className="flex flex-col space-y-4">
            <Link
              to="/admin/products"
              className="flex items-center gap-3 text-lg text-gray-800 hover:text-rose-600 hover:bg-rose-100 px-4 py-2 rounded-xl transition duration-200"
            >
              <BsBox2 className="text-[22px]" />
              Products
            </Link>

            <Link
              to="/admin/orders"
              className="flex items-center gap-3 text-lg text-gray-800 hover:text-rose-600 hover:bg-rose-100 px-4 py-2 rounded-xl transition duration-200"
            >
              <CiDeliveryTruck className="text-[24px]" />
              Orders
            </Link>

            <Link
              to="/admin/users"
              className="flex items-center gap-3 text-lg text-gray-800 hover:text-rose-600 hover:bg-rose-100 px-4 py-2 rounded-xl transition duration-200"
            >
              <PiUsersFourLight className="text-[24px]" />
              Users
            </Link>

            <Link
              to="/admin/settings"
              className="flex items-center gap-3 text-lg text-gray-800 hover:text-rose-600 hover:bg-rose-100 px-4 py-2 rounded-xl transition duration-200"
            >
              <IoSettingsOutline className="text-[24px]" />
              Settings
            </Link>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8 bg-gray-50">
        <Routes>
          <Route path="/" element={<h1>Admin Dashboard</h1>} />
          <Route path="/products" element={<ProductsAdminPage />} />
          <Route path="/newProduct" element={<AddProductAdminPage />} />
          <Route path="/orders" element={<h1>Orders</h1>} />
        </Routes>
      </div>
    </div>
  );
}
