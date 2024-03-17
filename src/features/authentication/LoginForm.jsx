import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import InputField from "../../ui/InputField";
import Message from "../../ui/Message";
import { useNavigate } from "react-router-dom";
import { useEmailAuth } from "../context/EmailAuthContext";
import useCheckUser from "./useCheckUser";
import useTimeout from "../../hooks/useTimeout";

function LoginForm() {
  const { checkUser, isPending, error: checkUserError } = useCheckUser();
  const { email, setEmail, successMessage, setSuccessMessage } = useEmailAuth();
  useTimeout(successMessage, () => setSuccessMessage(""));
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all", defaultValues: { email } });

  function handleFormSubmit({ email }) {
    checkUser(email, {
      onSuccess: (response) => {
        if (response === 200) {
          setEmail(email);
          navigate("/account/password");
        } else if (response === 201) {
          setEmail(email);
          navigate("/account/signup");
        }
      },
    });
  }

  return (
    <div>
      <h2 className="mb-8 tracking-tight">
        Enter your email to sign in or join us.
      </h2>

      <form
        className="flex flex-col gap-7"
        method="POST"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        {successMessage !== "" && (
          <Message type="success">{successMessage}</Message>
        )}
        {checkUserError && (
          <Message type="error">{checkUserError.message}</Message>
        )}
        <InputField
          validation={register("email", {
            required: "Required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Invalid email address",
            },
          })}
          id="email"
          type="text"
          label="Email"
          error={errors?.email}
        />

        <p className="w-96 text-sm font-medium leading-6 text-stone-500">
          By continuing, I agree to Nike's{" "}
          <ButtonLink
            underline={true}
            to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=PK&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df"
            color="stone-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            Privacy Policy
          </ButtonLink>{" "}
          and{" "}
          <ButtonLink
            underline={true}
            to="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=PK&language=en&requestType=redirect&uxId=4fd2d5e7db76e0f85a6bb56721bd51df"
            color="stone-500"
            rel="noopener noreferrer"
            target="_blank"
          >
            Terms of Use.
          </ButtonLink>
        </p>
        <div className="flex justify-end">
          <Button disabled={isPending}>
            {isPending ? <div className="spinner-mini"></div> : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
