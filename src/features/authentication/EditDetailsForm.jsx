import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import useUpdateUser from "./useUpdateUser";
import Message from "../../ui/Message";

function EditDetailsForm({
  firstName,
  lastName,
  dob,
  onCancel,
  setSuccessMessage,
}) {
  const { updateUser, isPending, error } = useUpdateUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", defaultValues: { firstName, lastName, dob } });

  function handleFormSubmit(data) {
    updateUser(data, {
      onSuccess: () => {
        setSuccessMessage("Account details updated Successfully!");
        onCancel();
      },
    });
  }

  return (
    <form
      method="POST"
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      className="my-5 flex flex-col gap-7"
    >
      {error && <Message type="error">{error.message}</Message>}
      <InputField
        id="firstName"
        error={errors?.firstName}
        validation={register("firstName", { required: "Required" })}
        label="First Name"
        type="text"
      />

      <InputField
        id="lastName"
        type="text"
        label="Last Name"
        error={errors?.lastName}
        validation={register("lastName", { required: "Required" })}
      />

      <InputField
        validation={register("dob", { required: "Required" })}
        id="dob"
        error={errors?.dob}
        type="date"
        label="Date of Birth"
      />

      <div className="flex justify-end gap-7">
        <Button color="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">
          {isPending ? <span className="spinner-mini"></span> : "Update"}
        </Button>
      </div>
    </form>
  );
}

export default EditDetailsForm;
