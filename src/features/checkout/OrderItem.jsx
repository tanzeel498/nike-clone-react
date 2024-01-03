import { formatCurrency } from "../../utils/helpers";

function OrderItem({ data }) {
  return (
    <div className="flex w-full gap-5 mobile:w-2/5 tablet:w-full">
      <div className="shrink-0">
        <img className="w-16" src={data.squarishUrl} alt="cart-item-img" />
      </div>
      <div className="flex flex-col flex-wrap text-stone-500">
        <span className="font-semibold text-stone-900">{data.title}</span>
        <span>Style #: {data.colorCode}</span>
        <span>Size: {"9.5"}</span>
        <span>Color: {data.colorDescription}</span>
        <span>
          Qty: {data.quantity} @ {formatCurrency(data.currentPrice)}
        </span>
        <span>{formatCurrency(data.currentPrice * data.quantity)}</span>
      </div>
    </div>
  );
}

export default OrderItem;
