import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import InputField from "../../ui/InputField";
import { useLogin } from "./useLogin";
import PasswordField from "./PasswordField";
import Message from "../../ui/Message";

function LoginForm() {
  const { login, isPending, error: loginError } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  function handleFormSubmit({ email, password }) {
    login({ email, password });
  }
  return (
    <div>
      <h2 className="mb-8 tracking-tight">
        Enter your email to join us or sign in.
      </h2>

      <form
        className="flex flex-col gap-7"
        method="POST"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        {loginError && <Message type="error">{loginError.message}</Message>}
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
        <PasswordField>
          <InputField
            id="password"
            validation={register("password", {
              required: "Required",
            })}
            label="Password"
            error={errors?.password}
          />
        </PasswordField>

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
          <Button disabled={isPending}>
            {isPending ? <span className="loader"></span> : "Continue"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
