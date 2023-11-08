import { Link } from "react-router-dom";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img
          className={`aspect-square h-16 hover:opacity-60`}
          src="/nike.svg"
          alt="nike-logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
