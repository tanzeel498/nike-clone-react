import { Link } from "react-router-dom";
import Table from "../../ui/Table";
import { formatCurrency } from "../../utils/helpers";

function OrderItemRow({ item }) {
  return (
    <Table.Row>
      <Link
        className="text-stone-900"
        to={`/product/${item.productId}?color=${item.colorCode}`}
      >
        <h4>{item.title}</h4>
      </Link>
      <div>{item.colorCode}</div>
      <div>{item.size}</div>
      <div>{formatCurrency(item.price)}</div>
      <div>{item.quantity}</div>
      <div>{formatCurrency(item.price * item.quantity)}</div>
    </Table.Row>
  );
}

export default OrderItemRow;
