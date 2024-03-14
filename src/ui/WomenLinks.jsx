import { Link } from "react-router-dom";

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
      <div className="flex flex-col gap-2 text-sm text-stone-600">
        <Link
          onClick={onClick}
          to="/products?gender=WOMEN"
          className="mr-4 text-base font-bold text-stone-900"
        >
          All Shoes
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Lifestyle">
          Lifestyle
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Jordan">
          Jordan
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&q=Air%20Max">
          Air Max
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&q=Air%20Force%201">
          Air Force 1
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&q=Dunk">
          Dunk
        </Link>
        <Link
          onClick={onClick}
          to="/products?gender=WOMEN&category=Training+%26+Gym"
        >
          Training & Gym
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Basketball">
          Basketball
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Running">
          Running
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Slides">
          Sandals & Slides
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&price=0-100">
          Shoes $100 & Under
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-sm text-stone-600">
        <Link
          onClick={onClick}
          to="/products?gender=WOMEN"
          className="mr-4 text-base font-bold text-stone-900"
        >
          Shop by Sport
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Basketball">
          Basketball
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Golf">
          Golf
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Soccerr">
          Soccerr
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Running">
          Running
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Tennis">
          Tennis
        </Link>
        <Link onClick={onClick} to="/products?gender=WOMEN&category=Football">
          Football
        </Link>
        <Link
          onClick={onClick}
          to="/products?gender=WOMEN&category=Training+%26+Gym"
        >
          Training & Gym
        </Link>
      </div>
    </div>
  );
}

export default WomenLinks;
