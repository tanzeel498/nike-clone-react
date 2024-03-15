import Button from "../../ui/Button";

function Tunnel() {
  return (
    <div className="mt-20 flex w-full flex-col items-center gap-8 capitalize">
      <h2 className="mb-5 text-3xl">choose how you would like to Continue</h2>

      <h4 className="text-lg">
        Continue as a member and get free shipping on orders $50+
      </h4>
      <p className="text-sm font-medium">
        Use your Nike Member sign-in for Nike.com, NRC, NTC, SNKRS or the Nike
        app.
      </p>

      <div className="mt-5 flex w-1/5 flex-col gap-4">
        <Button size="large" to="/account/join">
          Login
        </Button>
        <Button size="large" to="/account/join">
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Tunnel;
