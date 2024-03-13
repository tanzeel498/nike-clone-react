import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function SearchResultItem({ onItemClick, product }) {
  return (
    <Link
      to={`/product/${product._id}?color=${product.colors.at(0).colorCode}`}
      onClick={onItemClick}
      className="flex gap-5"
    >
      <div>
        <img
          className="aspect-square w-16 object-cover"
          src={product.colors.at(0).squarishUrl}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between text-sm font-medium">
        <span>{product.title}</span>
        <span className="text-stone-500">{product.subtitle}</span>
        <span>{formatCurrency(product.colors.at(0).currentPrice)}</span>
      </div>
    </Link>
  );
}

export default SearchResultItem;
