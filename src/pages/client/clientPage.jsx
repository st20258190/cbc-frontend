import { Routes, Route } from "react-router-dom";
import Header from "../../components/header";
import ProductPage from "./productPage";

export default function ClientPage() {
  return (
    <div className="w-full h-screen max-h-screen">
      <Header />
      <div className="w-full h-[calc(100%-100px)]">
        <Routes path="/">
          <Route
            path="/"
            element={
              <h1 className="text-center text-2xl font-bold text-rose-700 mt-20">
                Welcome to the Herbal Store
              </h1>
            }
          />
          <Route path="/products" element={<ProductPage />} />
          <Route
            path="/about"
            element={
              <h1 className="text-center text-2xl font-bold text-rose-700 mt-20">
                About Us
              </h1>
            }
          />
          <Route
            path="/contact"
            element={
              <h1 className="text-center text-2 xl font-bold text-rose-700 mt-20">
                Contact Us
              </h1>
            }
          />
          <Route
            path="/reviews"
            element={
              <h1 className="text-center text-2xl font-bold text-rose-700 mt-20">
                Customer Reviews
              </h1>
            }
          />
          <Route
            path="*"
            element={
              <h1 className="text-center text-2xl font-bold text-rose-700 mt-20">
                Page Not Found
              </h1>
            }
          />
        </Routes>
      </div>
    </div>
  );
}
