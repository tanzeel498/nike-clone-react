import { ScrollRestoration } from "react-router-dom";
import CheckoutHeader from "../features/checkout/CheckoutHeader";
import ProtectedRoute from "../ui/ProtectedRoute";
import Checkout from "../features/checkout/Checkout";

function CheckoutLayout() {
  return (
    <>
      <ScrollRestoration />
      <CheckoutHeader />
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    </>
  );
}

export default CheckoutLayout;
