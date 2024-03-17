import { useEffect } from "react";
import ButtonLink from "../../ui/ButtonLink";
import { useEmailAuth } from "../context/EmailAuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Message from "../../ui/Message";
import CodeCounter from "./CodeCounter";
import InputField from "../../ui/InputField";
import { FiCheck, FiX } from "react-icons/fi";
import PasswordField from "./PasswordField";
import Button from "../../ui/Button";
import useResetPassword from "./useResetPassword";

function ResetPasswordForm() {
  const { email, setSuccessMessage } = useEmailAuth();
  const { resetPassword, isPending, error } = useResetPassword();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields },
  } = useForm({
    criteriaMode: "all",
    mode: "all",
  });

  // will redirect to join if this page is accessed directly i.e with no email
  useEffect(
    function () {
      if (!email) navigate("/account/join", { replace: true });
    },
    [email, navigate],
  );

  function handleEditEmail() {
    navigate("/account/join");
  }

  function handleFormSubmit(data) {
    resetPassword(
      { code: +data.code, newPassword: data.password, email },
      {
        onSuccess: () => {
          setSuccessMessage("Password reset successfull");
          navigate("/account/join", { replace: true });
        },
      },
    );
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-3 tracking-tight">
          Verify your email and enter a new password.
        </h2>
        <p className="mr-2 inline-block text-sm font-medium tracking-tight text-stone-900">
          We've sent a code to
          <br />
          <span>{email}</span>
        </p>
        <ButtonLink
          color="stone-500"
          underline={true}
          onClick={handleEditEmail}
        >
          Edit
        </ButtonLink>
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        className="flex flex-col gap-7"
      >
        {error && <Message type="error">{error.message}</Message>}

        <CodeCounter type="forgotPassword">
          <InputField
            id="code"
            error={errors?.code}
            validation={register("code", { required: "Required" })}
            label="Code*"
          />
        </CodeCounter>

        <div className="mb-2">
          <PasswordField>
            <InputField
              id="password"
              validation={register("password", {
                required: "Required",
                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                minLength: 8,
              })}
              label="New Password*"
            />
          </PasswordField>
          {errors?.password?.types.required && (
            <span className="ml-4 mt-1 text-xs font-semibold text-red-600">
              {errors?.password.message}
            </span>
          )}

          <div
            className={`my-2 ml-4 flex gap-1 ${
              !touchedFields.password && !dirtyFields?.password
                ? "text-stone-500"
                : errors?.password?.types.required ||
                  errors?.password?.types.minLength
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            <span>
              {dirtyFields?.password && !errors?.password?.types.minLength ? (
                <FiCheck />
              ) : (
                <FiX />
              )}
            </span>
            <p className="text-xs tracking-tight">Minimum of 8 characters</p>
          </div>

          <div
            className={`ml-4 flex gap-1 ${
              !touchedFields.password && !dirtyFields?.password
                ? "text-stone-500"
                : errors?.password?.types.required ||
                  errors?.password?.types.pattern
                ? "text-red-600"
                : "text-green-600"
            }`}
          >
            {dirtyFields?.password && !errors?.password?.types.pattern ? (
              <FiCheck />
            ) : (
              <FiX />
            )}
            <p className="text-xs tracking-tight">
              Uppercase, lowercase letters, and one number
            </p>
          </div>
        </div>

        <div className="flex justify-end gap-7">
          <Button color="secondary" to="/">
            Cancel
          </Button>
          <Button>
            {isPending ? <span className="spinner-mini"></span> : "Save"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
