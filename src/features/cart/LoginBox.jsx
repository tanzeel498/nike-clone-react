import ButtonLink from "../../ui/ButtonLink";

function LoginBox() {
  return (
    <div className="mb-4 border-[1px] border-stone-200 px-3 py-2">
      <h3 className="font-semibold text-orange-600">
        Members get free shipping on orders $50+
      </h3>
      <p className="font-medium text-stone-500">
        Become a Nike member for fast free shipping on orders $50+{" "}
        <ButtonLink
          underline={true}
          to="/accounts/login"
          color="text-stone-500"
        >
          Join us
        </ButtonLink>{" "}
        or{" "}
        <ButtonLink
          color="text-stone-500"
          underline={true}
          to="/accounts/login"
        >
          Sign-in
        </ButtonLink>
      </p>
    </div>
  );
}

export default LoginBox;
