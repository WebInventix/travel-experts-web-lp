import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialsCarousel = ({ testimonials }) => {
  return (
    <div className="bg-[#0E0E0E] py-16">
      <div className="container mx-auto px-6">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={24}
          slidesPerView={1.2}
          loop={true}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-[#1A1A1A] text-gray-300 p-6 rounded-2xl flex flex-col justify-between hover:bg-[#232323] transition duration-300 h-full">
                <p className="text-sm leading-relaxed mb-6 line-clamp-4  overflow-hidden">
                  {t.text}
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{t.name}</h4>
                    <p className="text-xs text-gray-400">{t.designation}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
