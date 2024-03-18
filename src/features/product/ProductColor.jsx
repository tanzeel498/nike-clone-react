import { Link, useSearchParams } from "react-router-dom";
import useProductColors from "./useProductColors";

function ProductColor() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { product, isLoading: colorsIsLoading } = useProductColors();

  const activeColor =
    searchParams.get("color") || product?.colors?.at(0)?.colorCode;

  function handleSetColor(color) {
    searchParams.set("color", color);
    setSearchParams(searchParams);
  }

  return (
    <div className="my-6 flex w-[400px] flex-wrap gap-2">
      {colorsIsLoading
        ? Array.from({ length: 4 })?.map((_, index) => (
            <div
              key={index}
              className="h-16 w-16 rounded-md bg-stone-200"
            ></div>
          ))
        : product?.colors?.map((color) => (
            <Link
              preventScrollReset={true}
              key={color.colorCode}
              onClick={() => handleSetColor(color.colorCode)}
              className={`w-28 cursor-pointer overflow-hidden rounded-md tablet:w-[70px] ${
                color.colorCode === activeColor ? "border-[1px]" : ""
              } border-stone-900`}
            >
              <img src={color.squarishUrl} alt="color-img" />
            </Link>
          ))}
    </div>
  );
}

export default ProductColor;
