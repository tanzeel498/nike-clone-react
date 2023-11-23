import { formatCurrency } from "../../utils/helpers";
import { data } from "../cart/bagData";

function OrderItem() {
  return (
    <div className="flex w-full gap-5 mobile:w-2/5 tablet:w-full">
      <div className="shrink-0">
        <img className="w-16" src={data[0].images.squarishURL} alt="" />
      </div>
      <div className="flex flex-col flex-wrap text-stone-500">
        <span className="font-semibold text-stone-900">{data[0].title}</span>
        <span>Style #: {"DV3278-102"}</span>
        <span>Size: {"9.5"}</span>
        <span>Color: {data[0].colorDescription}</span>
        <span>
          Qty: {data[0].quantity} @ {formatCurrency(data[0].priceInfo.price)}
        </span>
        <span>{formatCurrency(data[0].priceInfo.subtotal)}</span>
      </div>
    </div>
  );
}

export default OrderItem;
