import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import Checkbox from "../../ui/Checkbox";
import ButtonLink from "../../ui/ButtonLink";

function AddCreditCardForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  function handleFormSubmit(data) {
    console.log(data);
  }

  return (
    <div className="rounded-xl border-2 p-5">
      <span>Add Card</span>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        className="my-10 flex gap-2"
      >
        <div className="w-2/3">
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
      </form>
      <div className="flex items-center justify-between">
        <Checkbox id="saveInfo">
          <span>Save credit card for later use</span>
        </Checkbox>
        <ButtonLink underline={true}>Where is my CVV?</ButtonLink>
      </div>
    </div>
  );
}

export default AddCreditCardForm;
