import ButtonLink from "../../ui/ButtonLink";
import { formatCurrency } from "../../utils/helpers";
import useCart from "../cart/useCart";
import OrderItem from "./OrderItem";
import SummaryRow from "./SummaryRow";

function Summary() {
  const { cart, isLoading } = useCart();

  if (isLoading) return;
  const cartTotal = cart.reduce(
    (sum, item) => sum + item.currentPrice * item.quantity,
    0,
  );
  const tax = 7;
  const shipping = 12.99;

  return (
    <div className="flex w-full flex-col-reverse gap-5 tablet:flex-col">
      <div className="hidden items-center justify-between capitalize tablet:flex">
        <h3>In Your bag</h3>
        <ButtonLink to="/cart" border={true}>
          Edit
        </ButtonLink>
      </div>

      <div className="flex flex-col gap-3 border-t-[1px] pt-5 tablet:border-b-[1px] tablet:pb-5">
        <SummaryRow title="Subtotal" value={formatCurrency(cartTotal)} />
        <SummaryRow
          title="Estimated Shipping & Handling"
          value={formatCurrency(shipping)}
        />
        <SummaryRow title="Estimated Tax" value={formatCurrency(tax)} />
        <SummaryRow
          title="Total"
          value={formatCurrency(cartTotal + shipping + tax)}
        />
      </div>
      <div className="flex flex-col flex-wrap gap-5 text-sm font-medium">
        <span className="mt-7 tablet:mt-0">Arrives by Tue, Nov 7</span>
        <div className="flex flex-wrap justify-between gap-5">
          {cart.map((item) => (
            <OrderItem key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Summary;
