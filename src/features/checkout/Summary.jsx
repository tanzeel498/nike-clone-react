import ButtonLink from "../../ui/ButtonLink";
import { formatCurrency } from "../../utils/helpers";
import OrderItem from "./OrderItem";

function Summary() {
  return (
    <div className="h-32 w-1/3">
      <div className="mb-5 flex items-center justify-between capitalize">
        <h3>In Your bag</h3>
        <ButtonLink to="/cart" border={true}>
          Edit
        </ButtonLink>
      </div>
      <div className="flex flex-col gap-1 border-b-[1px] pb-4">
        <div className="flex items-center justify-between">
          <span>Subtotal</span>
          <span>{formatCurrency(219.97)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Estimated Shipping & Handling</span>
          <span>{formatCurrency(7)}</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Estimated Tax</span>
          <span>{formatCurrency(0)}</span>
        </div>
        <div className="flex items-center justify-between border-stone-200 pt-4">
          <span>Total</span>
          <span>{formatCurrency(226.97)}</span>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-4 text-sm font-semibold">
        <span>Arrives by Tue, Nov 7</span>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </div>
    </div>
  );
}

export default Summary;
