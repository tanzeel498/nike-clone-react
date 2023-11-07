import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import CarouselButton from "./CarouselButton";
import ButtonLink from "../../ui/ButtonLink";
import { Link } from "react-router-dom";

const imagesData = [
  {
    src: "basketball.webp",
    title: "Nike Basketball",
    tagline: "Styles made for your game.",
  },
  {
    src: "running.webp",
    title: "Nike Running",
    tagline: "Everything you'll need for your every mile.",
  },
  {
    src: "golf.webp",
    title: "Nike Golf",
    tagline: "Conquer any sports in life.",
  },
  {
    src: "football.webp",
    title: "Nike Football",
    tagline: "Command the field in game-ready gear.",
  },
  {
    src: "soccer.webp",
    title: "Nike Soccer",
    tagline: "Bring mad style to the pitch with latest gear.",
  },
  {
    src: "baseball.webp",
    title: "Nike Baseball",
    tagline: "Step up to the plate in style.",
  },
];

function CarouselLarge() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="mx-6 mb-28 tablet:mx-14">
      <div className="mb-7 flex items-center justify-between">
        <h2 className="text-2xl font-semibold">Shop by Sport</h2>

        <div className="flex gap-6 mobile:mr-14">
          <div ref={prevRef} className="scale-125">
            <CarouselButton bg="bg-stone-200" disabled={isBeginning}>
              <IoChevronBack />
            </CarouselButton>
          </div>

          <div ref={nextRef} className="scale-125">
            <CarouselButton bg="bg-stone-200" disabled={isEnd}>
              <IoChevronForward />
            </CarouselButton>
          </div>
        </div>
      </div>

      <Swiper
        className="relative"
        modules={[Navigation, Scrollbar]}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSwiper={(swiper) => console.log(swiper)}
        navigation={{ nextEl: nextRef.current, prevEl: prevRef.current }}
        scrollbar={{ draggable: true }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        breakpoints={{
          600: { slidesPerView: 1.4 },
          960: { slidesPerView: 3 },
        }}
      >
        {imagesData.map((image, i) => (
          <SwiperSlide key={i} className="mb-8">
            <figure className="relative">
              <div>
                <img src={"images/" + image.src} alt="carousel" />
              </div>

              <figcaption>
                <h3 className="mb-1 mt-3">{image.title}</h3>
                <p className="pb-7">{image.tagline}</p>
                <div className="relative z-10">
                  <ButtonLink to="/products">Shop</ButtonLink>
                </div>
              </figcaption>
              <Link
                to="/product"
                className="absolute left-0 top-0 h-full w-full bg-transparent"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default CarouselLarge;
