import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import swiper_banner from '../assets/swiper_banner_1.png';
import side_swiper_banner from '../assets/side_swiper_banner_1.jpg';

const ProductInfo = () => {
  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-col lg:flex-row gap-6">
      {/* Swiper Section */}
      <div className="w-full lg:w-2/3">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          className="h-full"
        >
          <SwiperSlide>
            <img src={swiper_banner} alt="1" className="w-full h-full object-fit rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper_banner} alt="2" className="w-full h-full object-fit rounded-xl" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={swiper_banner} alt="3" className="w-full h-full object-fit rounded-xl" />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Side Images */}
      <div className="w-full lg:w-1/3 flex flex-col sm:flex-col md:flex-row lg:flex-col justify-center items-center gap-4">
        <img
          src={side_swiper_banner}
          alt="side1"
          className="w-[90%] md:w-1/2 lg:w-[90%] h-[200px] object-fit rounded-lg"
        />
        <img
          src={side_swiper_banner}
          alt="side2"
          className="w-[90%] md:w-1/2 lg:w-[90%] h-[200px] object-fit rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProductInfo;
