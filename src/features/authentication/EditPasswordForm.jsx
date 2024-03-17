import { useForm } from "react-hook-form";
import InputField from "../../ui/InputField";
import Button from "../../ui/Button";
import PasswordField from "./PasswordField";
import useUpdateUser from "./useUpdateUser";
import Message from "../../ui/Message";

function EditPasswordForm({ onCancel, setSuccessMessage }) {
  const { updateUser, isPending, error } = useUpdateUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  function handleFormSubmit(data) {
    updateUser(data, {
      onSuccess: () => {
        setSuccessMessage("Account password updated Successfully!");
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
      <PasswordField>
        <InputField
          id="oldPassword"
          validation={register("oldPassword", { required: "Required" })}
          label="Old Password"
          error={errors?.oldPassword}
        />
      </PasswordField>
      <PasswordField>
        <InputField
          id="newPassword"
          validation={register("newPassword", {
            required: "Required",
            pattern: {
              value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
              message: "Uppercase, lowercase letters, and one number",
            },
            minLength: { value: 8, message: "Minimum of 8 characters" },
          })}
          label="New Password"
          error={errors?.newPassword}
        />
      </PasswordField>

      <div className="flex justify-end gap-7">
        <Button color="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button>
          {isPending ? <span className="spinner-mini"></span> : "Update"}
        </Button>
      </div>
    </form>
  );
}

export default EditPasswordForm;
