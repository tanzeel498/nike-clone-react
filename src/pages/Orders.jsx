import OrderTable from "../features/Order/OrderTable";

function Orders() {
  return (
    <div
      className="mx-auto mb-28 flex w-2/3 items-center"
      style={{ flexDirection: "column" }}
    >
      <h2 className="my-14 text-3xl">Orders</h2>
      <OrderTable />
    </div>
  );
}

export default Orders;
