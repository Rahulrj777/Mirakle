import offer1 from '../assets/offer-1.jpg';
import offer2 from '../assets/offer-2.jpg';

const ProductOffer = () => {
  return (
    <div className="w-9/10 mx-auto px-4 md:px-8 py-12 bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
        {/* First Image */}
        <img
          src={offer1}
          alt="Offer 1"
          className="w-full sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-up"
        />

        {/* Second Image */}
        <img
          src={offer2}
          alt="Offer 2"
          className="w-full sm:w-[300px] md:w-[400px] lg:w-[450px] h-auto rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 animate-fade-up delay-200"
        />
      </div>
    </div>
  );
};

export default ProductOffer;
