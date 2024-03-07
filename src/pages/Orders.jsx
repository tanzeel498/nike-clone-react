import OrderTable from "../features/Order/OrderTable";

function Orders() {
  return (
    <div className="mx-auto mb-28 flex w-2/3 flex-col items-center">
      <h2 className="my-14 text-3xl">Orders</h2>
      <OrderTable />
    </div>
  );
}

export default Orders;
