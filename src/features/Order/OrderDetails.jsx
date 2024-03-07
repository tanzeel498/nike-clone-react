import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import OrderItemRow from "./OrderItemRow";
import useOrder from "./useOrder";

function OrderDetails({ id }) {
  const { order, isLoading, error } = useOrder(id);

  if (isLoading) return;
  const { address, items, totalAmount } = order;

  return (
    <div className="border-b-[1px]">
      <div className="mx-auto mb-8 w-4/5">
        <h2 className="mb-2 text-lg">Order Items</h2>
        <Table columns="3fr 2fr 1fr 1fr 1fr 1fr">
          <Table.Header type="secondary">
            <div>product</div>
            <div>color-code</div>
            <div>size</div>
            <div>Price</div>
            <div>quantity</div>
            <div>total</div>
          </Table.Header>
          <Table.Body
            data={items}
            render={(item) => <OrderItemRow item={item} />}
          />
        </Table>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="rounded-md border p-4">
            <h2 className="mb-2 text-lg font-medium">Shipping Summary</h2>
            <p>Subtotal: {formatCurrency(totalAmount)}</p>
            <p>Shipping (Standard): {formatCurrency(0)}</p>
            <p className="font-bold">
              Total: {formatCurrency(totalAmount)} USD
            </p>
          </div>
          <div className="rounded-md border p-4">
            <h2 className="mb-2 text-lg font-medium">Shipping Address</h2>
            <p>{`${address.firstName} ${address.lastName} (${address.phone})`}</p>
            <p>{address.apt + " " + address.address}</p>
            <p>{address.city + ", " + address.state}</p>
            <p>USA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
