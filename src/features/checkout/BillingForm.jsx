import InputField from "../../ui/InputField";

function BillingForm({ register, errors }) {
  return (
    <div className="my-7 flex flex-col gap-7">
      <div className="flex gap-4">
        <InputField
          id="firstName"
          label="First Name*"
          validation={register("firstName", {
            required: "Please enter your first name",
          })}
          type="text"
          error={errors?.firstName}
        />
        <InputField
          id="lastName"
          label="last Name*"
          validation={register("lastName", {
            required: "Please enter your last name",
          })}
          type="text"
          error={errors?.lastName}
        />
      </div>

      <InputField
        id="address"
        label="Address*"
        validation={register("address", {
          required: "Please enter a valid address",
        })}
        type="text"
        error={errors?.address}
      />
      <InputField
        id="apt"
        label="Optional - Company, C/O, Apt, Suite, Unit"
        type="text"
        validation={register("apt")}
      />
      <div className="flex gap-4">
        <InputField
          id="city"
          label="City*"
          validation={register("city", {
            required: "Please enter a valid city",
          })}
          type="text"
          error={errors?.city}
        />
        <InputField
          id="state"
          label="State*"
          validation={register("state", {
            required: "Please enter a valid city",
          })}
          type="text"
          error={errors?.state}
        />
        <InputField
          id="postalCode"
          label="Postal Code*"
          validation={register("postalCode", {
            required: "Please enter your postal code",
            pattern: {
              value: /^[0-9]{5}(?:-[0-9]{4})?$/,
              message: "Please enter a valid zip code",
            },
          })}
          type="text"
          error={errors?.postalCode}
        />
      </div>
    </div>
  );
}

export default BillingForm;
