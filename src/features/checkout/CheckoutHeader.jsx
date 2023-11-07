import Logo from "../../ui/Logo";
import CartIcon from "../cart/CartIcon";

function CheckoutHeader() {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b-[1px] border-stone-200 bg-white px-6 tablet:px-14">
      <Logo />
      <CartIcon />
    </header>
  );
}

export default CheckoutHeader;
