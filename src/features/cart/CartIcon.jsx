import { IoBagOutline } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";
import useNumCartItems from "./useNumCartItems";

function CartIcon() {
  const { numCartItems, isLoading } = useNumCartItems();

  const totalCartItems = isLoading ? 0 : numCartItems;
  const numItemsString = totalCartItems
    ? totalCartItems > 9
      ? "9+"
      : totalCartItems
    : "";

  return (
    <HeaderIcon to="/cart">
      <IoBagOutline className="text-2xl" />
      <span className="absolute top-[15px] text-[11px] font-semibold">
        {numItemsString}
      </span>
    </HeaderIcon>
  );
}

export default CartIcon;
