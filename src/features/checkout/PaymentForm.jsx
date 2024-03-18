import { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import Button from "../../ui/Button";
import Message from "../../ui/Message";

export default function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const homeUrl = window.location.origin;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${homeUrl}/confirmPayment` },
    });

    // This point will only be reached if there is an immediate error when confirming the payment. Otherwise, your customer will be redirected to your `return_url`
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {message && <Message type="error">{message}</Message>}
      <PaymentElement options={{ layout: "tabs" }} />
      <div className="mt-5 flex justify-end">
        <Button disabled={isLoading || !stripe || !elements}>
          {isLoading ? <span className="spinner-mini"></span> : "Pay Now"}
        </Button>
      </div>
    </form>
  );
}
