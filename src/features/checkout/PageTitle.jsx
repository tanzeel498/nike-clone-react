import { formatCurrency } from "../../utils/helpers";
import useCart from "../cart/useCart";
import useNumCartItems from "../cart/useNumCartItems";

function PageTitle({ title }) {
  const { cart, isLoading: cartIsLoading } = useCart();
  const { numCartItems, isLoading: numCartIsLoading } = useNumCartItems();

  if (cartIsLoading || numCartIsLoading) return;
  // const cartTotal = cart.reduce(
  //   (sum, item) => sum + item.currentPrice * item.quantity,
  //   0,
  // );
  const cartTotal = 480;

  return (
    <div className="my-14 flex flex-col items-center gap-2">
      <h2 className="text-3xl">{title}</h2>
      <div className="flex gap-1 font-semibold">
        <span className="text-stone-600">
          {numCartItems} {numCartItems > 1 ? "Items" : "Item"} |
        </span>
        <span>{formatCurrency(cartTotal)}</span>
      </div>
    </div>
  );
}

export default PageTitle;
