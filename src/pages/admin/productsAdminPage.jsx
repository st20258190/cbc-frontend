import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  PiPlusLight,
  PiTrashLight,
  PiPencilSimpleLineLight,
} from "react-icons/pi";
import { Link } from "react-router-dom";

export default function ProductsAdminPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_BACKEND_URL + "/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        toast.error("Failed to load products. Please try again.");
      });
  }, []);

  return (
    <div className="w-full h-full p-6 bg-white/60 backdrop-blur-md">
      <h1 className="text-2xl font-bold text-rose-700 mb-6">Product List</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-200 shadow-md rounded-xl overflow-hidden">
          <thead className="bg-rose-100 text-rose-800 text-left">
            <tr>
              <th className="px-4 py-3 text-sm font-semibold">ID</th>
              <th className="px-4 py-3 text-sm font-semibold">Image</th>
              <th className="px-4 py-3 text-sm font-semibold">Name</th>
              <th className="px-4 py-3 text-sm font-semibold">
                Labelled Price
              </th>
              <th className="px-4 py-3 text-sm font-semibold">Selling Price</th>
              <th className="px-4 py-3 text-sm font-semibold">Stock</th>
              <th className="px-4 py-3 text-sm font-semibold">Category</th>
              <th className="px-4 py-3 text-sm font-semibold">Status</th>
              <th className="px-4 py-3 text-sm font-semibold text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700">
            {products.map((product) => (
              <tr
                key={product.productId}
                className="hover:bg-rose-50 transition"
              >
                <td className="px-4 py-3">{product.productId}</td>
                <td className="px-4 py-3">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-14 h-14 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 font-medium">{product.name}</td>
                <td className="px-4 py-3">Rs {product.labelledPrice}</td>
                <td className="px-4 py-3">Rs {product.price}</td>
                <td className="px-4 py-3">{product.stock}</td>
                <td className="px-4 py-3">{product.category}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${
                      product.isAvailable
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.isAvailable ? "Available" : "Unavailable"}
                  </span>
                </td>
                <td className="px-4 py-3 flex justify-center gap-2">
                  <button
                    onClick={() => console.log("Edit", product.productId)}
                    className="p-2 rounded-full hover:bg-rose-100 text-rose-600 transition"
                    title="Edit"
                  >
                    <PiPencilSimpleLineLight className="text-lg" />
                  </button>
                  <button
                    onClick={() => console.log("Delete", product.productId)}
                    className="p-2 rounded-full hover:bg-red-100 text-red-600 transition"
                    title="Delete"
                  >
                    <PiTrashLight className="text-lg" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Link
        to="/admin/newProduct"
        className="fixed right-8 bottom-8 bg-rose-600 text-white p-4 rounded-full shadow-xl hover:bg-rose-700 transition duration-200"
      >
        <PiPlusLight className="text-2xl" />
      </Link>
    </div>
  );
}
