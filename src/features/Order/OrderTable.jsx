import Table from "../../ui/Table";
import OrderRow from "./OrderRow";
import useOrders from "./useOrders";

function OrderTable() {
  const { orders, isLoading } = useOrders();

  if (isLoading) return;
  return (
    <Table columns="0.6fr 2fr 2fr 1.5fr 1fr 1.5fr">
      <Table.Header>
        <div>Sr.</div>
        <div>id</div>
        <div>Date</div>
        <div>total</div>
        <div>status</div>
        <div></div>
      </Table.Header>
      <Table.Body
        data={orders}
        render={(order, i) => (
          <OrderRow key={order._id} index={i} order={order} />
        )}
      />
    </Table>
  );
}

export default OrderTable;
