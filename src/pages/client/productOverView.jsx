import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import ImageSlider from "./imageSlider";
import Footer from "../../components/footer";

export default function ProductOverView() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    if (status === "loading") {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/products/" + productId)
        .then((res) => {
          setProduct(res.data);
          setStatus("success");
        })
        .catch((err) => {
          toast.error("Failed to load product details");
          console.error(err);
          setStatus("error");
        });
    }
  }, [status]);

  return (
    <div className="min-h-screen pt-20 px-4 bg-gradient-to-br from-rose-50 via-white to-rose-100">
      {status === "loading" && <Loader />}

      {status === "success" && product && (
        <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-lg border border-white/40 shadow-2xl rounded-3xl p-10 lg:p-10 flex flex-col lg:flex-row gap-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <ImageSlider images={product.images} />
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4 text-gray-800">
            <h1 className="text-3xl font-bold tracking-tight">
              {product.name}
            </h1>
            <p className="text-sm text-gray-600 leading-relaxed">
              {product.description}
            </p>

            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl text-rose-600 font-bold">
                Rs {product.price}
              </span>
              {product.labelledPrice !== product.price && (
                <span className="line-through text-gray-400 text-md">
                  Rs {product.labelledPrice}
                </span>
              )}
            </div>

            <div className="text-sm font-medium">
              Stock:{" "}
              <span
                className={
                  product.stock > 0 ? "text-green-600" : "text-red-500"
                }
              >
                {product.stock > 0
                  ? `${product.stock} Available`
                  : "Out of stock"}
              </span>
            </div>

            <div className="text-sm font-medium">
              Category:{" "}
              <span className="text-gray-700">{product.category}</span>
            </div>

            {/* <div className="text-sm font-medium">
              Product ID:{" "}
              <span className="font-mono bg-white/80 px-2 py-1 rounded-md shadow-sm border border-gray-200 text-xs">
                {product.productId}
              </span>
            </div> */}
          </div>
        </div>
      )}

      {status === "error" && (
        <div className="max-w-3xl mx-auto mt-12 p-6 bg-white/70 border border-red-200 shadow-lg rounded-xl text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600">
            Could not load product. Please try again later.
          </p>
        </div>
      )}
      <Footer />
    </div>
  );
}
