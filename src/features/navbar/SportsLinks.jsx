import { Link } from "react-router-dom";

function SportsLinks({ onClick, gender = "" }) {
  return (
    <div className="flex flex-col gap-2 text-sm text-stone-600">
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}`}
        className={`mr-4 text-base font-bold text-stone-900`}
      >
        Shop by Sport
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Basketball`}
      >
        Basketball
      </Link>
      <Link onClick={onClick} to={`/products?gender=${gender}&category=Golf`}>
        Golf
      </Link>
      <Link onClick={onClick} to={`/products?gender=${gender}&category=Soccer`}>
        Soccerr
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Running`}
      >
        Running
      </Link>
      <Link onClick={onClick} to={`/products?gender=${gender}&category=Tennis`}>
        Tennis
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Football`}
      >
        Football
      </Link>
      <Link
        onClick={onClick}
        to={`/products?gender=${gender}&category=Training+%26+Gym`}
      >
        Training & Gym
      </Link>
    </div>
  );
}

export default SportsLinks;
