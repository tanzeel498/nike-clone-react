import { Link } from "react-router-dom";

function MenLinks({ onClick }) {
  return (
    <div className="flex justify-center gap-24 py-14 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
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
      <div className="flex flex-col gap-2 text-sm text-stone-600">
        <Link
          onClick={onClick}
          to="/products?gender=MEN"
          className="mr-4 text-base font-bold text-stone-900"
        >
          All Shoes
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Lifestyle">
          Lifestyle
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Jordan">
          Jordan
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&q=Air%20Max">
          Air Max
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&q=Air%20Force%201">
          Air Force 1
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&q=Dunk">
          Dunk
        </Link>
        <Link
          onClick={onClick}
          to="/products?gender=MEN&category=Training+%26+Gym"
        >
          Training & Gym
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Basketball">
          Basketball
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Running">
          Running
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Slides">
          Sandals & Slides
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&price=0-100">
          Shoes $100 & Under
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
        <Link onClick={onClick} to="/products?gender=MEN&category=Basketball">
          Basketball
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Golf">
          Golf
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Soccerr">
          Soccerr
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Running">
          Running
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Tennis">
          Tennis
        </Link>
        <Link onClick={onClick} to="/products?gender=MEN&category=Football">
          Football
        </Link>
        <Link
          onClick={onClick}
          to="/products?gender=MEN&category=Training+%26+Gym"
        >
          Training & Gym
        </Link>
      </div>
    </div>
  );
}

export default MenLinks;
