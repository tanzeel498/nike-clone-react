import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";

function OrderItemMobile({ item }) {
  return (
    <div className="flex flex-col rounded-md bg-stone-100 py-2 pl-4">
      <Link
        className="text-stone-900"
        to={`/product/${item.productId}?color=${item.colorCode}`}
      >
        <h4>{item.title}</h4>
      </Link>
      <span className="text-sm">Color code: {item.colorCode}</span>
      <span className="text-sm">Size: {item.size}</span>
      <span className="text-sm">
        {item.quantity}x {formatCurrency(item.price * item.quantity)}
      </span>
    </div>
  );
}

export default OrderItemMobile;
