import Collapsible from "../../ui/Collapsible";
import DeliveryOptions from "./DeliveryOptions";
import OrderReview from "./OrderReview";
import PageTitle from "./PageTitle";
import Payment from "./Payment";
import Summary from "./Summary";

function Checkout() {
  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 text-sm font-semibold tablet:px-14">
      <PageTitle title="Checkout" numItems={5} totalAmount={345.09} />
      <div className="flex w-full flex-col gap-10 tablet:flex-row">
        <div className="w-full border-y-[1px] py-8 tablet:hidden">
          <Collapsible initialExpand={false}>
            <Collapsible.Trigger>
              <h3>In Your bag</h3>
            </Collapsible.Trigger>
            <Collapsible.Group>
              <Summary />
            </Collapsible.Group>
          </Collapsible>
        </div>
        <div className="grow divide-y">
          <DeliveryOptions />
          <Payment />
          <OrderReview />
        </div>
        <div className="hidden w-full tablet:block tablet:w-1/3">
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
