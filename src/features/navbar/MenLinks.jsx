import { Link } from "react-router-dom";
import SportsLinks from "./SportsLinks";
import ShoesLinks from "./ShoesLinks";

function MenLinks({ onClick }) {
  return (
    <div className="flex justify-center gap-24 py-14">
      <div className="flex transform flex-col gap-2 text-sm text-stone-600">
        <Link
          onClick={onClick}
          className="mr-4 text-base font-bold text-stone-900"
          to="/products?sortBy=featured&gender=MEN"
        >
          New & Featured
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&sortBy=newest">
          New Arrivals
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&sortBy=featured">
          Best Sellers
        </Link>
      </div>
      <ShoesLinks gender="MEN" onClick={onClick} />
      <SportsLinks gender="MEN" onClick={onClick} />
    </div>
  );
}

export default MenLinks;
