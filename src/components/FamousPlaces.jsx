import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import DelhiImg from "../assets/Delhi.webp";
import RajasthanImg from "../assets/Rajasthan.webp";
import HimachalImg from "../assets/Himachal.jpg";
import GujaratImg from "../assets/Gujarat.jpg";
import MaharashtraImg from "../assets/Maharashtra.webp";
import GoaImg from "../assets/Goa.jpg";
import { Link } from "react-router-dom";

const FamousPlaces = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const places = [
    {
      name: "Delhi",
      image: DelhiImg,
      description:
        "Delhi, the vibrant capital of India, is a fascinating blend of ancient heritage and modern dynamism…",
    },
    {
      name: "Rajasthan",
      image: RajasthanImg,
      description:
        "Rajasthan, the “Land of Kings,” is a majestic tapestry of history, culture, and desert beauty. Dominated by golden sands…",
    },
    {
      name: "Himachal Pradesh",
      image: HimachalImg,
      description:
        "Delhi, the vibrant capital of India, is a fascinating blend of ancient heritage and modern dynamism…",
    },
    {
      name: "Gujarat",
      image: GujaratImg,
      description:
        "Gujarat, located on India’s western coast, is a vibrant state known for its rich heritage, enterprising spirit, and colorful culture….",
    },
    {
      name: "Maharashtra",
      image: MaharashtraImg,
      description:
        "Maharashtra, the land of diversity and dynamism, is one of India’s most culturally rich and…",
    },
    {
      name: "Goa",
      image: GoaImg,
      description:
        "Delhi, the vibrant capital of India, is a fascinating blend of ancient heritage and modern dynamism…",
    },
  ];

  return (
    <section className="py-16 px-6 text-center bg-white container mx-auto max-w-7xl">
      {/* Heading */}
      <h2 className="text-6xl font-messiri font-semibold mb-4">
        Famous Places Of India
      </h2>
      <p className="max-w-3xl mx-auto text-gray-600 mb-14 leading-relaxed text-[15px]">
        India is a land of incredible diversity, home to some of the world’s
        most famous places. The majestic Taj Mahal in Agra stands as a symbol of
        love and architectural brilliance, while Jaipur’s Amber Fort and
        Udaipur’s City Palace showcase royal grandeur. In the north, the Golden
        Temple in Amritsar radiates peace and spirituality, and Varanasi on the
        banks of the Ganges reflects India’s ancient soul. Kerala’s backwaters,
        Goa’s beaches, and Kashmir’s valleys offer natural beauty beyond words.
        From Delhi’s Red Fort to Mysore Palace and Mumbai’s Gateway of India,
        every corner of the country tells a story of its glorious past and
        vibrant culture.
      </p>

      {/* Swiper */}
      <div className="">
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-gray-400",
            bulletActiveClass: "!bg-black",
          }}
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={false}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {places.map((place, index) => (
            <SwiperSlide key={index} className="my-10 px-2">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-300 overflow-hidden hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col justify-between h-full ">
                {/* Image */}
                <div className="m-2 rounded-2xl">
                  <img
                    src={place.image}
                    alt={place.name}
                    className="w-full h-52 object-cover rounded-2xl"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between text-center">
                  <div>
                    <h3 className="text-4xl font-messiri font-semibold mb-2">
                      {place.name}
                    </h3>
                    <p className="text-gray-600 text-[15px] leading-relaxed mb-5 line-clamp-3">
                      {place.description}
                    </p>
                  </div>
                  <button
                    onClick={handleOpenModal}
                    className="bg-black text-white text-sm font-semibold rounded-full py-2.5 w-32 hover:bg-gray-800 transition underline mx-auto *:**:"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* View All Button */}
      <div className="mt-10">
        <Link
          to={
            "https://stagging-server786.com/demo-client/amoltravel/destination/"
          }
          className="bg-black text-white font-semibold rounded-full px-8 py-3 hover:bg-gray-800 transition underline"
        >
          <a
            href="https://stagging-server786.com/demo-client/amoltravel/india/"
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW ALL DESTINATION
          </a>{" "}
        </Link>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[#1a120b] text-white p-8 rounded-2xl w-[90%] max-w-md relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-white text-xl hover:text-gray-400"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold text-center mb-6">Book Now</h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 rounded-md bg-transparent border border-white/30 focus:border-white outline-none h-24"
              ></textarea>

              <button
                type="submit"
                className="bg-white text-black font-semibold rounded-full py-2 px-6 hover:bg-gray-200 transition block mx-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default FamousPlaces;
