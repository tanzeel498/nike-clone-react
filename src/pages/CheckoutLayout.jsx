import { Outlet } from "react-router-dom";
import CheckoutHeader from "../features/checkout/CheckoutHeader";

function CheckoutLayout() {
  return (
    <div>
      <CheckoutHeader />
      <Outlet />
    </div>
  );
}

export default CheckoutLayout;
