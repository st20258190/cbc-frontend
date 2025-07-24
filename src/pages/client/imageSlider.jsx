import { useState } from "react";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl border border-white/30 shadow-inner bg-white/40 backdrop-blur-sm flex items-center justify-center">
      {images?.length > 0 ? (
        <img
          src={images[currentIndex]}
          alt="Product"
          className="w-full h-full object-cover transition-all duration-300 rounded-2xl"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
          No Image Available
        </div>
      )}

      {images?.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 bg-white/50 px-3 py-2 rounded-full backdrop-blur">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumb ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-10 h-10 object-cover rounded-full cursor-pointer border transition duration-300 ${
                currentIndex === index
                  ? "border-2 border-rose-500 scale-110"
                  : "border-white/50 opacity-80 hover:scale-105"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
