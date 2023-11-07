import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import InputField from "../../ui/InputField";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });
  console.log(errors);

  function handleFormSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <h2 className="mb-8 tracking-tight">
        Enter your email to join us or sign in.
      </h2>

      <form method="POST" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
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

        <p className="my-7 w-96 text-sm font-medium leading-6 text-stone-500">
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
          <Button type="submit">Continue</Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
