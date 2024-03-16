import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import ButtonLink from "../../ui/ButtonLink";
import { useState } from "react";
import Button from "../../ui/Button";
import useAddAddress from "./useUpdateAddress";

function DeliveryForm({ address, setAddressAdded }) {
  // const [showManualAdress, setShowManualAddress] = useState(
  //   address ? true : false,
  // );
  const { updateAddress, isPending } = useAddAddress();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: address,
    mode: "all",
  });

  // function handleManualAddress(e) {
  //   e.preventDefault();
  //   unregister("autoAddress");
  //   setShowManualAddress(true);
  // }

  function handleFormSubmit(data) {
    const updatedData = { ...data, postalCode: +data.postalCode };
    updateAddress(updatedData, { onSuccess: () => setAddressAdded(true) });
  }
  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="flex flex-col gap-7"
    >
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

      {/* {!showManualAdress && (
        <>
          <InputField
            id="autoAddress"
            label="Start typing address"
            validation={register("autoAddress", {
              required:
                "Please complete address selection or enter an address manually",
            })}
            type="text"
            error={errors?.autoAddress}
          />
          <div>
            <ButtonLink
              underline={true}
              color="text-stone-600"
              onClick={handleManualAddress}
            >
              <span className="font-semibold">Enter Address manually</span>
            </ButtonLink>
          </div>
        </>
      )} */}
      {/* {showManualAdress && (
        <> */}
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
        label="Add Company, C/O, Apt, Suite, Unit"
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
      {/* </>
      )} */}

      <div className="flex gap-4">
        <InputField
          id="email"
          label="Email*"
          validation={register("email", {
            required: "Required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          error={errors?.email}
        />
        <InputField
          id="phone"
          label="Phone Number*"
          validation={register("phone", {
            required: "Required",
            pattern: {
              value:
                /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
              message: "Please enter a valid phone number",
            },
          })}
          type="text"
          error={errors?.phone}
        />
      </div>
      <div className="flex justify-end">
        <Button disabled={Object.keys(errors).length !== 0 || isPending}>
          {isPending ? (
            <span className="spinner-mini"></span>
          ) : (
            "Save & Continue"
          )}
        </Button>
      </div>
    </form>
  );
}

export default DeliveryForm;
