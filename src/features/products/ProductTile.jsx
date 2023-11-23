import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { useState } from "react";

const baseURL = "https://www.nike.com";

function ProductTile({ product }) {
  const [activeColor, setActiveColor] = useState(0);
  const colorsLength = product.colorways.length;

  return (
    <div className="col-span-1 mb-10">
      <Link
        className={`${colorsLength > 1 ? "group" : ""}`}
        to={baseURL + product.colorways[activeColor].pdpUrl.split("}")[1]}
      >
        <img
          className="mb-4 aspect-square w-full object-cover"
          src={product.colorways[activeColor].images.portraitURL}
          alt=""
        />

        {colorsLength > 1 && (
          <div className="hidden flex-wrap items-center gap-1 tablet:group-hover:flex">
            {product.colorways.slice(0, 4).map((color, i) => (
              <img
                key={color.pid}
                className="aspect-square w-9"
                onMouseEnter={() => setActiveColor(i)}
                src={color.images.squarishURL}
                alt=""
              />
            ))}
            {colorsLength > 4 && (
              <span className="flex w-9 justify-center text-stone-600">
                +{colorsLength - 4}
              </span>
            )}
          </div>
        )}

        <p className="font-semibold capitalize text-orange-700">
          {product.colorways[activeColor].label !== "IN_STOCK" &&
            product.colorways[activeColor].label
              .toLowerCase()
              .replace("_", " ")}
        </p>

        <div className="product-info mb-4 duration-300 tablet:group-hover:hidden">
          <h4 className="my-1">{product.title}</h4>
          <p className="mb-1 text-stone-600">{product.subtitle}</p>
          <p className="text-stone-600">{`${product.colorways.length} ${
            colorsLength > 1 ? "Colors" : "Color"
          }`}</p>
        </div>

        <h4>
          {formatCurrency(product.colorways[activeColor].price.currentPrice)}
        </h4>
      </Link>
    </div>
  );
}

export default ProductTile;
