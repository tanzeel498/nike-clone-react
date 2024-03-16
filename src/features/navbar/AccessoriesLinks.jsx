import { Link } from "react-router-dom";
import SportsLinks from "./SportsLinks";

function AccessoriesLinks({ onClick }) {
  return (
    <div className="flex justify-center gap-24 py-14 transition-transform duration-500">
      <div className="flex transform flex-col gap-2 text-sm text-stone-600">
        <Link
          onClick={onClick}
          className="mr-4 text-base font-bold text-stone-900"
          to="/products?sortBy=featured&gender=MEN"
        >
          Featured
        </Link>
        <Link onClick={onClick} to="/products?category=Baseball&sortBy=newest">
          Baseball Essentials
        </Link>
        <Link onClick={onClick} to="/products?sortBy=featured">
          Best Sellers
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-sm text-stone-600">
        <Link
          onClick={onClick}
          to="/products?category=EQUIPMENT"
          className="mr-4 text-base font-bold text-stone-900"
        >
          All Accessories
        </Link>
        <Link onClick={onClick} to="/products?category=EQUIPMENT&q=socks">
          Socks
        </Link>
        <Link onClick={onClick} to="/products?q=bag&category=EQUIPMENT">
          Bags & Backpacks
        </Link>
        <Link onClick={onClick} to="/products?category=APPAREL&q=cap">
          Hats & Headwear
        </Link>
        <Link onClick={onClick} to="/products?q=belt&category=EQUIPMENT">
          Belts
        </Link>
        <Link onClick={onClick} to="/products?q=glove&category=EQUIPMENT">
          Gloves
        </Link>
        <Link onClick={onClick} to="/products?category=Jordan">
          Jordan
        </Link>
      </div>
      <SportsLinks onClick={onClick} />
    </div>
  );
}

export default AccessoriesLinks;
