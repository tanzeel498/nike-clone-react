import { IoBagOutline } from "react-icons/io5";
import HeaderIcon from "../../ui/HeaderIcon";

function CartIcon({ itemsLen = 5 }) {
  const numItems = itemsLen ? (itemsLen > 9 ? "9+" : itemsLen) : "";
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
