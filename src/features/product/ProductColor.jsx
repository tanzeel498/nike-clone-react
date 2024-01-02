import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getProductColors } from "../../services/apiProducts";

function ProductColor() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const activeColor = searchParams.get("color");
  const { isLoading, data: colors } = useQuery({
    queryKey: ["product-colors", id],
    queryFn: () => getProductColors(id),
  });

  if (isLoading) return;

  function handleSetColor(color) {
    searchParams.set("color", color);
    setSearchParams(searchParams);
  }

  return (
    <div className="my-6 flex w-[400px] flex-wrap gap-2">
      {colors.map((color) => (
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
