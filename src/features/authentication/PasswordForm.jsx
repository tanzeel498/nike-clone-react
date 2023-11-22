import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import InputField from "../../ui/InputField";
import { useEmailAuth } from "../context/EmailAuthContext";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./useLogin";
import Message from "../../ui/Message";
import PasswordField from "./PasswordField";

function PasswordForm() {
  const navigate = useNavigate();
  const { email, setEmail } = useEmailAuth();
  const { login, isPending, error: loginError } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "all" });

  function handleFormSubmit({ password }) {
    login({ email, password });
  }

  function handleClearEmail() {
    setEmail(null);
    navigate("/accounts/join");
  }

  if (!email) return <h1>NADA!!!!!!!!</h1>;

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
          onClick={handleClearEmail}
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
          <ButtonLink underline={true} to="/" color="stone-500">
            Forgot Password?
          </ButtonLink>
        </p>
        <div className="flex justify-end">
          <Button>
            {" "}
            {isPending ? <span className="loader"></span> : "Sign In"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default PasswordForm;
