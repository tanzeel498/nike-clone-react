import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { data } from "../cart/bagData";

function SearchResultItem({ onItemClick }) {
  return (
    <Link to="/product" onClick={onItemClick} className="flex gap-5">
      <div>
        <img
          className="aspect-square w-16 object-cover"
          src={data[0].images.squarishURL}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-between text-sm font-medium">
        <span>{data[0].title}</span>
        <span className="text-stone-500">{data[0].subtitle}</span>
        <span>{formatCurrency(data[0].priceInfo.price)}</span>
      </div>
    </Link>
  );
}

export default SearchResultItem;
