import { useSearchParams } from "react-router-dom";
import useProductColors from "./useProductColors";

function ProductColor() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { product, isLoading } = useProductColors();

  const activeColor =
    searchParams.get("color") || product?.colors?.at(0)?.colorCode;

  function handleSetColor(color) {
    searchParams.set("color", color);
    setSearchParams(searchParams);
  }

  return (
    <div className="my-6 flex w-[400px] flex-wrap gap-2">
      {isLoading
        ? Array.from({ length: 4 })?.map((_, index) => (
            <div
              key={index}
              className="h-16 w-16 rounded-md bg-stone-200"
            ></div>
          ))
        : product?.colors?.map((color) => (
            <img
              key={color.colorCode}
              className={`w-28 cursor-pointer rounded-md tablet:w-[70px] ${
                color.colorCode === activeColor ? "border-[1px]" : ""
              } border-stone-900`}
              src={color.squarishUrl}
              alt="color-img"
              onClick={() => handleSetColor(color.colorCode)}
            />
          ))}
    </div>
  );
}

export default ProductColor;
