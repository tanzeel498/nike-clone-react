import { useEffect, useState } from "react";
import Message from "../../ui/Message";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useStripe } from "@stripe/react-stripe-js";
import useCreateOrder from "./useCreateOrder";

function PaymentMessage() {
  const [searchParams] = useSearchParams();
  const clientSecret = searchParams.get("payment_intent_client_secret");
  const { createOrder, isPending, error } = useCreateOrder();
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
              setMessage(
                "There was a problem creating your Order. Please Refresh this page.",
              );
            },
          });
          setMessage("Payment successfull! Redirecting...");
          break;
        case "processing":
          setMessage("Your payment is processing. Redirecting...");
          navigate("/orders");
          break;
        case "requires_payment_method":
          setMessage(
            "Your payment was not successful, please try again. Redirecting...",
          );
          navigate("/orders");
          break;
        default:
          setMessage("Something went wrong. Redirecting...");
          navigate("/orders");
          break;
      }
    });
  }, [clientSecret, navigate, stripe, createOrder]);

  return (
    <>
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-stone-900">
        <span className="loader"></span>
      </div>
      <Message>{message}</Message>
    </>
  );
}

export default PaymentMessage;
