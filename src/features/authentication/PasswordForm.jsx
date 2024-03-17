import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import InputField from "../../ui/InputField";
import { useEmailAuth } from "../context/EmailAuthContext";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import Message from "../../ui/Message";
import PasswordField from "./PasswordField";
import { useEffect } from "react";
import useForgotPassword from "./useForgotPassword";

function PasswordForm() {
  const navigate = useNavigate();
  const { email } = useEmailAuth();
  const { login, isPending: isLoginPending, error: loginError } = useLogin();
  const {
    forgotPassword,
    error: forgotPasswordError,
    isPending: isForgotPasswordPending,
  } = useForgotPassword();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  // will redirect to join if this page is accessed directly i.e with no email
  useEffect(
    function () {
      if (!email) navigate("/account/join", { replace: true });
    },
    [email, navigate],
  );

  function handleForgotPassword(e) {
    e?.preventDefault();
    forgotPassword(email, {
      onSuccess: () => navigate("/account/reset-password"),
    });
  }

  function handleFormSubmit({ password }) {
    login({ email, password });
  }

  function handleEditEmail() {
    navigate("/account/join");
  }

  const isPending = isForgotPasswordPending || isLoginPending;

  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-3 tracking-tight">What's your password?</h2>
        <p className="mr-2 inline-block text-sm font-medium tracking-tight text-stone-900">
          {email}
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
        {loginError && <Message type="error">{loginError.message}</Message>}
        {forgotPasswordError && (
          <Message type="error">{forgotPasswordError.message}</Message>
        )}

        <PasswordField>
          <InputField
            id="password"
            validation={register("password", {
              required: "Required",
            })}
            label="Password"
            error={errors.password}
          />
        </PasswordField>

        <p className="w-96 text-sm font-medium leading-6 text-stone-500">
          <ButtonLink
            underline={true}
            onClick={handleForgotPassword}
            color="stone-500"
          >
            Forgot Password?
          </ButtonLink>
        </p>
        <div className="flex justify-end">
          <Button disabled={isPending}>
            {isPending ? <span className="spinner-mini"></span> : "Sign In"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PasswordForm;
