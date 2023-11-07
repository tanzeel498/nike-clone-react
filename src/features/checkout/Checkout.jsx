import DeliveryOptions from "./DeliveryOptions";
import OrderReview from "./OrderReview";
import Payment from "./Payment";
import Summary from "./Summary";

function Checkout() {
  return (
    <div className="mx-auto flex w-[1100px] flex-col items-center text-sm font-semibold">
      <h2 className="my-20">Checkout</h2>
      <div className="flex w-full gap-14">
        <div className="grow divide-y">
          <DeliveryOptions />
          <Payment />
          <OrderReview />
        </div>
        <Summary />
      </div>
    </div>
  );
}

export default Checkout;
