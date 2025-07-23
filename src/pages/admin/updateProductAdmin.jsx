import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import uploadfile from "../../utils/mediaUpload";

export default function UpdateProductAdminPage() {
  const location = useLocation();
  const [productId, setProductId] = useState(location.state.productId);
  const [name, setName] = useState(location.state.name);
  const [altNames, setAltNames] = useState(location.state.altNames.join(", "));
  const [labelledPrice, setLabelledPrice] = useState(
    location.state.labelledPrice
  );
  const [price, setPrice] = useState(location.state.price);
  const [stock, setStock] = useState(location.state.stock);
  const [category, setCategory] = useState(location.state.category);
  const [availability, setAvailability] = useState(location.state.availability);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState(location.state.description);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    const altNameInArray = altNames.split(",");
    e.preventDefault();
    const promisesArray = [];
    for (let i = 0; i < images.length; i++) {
      const promise = uploadfile(images[i]);
      promisesArray[i] = promise;
    }
    const responses = await Promise.all(promisesArray);
    console.log("Uploaded image URLs:", responses);
    const productData = {
      productId: productId,
      name: name,
      altNames: altNameInArray,
      labelledPrice: labelledPrice,
      price: price,
      stock: stock,
      category: category,
      availability: availability,
      images: responses,
      description: description,
    };
    if (responses.length == 0) {
      productData.images = location.state.images;
    }
    const token = localStorage.getItem("token");
    if (token == null) {
      return (window.location.href = "/login");
    }
    axios
      .put(
        import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId,
        productData,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((response) => {
        console.log("Product updated successfully:", response.data);
        toast.success("Product update successfully!");
        navigate("/admin/products");
      })
      .catch((error) => {
        console.error("Error update product:", error);
        toast.error("Failed to update product. Please try again.");
      });
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <form className="w-full max-w-2xl bg-white/60 backdrop-blur-md rounded-2xl shadow-xl p-8 border border-white/30 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-rose-700 tracking-wide mb-4">
          Update Product
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product ID */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product ID
            </label>
            <input
              type="text"
              name="productId"
              value={productId}
              disabled
              onChange={(e) => setProductId(e.target.value)}
              placeholder="e.g. COSM-001"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Product name"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Alt Names */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Alternate Names (comma separated)
            </label>
            <input
              type="text"
              name="altNames"
              value={altNames}
              onChange={(e) => setAltNames(e.target.value)}
              placeholder="e.g. Rose Cream, Herbal Lotion"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Labelled Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Labelled Price (LKR)
            </label>
            <input
              type="number"
              name="labelledPrice"
              value={labelledPrice}
              onChange={(e) => setLabelledPrice(e.target.value)}
              placeholder="e.g. 2500"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Actual Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Selling Price (LKR)
            </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. 2200"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Stock Quantity
            </label>
            <input
              type="number"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              placeholder="e.g. 50"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
          </div>

          {/* Category Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="">Select Category</option>
              <option value="cream">Cream</option>
              <option value="soap">Soap</option>
              <option value="face wash">Face Wash</option>
              <option value="shampoo">Shampoo</option>
              <option value="perfume">Perfume</option>
            </select>
          </div>

          {/* Availability */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Availability
            </label>
            <select
              name="availability"
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            >
              <option value="true">Available</option>
              <option value="false">Not Available</option>
            </select>
          </div>

          {/* Image Upload */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Upload Product Images
            </label>
            <input
              type="file"
              name="images"
              multiple
              accept="image/*"
              onChange={(e) => setImages(e.target.files)}
              className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-sm file:font-semibold file:bg-rose-600 file:text-white hover:file:bg-rose-700 transition"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500"
            ></textarea>
          </div>
        </div>

        <div className="pt-4 flex justify-end gap-4">
          <Link
            to="/admin/products"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium px-6 py-2 rounded-xl transition duration-200"
          >
            Cancel
          </Link>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-rose-600 hover:bg-rose-700 text-white font-semibold px-6 py-2 rounded-xl transition duration-200"
          >
            Update Product
          </button>
        </div>
      </form>
    </div>
  );
}
