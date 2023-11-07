import Logo from "./Logo";
import { IoSearch } from "react-icons/io5";
import { FiMenu, FiUser } from "react-icons/fi";
import HeaderIcon from "./HeaderIcon";
import SearchBar from "./SearchBar";
import CartIcon from "../features/cart/CartIcon";
import DesktopMenuItem from "./DesktopMenuItem";

function Navbar() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between overflow-x-clip border-b-[1px] border-stone-200 bg-white px-6 tablet:px-14">
      <div className="relative z-20 h-16">
        <Logo />
      </div>

      <div className="relative flex grow items-center justify-center">
        <ul className="hidden items-center justify-center font-semibold tablet:flex">
          <li className="group h-16">
            <DesktopMenuItem title="Men" to="/men" />
          </li>
          <li className="group h-16">
            <DesktopMenuItem title="Women" to="/women" />
          </li>
          <li className="group h-16">
            <DesktopMenuItem title="Kids" to="/kids" />
          </li>
        </ul>
        <SearchBar />
      </div>

      <div className="flex items-center justify-end">
        <HeaderIcon hideAfterTablet={true}>
          <IoSearch className="text-2xl" />
        </HeaderIcon>

        <CartIcon />

        <HeaderIcon to="accounts/login" hideAfterTablet={true}>
          <FiUser className="text-2xl" />
        </HeaderIcon>

        <HeaderIcon to="/" hideAfterTablet={true}>
          <FiMenu className="text-2xl" />
        </HeaderIcon>
      </div>
    </header>
  );
}

export default Navbar;
