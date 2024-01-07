import InputField from "../../ui/InputField";
import Checkbox from "../../ui/Checkbox";
import ButtonLink from "../../ui/ButtonLink";

function AddCreditCardForm({ register, errors }) {
  return (
    <div className="rounded-xl border-2 p-5">
      <span>Add Card</span>
      <div className="my-7 flex flex-wrap gap-2 mobile:flex-nowrap">
        <div className="w-full mobile:w-2/3">
          <InputField
            id="cardNumber"
            type="text"
            label="Card Number"
            error={errors?.cardNumber}
            validation={register("cardNumber", {
              required: "Please enter card number",
            })}
          />
        </div>
        <InputField
          id="expiryDate"
          type="text"
          label="MM/YY"
          error={errors?.expiryDate}
          validation={register("expiryDate", {
            required: "Please enter date",
          })}
        />
        <InputField
          id="cvv"
          type="text"
          label="CVV"
          error={errors?.cvv}
          validation={register("cvv", {
            required: "Please enter cvv",
          })}
        />
      </div>
      <div className="my-4 flex justify-end">
        <ButtonLink underline={true}>Where is my CVV?</ButtonLink>
      </div>
      <Checkbox id="saveInfo" validation={register("saveCardInfo")}>
        <span>Save credit card for later use</span>
      </Checkbox>
    </div>
  );
}

export default AddCreditCardForm;
