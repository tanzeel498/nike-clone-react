import Message from "../../ui/Message";
import { formatCurrency } from "../../utils/helpers";
import OrderItemMobile from "./OrderItemMobile";
import useOrder from "./useOrder";

function OrderDetailsMobile({ id }) {
  const { order, isLoading, error } = useOrder(id);

  if (isLoading) return;
  if (error) return <Message type="error">{error.message}</Message>;

  const { address, items, totalAmount } = order;
  return (
    <>
      <div className="my-5">
        <h4 className="mb-2 font-semibold">Order Items:</h4>

        {items.map((item, i) => (
          <OrderItemMobile key={i} item={item} />
        ))}
      </div>
      <div>
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          <h4 className="font-semibold">Shipping Summary:</h4>
          <div className="ml-2 flex flex-col">
            <span className="text-sm">
              Subtotal: {formatCurrency(totalAmount)}
            </span>
            <span className="text-sm">
              Shipping (Standard): {formatCurrency(0)}
            </span>
            <span className="text-sm font-bold">
              Total: {formatCurrency(totalAmount)} USD
            </span>
          </div>
          <h4 className="font-semibold">Shipping Address:</h4>
          <div className="ml-2 flex flex-col">
            <span className="text-sm">{`${address.firstName} ${address.lastName} (${address.phone})`}</span>
            <span className="text-sm">
              {address.apt + " " + address.address}
            </span>
            <span className="text-sm">
              {address.city + ", " + address.state}
            </span>
            <span className="text-sm">USA</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetailsMobile;
