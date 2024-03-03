import { useState } from "react";
import { IoCheckmark } from "react-icons/io5";
import Collapsible from "../../ui/Collapsible";
import PageTitle from "./PageTitle";
import Payment from "./Payment";
import Summary from "./Summary";
import ButtonLink from "../../ui/ButtonLink";
import Delivery from "./Delivery";

function Checkout() {
  const [deliveryAdded, setDeliveryAdded] = useState(false);

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 text-sm font-semibold tablet:px-14">
      <PageTitle title="Checkout" />
      <div className="flex w-full flex-col gap-10 tablet:flex-row">
        {/* below div is for mobile and tablet */}
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
        <div className="divide-y tablet:w-2/3">
          <div className="mb-5">
            <div className="mb-10 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3>Delivery Options</h3>
                {deliveryAdded && (
                  <span className="text-xl text-green-700">
                    <IoCheckmark />
                  </span>
                )}
              </div>
              {deliveryAdded && (
                <ButtonLink
                  border={true}
                  onClick={() => setDeliveryAdded(false)}
                >
                  Edit
                </ButtonLink>
              )}
            </div>
            <Delivery
              deliveryAdded={deliveryAdded}
              setDeliveryAdded={setDeliveryAdded}
            />
          </div>

          <div className="mb-14">
            <h3 className="my-10">Payment</h3>
            {deliveryAdded && <Payment />}
          </div>
        </div>
        {/* right side pane for desktop only */}
        <div className="hidden w-full tablet:block tablet:w-1/3">
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
