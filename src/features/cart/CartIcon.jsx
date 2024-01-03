import { IoBagOutline } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";
import useCart from "./useCart";

function CartIcon() {
  const { cart, isLoading } = useCart();

  const cartNumItems = isLoading
    ? 0
    : cart.reduce((sum, item) => {
        return sum + item.quantity;
      }, 0);
  const numItems = cartNumItems ? (cartNumItems > 9 ? "9+" : cartNumItems) : "";

  return (
    <HeaderIcon to="/cart">
      <IoBagOutline className="text-2xl" />
      <span className="absolute top-[15px] text-[11px] font-semibold">
        {numItems}
      </span>
    </HeaderIcon>
  );
}

export default CartIcon;
