import Spinner from "../../ui/Spinner";
import OrderRowMobile from "./OrderRowMobile";
import useOrders from "./useOrders";

function OrderTableMobile() {
  const { orders, isLoading } = useOrders();

  if (isLoading) return <Spinner />;
  return (
    <div className="flex w-full flex-col gap-5 px-4 mobile:hidden">
      {orders.map((order) => (
        <OrderRowMobile key={order._id} order={order} />
      ))}
    </div>
  );
}

export default OrderTableMobile;
