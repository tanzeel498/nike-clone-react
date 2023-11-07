import Checkbox from "../../ui/Checkbox";
import RadioButton from "../../ui/RadioButton";
import AddCreditCardForm from "./AddCreditCardForm";
import AddressItem from "./AddressItem";

function Payment() {
  return (
    <div className="py-10">
      <h3>Payment</h3>
      <span className="my-5 inline-block">Select Payment Method</span>
      <div className="mb-5 ml-5 flex flex-col text-base font-normal">
        <RadioButton id="debit" name="paymentMethod" checked={true}>
          Credit or Debit Card
        </RadioButton>
        <RadioButton id="paypal" name="paymentMethod">
          Paypal
        </RadioButton>
        <RadioButton id="klarna" name="paymentMethod">
          Klarna
        </RadioButton>
        <RadioButton id="gPay" name="paymentMethod">
          Google Pay
        </RadioButton>
      </div>
      <AddCreditCardForm />
      <div className="my-10">
        <Checkbox id="billingAddress">
          <span>Billing address same as shipping</span>
        </Checkbox>
        <div className="my-5">
          {/* active address will be sent in the address prop */}
          <AddressItem address={{}} />
        </div>
      </div>
    </div>
  );
}

export default Payment;
