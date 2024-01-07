import { useForm } from "react-hook-form";
import RadioButton from "../../ui/RadioButton";
import AddCreditCardForm from "./AddCreditCardForm";
import AddressItem from "./AddressItem";
import useAddress from "./useAddress";
import { useState } from "react";
import BillingForm from "./BillingForm";
import Button from "../../ui/Button";

function PaymentForm({ setPaymentAdded }) {
  const [billingAddress, setBillingAddress] = useState(true);
  const { address, isLoading } = useAddress();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUnregister: true,
    mode: "all",
  });

  if (isLoading) return;

  function handleFormSubmit(data) {
    let modifiedData;
    if (billingAddress) {
      modifiedData = data;
      modifiedData.billingAddress = address;
    } else {
      const {
        firstName,
        lastName,
        address,
        apt,
        city,
        state,
        postalCode,
        ...restData
      } = data;
      modifiedData = restData;
      modifiedData.address = {
        firstName,
        lastName,
        address,
        apt,
        city,
        state,
        postalCode: +postalCode,
      };
    }
    setPaymentAdded(true);
    console.log(modifiedData);
  }

  return (
    <div className="mt-10">
      <span className="my-5 inline-block">Select Payment Method</span>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <div className="mb-5 ml-5 flex flex-col text-base font-normal">
          <RadioButton
            value="debit"
            validation={register("paymentMethod")}
            checked={true}
          >
            <span>Credit or Debit Card</span>
          </RadioButton>
          <RadioButton value="paypal" validation={register("paymentMethod")}>
            <span>Paypal</span>
          </RadioButton>
          <RadioButton value="klarna" validation={register("paymentMethod")}>
            <span>Klarna</span>
          </RadioButton>
          <RadioButton value="gPay" validation={register("paymentMethod")}>
            <span>Google Pay</span>
          </RadioButton>
        </div>
        <AddCreditCardForm register={register} errors={errors} />
        <div className="my-10">
          {/* not using checkbox component to make it controlled */}
          <div className="checkbox-wrapper">
            <input
              type="checkbox"
              id="billingAddress"
              checked={billingAddress}
              onChange={() => setBillingAddress((v) => !v)}
            />
            <label htmlFor="billingAddress">
              <span>
                <svg width="12px" height="10px" viewBox="0 0 12 10">
                  <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                </svg>
              </span>
              <span>Billing address same as shipping</span>
            </label>
          </div>
          {billingAddress ? (
            <AddressItem address={address} border={false} />
          ) : (
            <BillingForm register={register} errors={errors} />
          )}
        </div>
        <div className="flex justify-end">
          <Button disabled={Object.keys(errors).length !== 0}>
            Continue To Order Review
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
