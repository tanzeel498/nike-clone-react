import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import InputField from "../../ui/InputField";
import useSignUp from "./useSignUp";
import Message from "../../ui/Message";
import { useNavigate } from "react-router-dom";
import { useEmailAuth } from "../context/EmailContextAuth";

function LoginForm() {
  const { isPending, error: signUpError, signUp } = useSignUp();
  const { setEmail } = useEmailAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  function handleFormSubmit({ email }) {
    signUp(
      { email, password: "F--_j*dkK)(*^%7865_U" },
      {
        onSuccess: (data) => {
          setEmail(email);
          navigate("/accounts/signup");
        },
        onError: (err) => {
          if (err.message === "User Already exists") {
            setEmail(email);
            navigate("/accounts/password");
          }
        },
      },
    );
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
        {signUpError && <Message type="error">{signUpError.message}</Message>}

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
          <ButtonLink underline={true} to="/" color="stone-500">
            Privacy Policy
          </ButtonLink>{" "}
          and{" "}
          <ButtonLink underline={true} to="/" color="stone-500">
            Terms of Use.
          </ButtonLink>
        </p>
        <div className="flex justify-end">
          <Button>
            {isPending ? <span className="loader"></span> : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
