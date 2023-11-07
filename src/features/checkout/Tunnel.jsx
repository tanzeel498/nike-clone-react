import Button from "../../ui/Button";

function Tunnel() {
  return (
    <div className="mx-auto mt-20 w-[880px] text-center capitalize">
      <h2 className="mb-12 text-3xl">choose how you would like to check out</h2>
      <div className="flex gap-5 divide-x">
        <div className="w-1/2 px-12">
          <div className="h-40">
            <h4 className="text-lg">
              Check out as a member and get free shipping on orders $50+
            </h4>
            <p className="mt-6 text-sm font-medium">
              Use your Nike Member sign-in for Nike.com, NRC, NTC, SNKRS or the
              Nike app.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Button size="large" to="/accounts/login">
              Login
            </Button>
            <Button size="large" to="/accounts/login">
              Sign Up
            </Button>
          </div>
        </div>
        <div className="w-1/2 px-12">
          <div className="h-40">
            <h4 className="text-lg">Check out as a Guest</h4>
            <p className="mt-6 text-sm font-medium">
              You can create a free Nike Member Profile at any point during the
              checkout process.
            </p>
          </div>
          <div>
            <Button size="large">Guest Checkout</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tunnel;
