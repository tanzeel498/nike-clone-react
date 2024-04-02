import { Link } from "react-router-dom";

function Logo() {
  return (
    <div className="inline-block">
      <Link to="/">
        <img
          className={`aspect-square h-16 hover:opacity-60`}
          src="/TDev.svg"
          alt="TDev-logo"
        />
      </Link>
    </div>
  );
}

export default Logo;
