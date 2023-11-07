import { Link } from "react-router-dom";

function Logo() {
  return (
    <Link className="inline-block" to="/">
      <img
        className={`aspect-square w-16 hover:opacity-60`}
        src="/nike.svg"
        alt="nike-logo"
      />
    </Link>
  );
}

export default Logo;
