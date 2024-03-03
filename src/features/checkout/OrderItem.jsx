import { formatCurrency } from "../../utils/helpers";
import useCartProduct from "../cart/useCartProduct";

function OrderItem({ data: { _id, colorCode, product, quantity } }) {
  const { cartProduct, isLoading, error } = useCartProduct(
    product._id,
    colorCode,
  );

  if (isLoading) return;
  return (
    <div className="flex w-full gap-5 mobile:w-2/5 tablet:w-full">
      <div className="shrink-0">
        <img
          className="w-16"
          src={cartProduct.colors.at(0).squarishUrl}
          alt="cart-item-img"
        />
      </div>
      <div className="flex flex-col flex-wrap text-stone-500">
        <span className="font-semibold text-stone-900">
          {cartProduct.title}
        </span>
        <span>Style #: {colorCode}</span>
        <span>Size: {"9.5"}</span>
        <span>Color: {cartProduct.colors.at(0).colorDescription}</span>
        <span>
          Qty: {quantity} @{" "}
          {formatCurrency(cartProduct.colors.at(0).currentPrice)}
        </span>
        <span>
          {formatCurrency(cartProduct.colors.at(0).currentPrice * quantity)}
        </span>
      </div>
    </div>
  );
}

export default OrderItem;
