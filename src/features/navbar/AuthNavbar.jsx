import { Link } from "react-router-dom";
import useUser from "../authentication/useUser";
import { FiUser } from "react-icons/fi";
import ButtonLink from "../../ui/ButtonLink";
import { useQueryClient } from "@tanstack/react-query";

function AuthNavbar() {
  const { user } = useUser();
  const queryClient = useQueryClient();

  function handleLogout() {
    localStorage.removeItem("token");
    queryClient.invalidateQueries(["user", "numCartItems"]);
  }

  return (
    <div className="relative z-50 hidden items-center justify-end bg-stone-100 px-14 py-2 tablet:flex">
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
            <ButtonLink border={false} onClick={handleLogout}>
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

export default AuthNavbar;
