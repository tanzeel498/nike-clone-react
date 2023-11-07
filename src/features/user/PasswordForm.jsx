import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import InputField from "../../ui/InputField";

function PasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  function handleFormSubmit(data) {
    console.log(data);
  }
  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-3 tracking-tight">What's your password?</h2>
        <p className="mr-2 inline-block text-sm font-medium tracking-tight text-stone-900">
          tanzeel@gmail.com
        </p>
        <ButtonLink color="stone-500" underline={true} to="/login">
          Edit
        </ButtonLink>
      </div>
      <form method="POST" onSubmit={handleSubmit(handleFormSubmit)} noValidate>
        <InputField
          error={errors?.password}
          type="password"
          id="password"
          label="Password"
          validation={register("password", { required: "Required" })}
        />

        <p className="my-7 w-96 text-sm font-medium leading-6 text-stone-500">
          <ButtonLink underline={true} to="/" color="stone-500">
            Forgot Password?
          </ButtonLink>
        </p>
        <div className="flex justify-end">
          <Button type="submit">Sign In</Button>
        </div>
      </form>
    </div>
  );
}

export default PasswordForm;
