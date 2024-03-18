import { Link } from "react-router-dom";

function ShoesLinks({ onClick, gender = "" }) {
  return (
    <div className="flex flex-col gap-2 text-sm text-stone-600">
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}`}
        className={`mr-4 text-base font-bold text-stone-900`}
      >
        All Shoes
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Lifestyle`}
      >
        Lifestyle
      </Link>
      <Link onClick={onClick} to={`/products?gender=${gender}&category=Jordan`}>
        Jordan
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Air%20Max`}
      >
        Air Max
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Air%20Force%201`}
      >
        Air Force 1
      </Link>
      <Link onClick={onClick} to={`/products?gender=${gender}&category=Dunk`}>
        Dunk
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Training+%26+Gym`}
      >
        Training & Gym
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Basketball`}
      >
        Basketball
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Running`}
      >
        Running
      </Link>
      <Link onClick={onClick} to={`/products?gender=${gender}&category=Slides`}>
        Sandals & Slides
      </Link>
      <Link onClick={onClick} to={`/products?gender=${gender}&price=0-100`}>
        Shoes $100 & Under
      </Link>
    </div>
  );
}

export default ShoesLinks;
