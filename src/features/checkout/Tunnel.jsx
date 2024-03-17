import Button from "../../ui/Button";
import LoginBox from "../cart/LoginBox";

function Tunnel() {
  return (
    <div className="mt-20 flex w-full flex-col items-center gap-8 capitalize">
      <LoginBox />
      <h2 className="mb-5 px-3 text-center text-xl tablet:text-3xl">
        choose how you would like to Continue
      </h2>

      <div className="flex flex-col gap-5 mobile:flex-row tablet:mt-5">
        <Button to="/account/join">Join Us</Button>
        <Button color="secondary" to="/account/join">
          Sign In
        </Button>
      </div>
    </div>
  );
}

export default Tunnel;
