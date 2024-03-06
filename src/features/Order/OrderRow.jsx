import { useState } from "react";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";
import OrderDetails from "./OrderDetails";

function OrderRow({ order, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Table.Row isOpen={isOpen}>
        <div>{index + 1}</div>
        <div>{order._id}</div>
        <div>{order.createdAt}</div>
        <div>{formatCurrency(order.totalAmount)}</div>
        <div>{order.status}</div>
        <div>
          <Button onClick={() => setIsOpen((s) => !s)}>
            <span className="text-base">
              {isOpen ? "Hide Details" : "View Details"}
            </span>
          </Button>
        </div>
      </Table.Row>
      {isOpen && <OrderDetails id={order._id} />}
    </>
  );
}

export default OrderRow;
