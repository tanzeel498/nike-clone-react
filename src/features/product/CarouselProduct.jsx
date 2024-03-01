import { useState } from "react";
import CarouselButton from "../homepage/CarouselButton";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import useProduct from "./useProduct";

function CarouselProduct() {
  const { product, isLoading } = useProduct();
  const [thumbActive, setThumbActive] = useState(0);

  if (isLoading) return;

  const { images } = product.colors.at(0);
  const imagesLength = product.colors.at(0).images.length;

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

  return (
    <div className="top-16 flex h-[700px] gap-4 tablet:sticky tablet:w-2/5 tablet:justify-end">
      <div className="thumbsContainer hidden w-16 flex-shrink-0 flex-col gap-2 overflow-y-auto tablet:flex">
        {images.map((img, index) => (
          <div key={index} className="thumb">
            <img
              src={img.src}
              alt={img.alt}
              className={`h-16 w-16 rounded-md border-stone-900 object-cover duration-100 ${
                thumbActive === index ? "border-[1px]" : ""
              }`}
              onMouseEnter={() => setThumbActive(index)}
            />
          </div>
        ))}
      </div>

      <div className="imageContainer relative flex h-full w-screen grow items-center justify-center overflow-clip tablet:w-full tablet:rounded-lg">
        <img
          src={images.at(thumbActive).src}
          alt={images.at(thumbActive).alt}
          className="h-full w-full object-cover"
        />
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
  );
}

export default CarouselProduct;
