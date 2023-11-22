import Logo from "./Logo";
import { IoSearch } from "react-icons/io5";
import { FiMenu, FiUser } from "react-icons/fi";
import HeaderIcon from "./HeaderIcon";
import SearchBar from "../features/search/SearchBar";
import CartIcon from "../features/cart/CartIcon";
import DesktopMenuItem from "./DesktopMenuItem";

function Navbar() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-stone-200 bg-white px-6 shadow-md tablet:grid tablet:grid-cols-9 tablet:px-14">
      <div className="max-h-16 tablet:col-span-2">
        <Logo />
      </div>

      <div className="flex grow items-center justify-center duration-200 tablet:col-span-5">
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
      </div>

      <div className="flex items-center justify-end gap-4 tablet:col-span-2">
        <span className="hidden w-56 tablet:block">
          <SearchBar />
        </span>
        <HeaderIcon hideAfterTablet={true}>
          <IoSearch className="text-2xl" />
        </HeaderIcon>

        <CartIcon />

        <HeaderIcon to="accounts/join" hideAfterTablet={true}>
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
