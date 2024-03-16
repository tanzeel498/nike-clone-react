import ButtonLink from "../../ui/ButtonLink";

function LoginBox() {
  return (
    <div className="mx-2 mb-4 border-[1px] border-stone-200 px-4 py-2">
      <span className="font-semibold text-orange-600 tablet:text-2xl">
        Members get free shipping on orders $50+
      </span>
      <span className="mt-2 block font-medium text-stone-500">
        Become a Nike member for fast free shipping on orders $50+{" "}
        <ButtonLink underline={true} to="/account/join" color="text-stone-500">
          Join us
        </ButtonLink>{" "}
        or{" "}
        <ButtonLink color="text-stone-500" underline={true} to="/account/join">
          Sign-in
        </ButtonLink>
      </span>
    </div>
  );
}

export default LoginBox;
