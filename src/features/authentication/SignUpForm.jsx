import Button from "../../ui/Button";
import { useForm } from "react-hook-form";
import ButtonLink from "../../ui/ButtonLink";
import InputField from "../../ui/InputField";
import { FiCheck, FiX } from "react-icons/fi";
import Checkbox from "../../ui/Checkbox";
import PasswordField from "./PasswordField";
import CodeCounter from "./CodeCounter";
import Message from "../../ui/Message";
import { useNavigate } from "react-router-dom";
import { useEmailAuth } from "../context/EmailAuthContext";
import useSignUp from "./useSignUp";
import { useEffect } from "react";

function SignUpForm() {
  const navigate = useNavigate();
  const { email, setEmail } = useEmailAuth();
  const { isPending, signUp, error: signUpError } = useSignUp();

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

  function handleFormSubmit(data) {
    signUp({ ...data, code: +data.code, email });
  }

  function handleClearEmail() {
    setEmail(null);
    navigate("/account/join");
  }

  return (
    <div>
      <div className="mb-8">
        <h2 className="mb-3 tracking-tight">
          Now let's make you a Nike Member.
        </h2>
        <p className="mr-2 inline-block text-sm font-medium tracking-tight text-stone-900">
          We've sent a code to
          <br />
          <span>{email}</span>
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
        {signUpError && <Message type="error">{signUpError.message}</Message>}

        <CodeCounter>
          <InputField
            id="code"
            error={errors?.code}
            validation={register("code", { required: "Required" })}
            label="Code"
          />
        </CodeCounter>

        <div className="flex justify-between gap-4">
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
        </div>

        <div className="mb-2">
          <PasswordField>
            <InputField
              id="password"
              validation={register("password", {
                required: "Required",
                pattern: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])/,
                minLength: 8,
              })}
              label="Password"
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

        <InputField
          validation={register("dob", { required: "Required" })}
          id="dob"
          error={errors?.dob}
          type="date"
          label="Date of Birth"
        />

        {/* 2x Checkbox */}
        <div className="my-5 flex flex-col gap-5">
          <Checkbox id="emailSignUp" validation={register("emailSignUp")}>
            <span className="w-11/12">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits.
            </span>
          </Checkbox>

          <Checkbox id="tos" validation={register("tos", { required: true })}>
            <span
              className={`w-11/12 ${
                errors.tos ? "text-red-600" : "text-stone-900"
              }`}
            >
              I agree to Nike's{" "}
              <ButtonLink
                color={errors.tos ? "text-red-600" : "text-stone-900"}
                underline={true}
              >
                Privacy Policy
              </ButtonLink>{" "}
              and{" "}
              <ButtonLink
                color={errors.tos ? "text-red-600" : "text-stone-900"}
                underline={true}
              >
                Terms of Use.
              </ButtonLink>
            </span>
          </Checkbox>
        </div>

        <div className="flex justify-end">
          <Button disabled={isPending}>
            {isPending ? (
              <span className="spinner-mini"></span>
            ) : (
              "Create Account"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
