import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { getClientSecret } from "../../services/apiCheckout";
import PaymentForm from "./PaymentForm";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51OkjI5KmzrzovZnjK6KtUPzZvVNnEaM3nUVFn4DaRnHByJSxdDWJUVqWsLwbymMl3rmmDRTQst2FzcEGEGc8h7Ol00qIrHEdxo",
);

function Payment() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(function () {
    getClientSecret().then((paymentIntentClientSecret) => {
      setClientSecret(paymentIntentClientSecret);
    });
  }, []);

  if (!clientSecret) return;

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
