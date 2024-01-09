import AddressItemDetails from "./AddressItemDetails";
import usePayment from "./usePayment";

function PaymentDetails() {
  const { payment, isLoading } = usePayment();

  if (isLoading) return;
  return (
    <div className="p-5">
      <div className="flex flex-col gap-1">
        <span className="font-semibold text-stone-900">Payment Mehod</span>

        <span className="font-medium text-stone-500">
          {payment.cardNumber.toString().slice(0, 4) +
            " Exp: " +
            payment.expiryDate}
        </span>
      </div>
      <AddressItemDetails
        name="Billing Details"
        address={payment.billingAddress}
      />
    </div>
  );
}

export default PaymentDetails;
