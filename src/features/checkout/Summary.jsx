import ButtonLink from "../../ui/ButtonLink";
import { formatCurrency } from "../../utils/helpers";
import OrderItem from "./OrderItem";
import SummaryRow from "./SummaryRow";

function Summary() {
  return (
    <div className="flex w-full flex-col-reverse gap-5 tablet:flex-col">
      <div className="hidden items-center justify-between capitalize tablet:flex">
        <h3>In Your bag</h3>
        <ButtonLink to="/cart" border={true}>
          Edit
        </ButtonLink>
      </div>

      <div className="flex flex-col gap-3 border-t-[1px] pt-5 tablet:border-b-[1px] tablet:pb-5">
        <SummaryRow title="Subtotal" value={formatCurrency(219.97)} />
        <SummaryRow
          title="Estimated Shipping & Handling"
          value={formatCurrency(7)}
        />
        <SummaryRow title="Estimated Tax" value={formatCurrency(0)} />
        <SummaryRow title="Total" value={formatCurrency(226.97)} />
      </div>
      <div className="flex flex-col flex-wrap gap-5 text-sm font-medium">
        <span className="mt-7 tablet:mt-0">Arrives by Tue, Nov 7</span>
        <div className="flex flex-wrap justify-between gap-5">
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </div>
      </div>
    </div>
  );
}

export default Summary;
