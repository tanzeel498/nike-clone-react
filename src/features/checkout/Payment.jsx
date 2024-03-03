import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { useQuery } from "@tanstack/react-query";
import { getClientSecret } from "../../services/apiCheckout";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(
  "pk_test_51OkjI5KmzrzovZnjK6KtUPzZvVNnEaM3nUVFn4DaRnHByJSxdDWJUVqWsLwbymMl3rmmDRTQst2FzcEGEGc8h7Ol00qIrHEdxo",
);

function Payment() {
  const { data: clientSecret, isLoading } = useQuery({
    queryKey: ["clientSecret"],
    queryFn: getClientSecret,
  });

  if (isLoading) return;

  const options = {
    clientSecret,
    appearance: { theme: "stripe" },
  };

  return (
    <div className="mt-10">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      )}
    </div>
  );
}

export default Payment;
