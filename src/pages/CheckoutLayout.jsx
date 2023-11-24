import { Outlet, ScrollRestoration } from "react-router-dom";
import CheckoutHeader from "../features/checkout/CheckoutHeader";

function CheckoutLayout() {
  return (
    <div>
      <ScrollRestoration />
      <CheckoutHeader />
      <Outlet />
    </div>
  );
}

export default CheckoutLayout;
