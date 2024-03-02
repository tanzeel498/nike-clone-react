import { Link } from "react-router-dom";
import LogoJordan from "./LogoJordan";
import useUser from "../features/authentication/useUser";
import { FiUser } from "react-icons/fi";
import ButtonLink from "./ButtonLink";
import useLogout from "../features/authentication/useLogout";

function BrandHeader() {
  const { user } = useUser();
  const { logout } = useLogout();

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

      {user ? (
        <ul className="flex items-center gap-3 text-xs font-semibold">
          <li>
            <Link to="accounts/join" className="flex items-center gap-2">
              <span>Hi, {user.firstName} </span>
              <FiUser className="text-lg" />
            </Link>
          </li>
          <li>|</li>
          <li>
            <ButtonLink border={false} onClick={() => logout()}>
              Logout
            </ButtonLink>
          </li>
        </ul>
      ) : (
        <ul className="flex items-center gap-3 text-xs font-semibold">
          <li className="hover:opacity-60">
            <Link to="/account/join">Join Us</Link>
          </li>
          <li>|</li>
          <li className="hover:opacity-60">
            <Link to="/account/join">Sign In</Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default BrandHeader;
