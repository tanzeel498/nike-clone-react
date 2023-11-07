import { Link } from "react-router-dom";
import LogoJordan from "../../ui/LogoJordan";

function BrandHeader() {
  return (
    <div className="hidden items-center justify-between bg-stone-100 px-14 py-2 tablet:flex">
      <ul className="flex gap-7">
        <li>
          <LogoJordan />
        </li>
        <li>
          <a href="https://www.nike.com/w/converse-shoes-akmjxzy7ok">
            <img
              className="h-6 w-6 hover:opacity-60"
              src="converse.svg"
              alt="converse"
            />
          </a>
        </li>
      </ul>

      <ul className="flex items-center gap-3 text-xs font-semibold">
        <li className="hover:opacity-60">
          <Link to="/accounts/login">Join Us</Link>
        </li>
        <li>|</li>
        <li className="hover:opacity-60">
          <Link to="/accounts/login">Sign In</Link>
        </li>
      </ul>
    </div>
  );
}

export default BrandHeader;
