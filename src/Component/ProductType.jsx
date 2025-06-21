import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import productImg from "../assets/product-types-1.png";

const ProductType = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const products = [
    { title: "Turmeric Powder", price: 200, weight: "500g", img: productImg },
    { title: "Black Pepper", price: 150, weight: "250g", img: productImg },
    { title: "Red Chilli", price: 180, weight: "200g", img: productImg },
    { title: "Coriander", price: 100, weight: "100g", img: productImg },
    { title: "Ginger Powder", price: 220, weight: "500g", img: productImg },
    { title: "Jeera", price: 140, weight: "250g", img: productImg },
  ];

  const extendedProducts = [...products, ...products.slice(0, visibleCount)];

  // Responsive visible count
  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(3);
      } else {
        setVisibleCount(5);
      }
    };

    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  // Autoplay (pause on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Reset at end for infinite loop
  useEffect(() => {
    if (currentIndex === products.length) {
      setTimeout(() => {
        sliderRef.current.style.transition = "none";
        setCurrentIndex(0);
      }, 700);
    } else {
      sliderRef.current.style.transition = "transform 0.7s ease-in-out";
    }
  }, [currentIndex, products.length]);

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(products.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) {
      handleNext(); // swipe left
    } else if (diff < -50) {
      handlePrev(); // swipe right
    }
  };

  return (
    <div
      className="w-full py-10 bg-white overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden px-2 sm:px-0">
        {/* Arrow Buttons (for all views) */}
        <button
          className="absolute cursor-pointer left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          onClick={handlePrev}
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          className="absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
          onClick={handleNext}
        >
          <FiChevronRight size={24} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex"
          style={{
            width: `${(100 / visibleCount) * extendedProducts.length}%`,
            transform: `translateX(-${
              (100 / extendedProducts.length) * currentIndex
            }%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {extendedProducts.map((product, index) => (
            <div
              key={index}
              className="px-2 flex-shrink-0"
              style={{ width: `${100 / extendedProducts.length}%` }}
            >
              <div className="bg-[#f5f5f5] p-4 rounded-lg shadow-md text-center">
                <img
                  src={product.img}
                  alt={product.title}
                  className={`w-full object-contain mb-3 ${
                    visibleCount === 1 ? "h-[180px]" : "h-[150px]"
                  }`}
                />
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-700 font-bold">₹ {product.price}</p>
                <p className="text-sm text-gray-500">{product.weight}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductType;
