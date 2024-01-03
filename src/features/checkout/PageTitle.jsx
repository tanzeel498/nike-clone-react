import { formatCurrency } from "../../utils/helpers";
import useCart from "../cart/useCart";

function PageTitle({ title }) {
  const { cart, isLoading } = useCart();

  if (isLoading) return;
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0,
  );
  const cartNumItems = cart.reduce((sum, item) => {
    return sum + item.quantity;
  }, 0);

  return (
    <div className="my-14 flex flex-col items-center gap-2">
      <h2 className="text-3xl">{title}</h2>
      <div className="flex gap-1 font-semibold">
        <span className="text-stone-600">
          {cartNumItems} {cartNumItems > 1 ? "Items" : "Item"} |
        </span>
        <span>{formatCurrency(cartTotal)}</span>
      </div>
    </div>
  );
}

export default PageTitle;
