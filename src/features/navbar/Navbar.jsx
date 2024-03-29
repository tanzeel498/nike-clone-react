import Logo from "../../ui/Logo";
import { FiUser } from "react-icons/fi";
import HeaderIcon from "../../ui/HeaderIcon";
import SearchBarDesktop from "../search/SearchBarDesktop";
import CartIcon from "../cart/CartIcon";
import SearchIcon from "../search/SearchIcon";
import MenLinks from "./MenLinks";
import WomenLinks from "./WomenLinks";
import MenuIcon from "./MenuIcon";
import AccessoriesLinks from "./AccessoriesLinks";
import DesktopMenuItem from "./DesktopMenuItem";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-stone-200 bg-white px-6 shadow-md tablet:grid tablet:grid-cols-9 tablet:px-14">
      <div className="max-h-16 tablet:col-span-2">
        <Logo />
      </div>

      <div className="flex grow items-center justify-center duration-200 tablet:col-span-5">
        <ul className="hidden items-center justify-center font-semibold tablet:flex">
          <DesktopMenuItem title="Men" to="products?gender=MEN">
            <MenLinks />
          </DesktopMenuItem>

          <DesktopMenuItem title="Women" to="/products?gender=WOMEN">
            <WomenLinks />
          </DesktopMenuItem>

          <DesktopMenuItem title="Accessories" to="/products?category=APPAREL">
            <AccessoriesLinks />
          </DesktopMenuItem>
        </ul>
      </div>

      <div className="flex items-center justify-end gap-4 tablet:col-span-2">
        <span className="hidden w-56 tablet:block">
          <SearchBarDesktop />
        </span>

        <SearchIcon />
        <CartIcon />

        <HeaderIcon to="account/join" hideAfterTablet={true}>
          <FiUser className="text-2xl" />
        </HeaderIcon>

        <MenuIcon />
      </div>
    </header>
  );
}

export default Navbar;
