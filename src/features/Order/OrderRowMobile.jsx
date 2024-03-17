import { useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import ButtonLink from "../../ui/ButtonLink";
import OrderDetailsMobile from "./OrderDetailsMobile";

function OrderRowMobile({ order }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-md border-[1px] border-stone-700 p-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="block text-sm">{`${order.createdAt} (${order.status})`}</span>
          <span className="font-semibold">
            {formatCurrency(order.totalAmount)}
          </span>
        </div>
        <span>
          <ButtonLink onClick={() => setIsOpen((s) => !s)}>
            <span className="text-xs">
              {isOpen ? "Hide Details" : "View Details"}
            </span>
          </ButtonLink>
        </span>
      </div>
      {isOpen && <OrderDetailsMobile id={order._id} />}
    </div>
  );
}

export default OrderRowMobile;
