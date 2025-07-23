import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link className="bg-white/60 backdrop-blur-lg shadow-md rounded-2xl p-4 hover:shadow-xl transition duration-300 w-full max-w-xs flex flex-col justify-between cursor-pointer">
      <img
        src={product.images?.[0] || "/default-product.jpg"}
        alt={product.name}
        className="w-full h-48 object-cover rounded-xl mb-4"
      />

      <div className="flex flex-col gap-1">
        <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-500 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-rose-600 font-bold text-lg">
            Rs {product.price}
          </span>
          {product.labelledPrice !== product.price && (
            <span className="line-through text-sm text-gray-400 ml-2">
              Rs {product.labelledPrice}
            </span>
          )}
        </div>

        <div className="text-xs text-gray-600 mt-1">
          Stock:{" "}
          <span
            className={product.stock > 0 ? "text-green-600" : "text-red-500"}
          >
            {product.stock > 0 ? product.stock : "Out of stock"}
          </span>
        </div>

        <div className="mt-2 text-xs text-gray-500">
          Category: {product.category}
        </div>
      </div>
    </Link>
  );
}
