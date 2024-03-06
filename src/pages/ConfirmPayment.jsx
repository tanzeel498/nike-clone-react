import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentMessage from "../features/Order/PaymentMessage";

const stripePromise = loadStripe(
  "pk_test_51OkjI5KmzrzovZnjK6KtUPzZvVNnEaM3nUVFn4DaRnHByJSxdDWJUVqWsLwbymMl3rmmDRTQst2FzcEGEGc8h7Ol00qIrHEdxo",
);

function ConfirmPayment() {
  return (
    <div
      className="flex h-96 w-full items-center justify-center gap-5"
      style={{ flexDirection: "column" }}
    >
      <Elements stripe={stripePromise}>
        <PaymentMessage />
      </Elements>
    </div>
  );
}

export default ConfirmPayment;
