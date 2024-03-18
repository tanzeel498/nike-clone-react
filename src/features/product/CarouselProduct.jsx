import { useState } from "react";
import CarouselButton from "../homepage/CarouselButton";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import useProduct from "./useProduct";
import { Swiper, SwiperSlide } from "swiper/react";
import Spinner from "../../ui/Spinner";
import "swiper/css";

function CarouselProduct() {
  const { product, isLoading } = useProduct();
  const [thumbActive, setThumbActive] = useState(0);

  const { images } = product?.colors?.at(0) || {};
  const imagesLength = images?.length || 0;

  function handleNext() {
    setThumbActive((active) => {
      if (active === imagesLength - 1) return 0;
      return active + 1;
    });
  }

  function handlePrev() {
    setThumbActive((active) => {
      if (active === 0) return imagesLength - 1;
      return active - 1;
    });
  }

  // this will check if image exists at thumbActive
  if (!isLoading && thumbActive > imagesLength - 1) {
    setThumbActive(0);
    return;
  }

  return (
    <>
      <div className="top-16 hidden h-[700px] gap-4 tablet:sticky tablet:flex tablet:w-2/5 tablet:justify-end">
        <div className="thumbsContainer flex w-16 flex-shrink-0 flex-col gap-2 overflow-y-auto">
          {images?.map((img, index) => (
            <img
              key={index}
              src={img.srcThumbnail}
              alt={img.alt}
              className={`h-16 w-16 rounded-md border-stone-900 object-cover duration-100 ${
                thumbActive === index ? "border-[1px]" : ""
              }`}
              onMouseEnter={() => setThumbActive(index)}
            />
          ))}
        </div>

        <div className="imageContainer relative flex w-screen min-w-[600px] grow items-center justify-center overflow-clip bg-stone-100 tablet:w-full tablet:rounded-lg">
          {!isLoading ? (
            <img
              src={images?.at(thumbActive).src}
              alt={images?.at(thumbActive).alt}
              className={`h-full w-full object-cover ${
                isLoading ? "hidden" : "block"
              }`}
            />
          ) : (
            <Spinner />
          )}
          <div className="absolute flex w-11/12 justify-between tablet:bottom-6 tablet:right-5 tablet:w-[15%]">
            <div className="scale-105 opacity-70 duration-200 hover:opacity-100 tablet:scale-90">
              <CarouselButton onClick={handlePrev}>
                <IoChevronBack />
              </CarouselButton>
            </div>
            <div className="scale-105 opacity-70 duration-200 hover:opacity-100 tablet:scale-90">
              <CarouselButton onClick={handleNext}>
                <IoChevronForward />
              </CarouselButton>
            </div>
          </div>
        </div>
      </div>
      <div className="flex aspect-square w-full items-center justify-center bg-stone-100 tablet:hidden">
        {!isLoading ? (
          <Swiper slidesPerView={1} loop={true}>
            {images?.map((image, i) => (
              <SwiperSlide key={i}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="aspect-square object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Spinner />
        )}
      </div>
    </>
  );
}

export default CarouselProduct;
