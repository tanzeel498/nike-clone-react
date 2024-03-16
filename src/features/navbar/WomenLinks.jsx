import { Link } from "react-router-dom";
import ShoesLinks from "./ShoesLinks";
import SportsLinks from "./SportsLinks";

function WomenLinks({ onClick }) {
  return (
    <div className="flex justify-center gap-24 py-14">
      <div className="flex flex-col gap-2 text-sm text-stone-600">
        <Link
          onClick={onClick}
          className="mr-4 text-base font-bold text-stone-900"
          to="/products?sortBy=featured&gender=WOMEN"
        >
          New & Featured
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&sortBy=newest">
          New Arrivals
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&sortBy=featured">
          Best Sellers
        </Link>
      </div>
      <ShoesLinks gender="WOMEN" onClick={onClick} />
      <SportsLinks gender="WOMEN" onClick={onClick} />
    </div>
  );
}

export default WomenLinks;
