import { useState } from "react";
import CarouselButton from "../homepage/CarouselButton";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

function CarouselProduct({ activeColor }) {
  // fetch images from server based on the activecolor

  const [thumbActive, setThumbActive] = useState(0);
  const imagesLink = Array.from(
    {
      length: 9,
    },
    (_, i) => `product/${activeColor === "CZ0790-161" ? "0" : ""}${i}.webp`,
  );

  function handleNext() {
    setThumbActive((active) => {
      if (active === imagesLink.length - 1) return 0;
      return active + 1;
    });
  }

  function handlePrev() {
    setThumbActive((active) => {
      if (active === 0) return imagesLink.length - 1;
      return active - 1;
    });
  }

  return (
    <div className="sticky top-16 flex h-[696px] justify-end gap-4">
      <div className="thumbsContainer flex w-16 flex-shrink-0 flex-col gap-2 overflow-y-auto">
        {imagesLink.map((src, index) => (
          <div key={index} className="thumb">
            <img
              src={src}
              alt=""
              className="h-16 w-16 rounded-md object-cover"
              onMouseEnter={() => setThumbActive(index)}
            />
          </div>
        ))}
      </div>
      <div className="imageContainer relative h-full min-w-[535px] overflow-clip rounded-lg">
        <img
          src={imagesLink.at(thumbActive)}
          alt=""
          className="h-full object-cover"
        />
        <div className="absolute bottom-6 right-5 flex gap-2">
          <div className="scale-90">
            <CarouselButton onClick={handlePrev}>
              <IoChevronBack />
            </CarouselButton>
          </div>
          <div className="scale-90">
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
