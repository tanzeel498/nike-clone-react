import { useEffect, useState } from "react";
import Message from "../../ui/Message";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import useCreateOrder from "./useCreateOrder";

function PaymentMessage() {
  const [searchParams] = useSearchParams();
  const clientSecret = searchParams.get("payment_intent_client_secret");
  const { createOrder } = useCreateOrder();
  const navigate = useNavigate();
  const stripe = useStripe();
  const [message, setMessage] = useState("Fetching data");

  useEffect(() => {
    if (!stripe) return;
    if (!clientSecret) return;

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          createOrder(paymentIntent.id, {
            onError: () => {
              setMessage("An Error occured. Please Refresh this page.");
            },
          });
          setMessage("Payment successfull!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [clientSecret, navigate, stripe, createOrder]);

  return (
    <>
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-stone-900">
        <span className="spinner-mini"></span>
      </div>
      <Message
        type={
          message === "Payment successfull!"
            ? "success"
            : message === "Your payment is processing."
            ? ""
            : "error"
        }
      >
        {message}
      </Message>
    </>
  );
}

export default PaymentMessage;
