import { Link } from "react-router-dom";

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
      <div className="flex flex-col gap-2 text-sm text-stone-600">
        <Link
          onClick={onClick}
          to="/products?gender=MEN"
          className="mr-4 text-base font-bold text-stone-900"
        >
          Shop by Sport
        </Link>
        <Link onClick={onClick} to="/products?category=Basketball">
          Basketball
        </Link>
        <Link onClick={onClick} to="/products?category=Golf">
          Golf
        </Link>
        <Link onClick={onClick} to="/products?category=Soccerr">
          Soccerr
        </Link>
        <Link onClick={onClick} to="/products?category=Running">
          Running
        </Link>
        <Link onClick={onClick} to="/products?category=Tennis">
          Tennis
        </Link>
        <Link onClick={onClick} to="/products?category=Football">
          Football
        </Link>
        <Link onClick={onClick} to="/products?category=Training+%26+Gym">
          Training & Gym
        </Link>
      </div>
    </div>
  );
}

export default AccessoriesLinks;
