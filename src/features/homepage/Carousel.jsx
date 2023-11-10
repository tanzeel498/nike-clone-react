import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import CarouselButton from "./CarouselButton";
import { Link } from "react-router-dom";

const buttonContainerStyle =
  "absolute z-10 top-0 md:flex h-full w-32 flex items-center hidden ";

function Carousel() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mb-28 ml-6 mobile:ml-0">
      <h2 className="mb-6 mobile:ml-6 tablet:ml-14">Always Iconic</h2>
      <Swiper
        className="relative"
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1.2}
        onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
        loop={true}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <SwiperSlide key={i}>
            <Link to="/">
              <img src={`images/carousel${i}.webp`} alt="carousel" />
            </Link>
          </SwiperSlide>
        ))}

        <div
          role="button"
          ref={prevRef}
          className={buttonContainerStyle + "left-0 justify-end"}
        >
          <CarouselButton>
            <IoChevronBack />
          </CarouselButton>
        </div>

        <div
          role="button"
          ref={nextRef}
          className={buttonContainerStyle + "right-0 justify-start"}
        >
          <CarouselButton>
            <IoChevronForward />
          </CarouselButton>
        </div>
      </Swiper>
    </section>
  );
}

export default Carousel;
