import { useState } from "react";
import Collapsible from "../../ui/Collapsible";
import DeliveryOptions from "./DeliveryOptions";
import OrderReview from "./OrderReview";
import PageTitle from "./PageTitle";
import Payment from "./Payment";
import Summary from "./Summary";
import { IoCheckmark } from "react-icons/io5";
import ButtonLink from "../../ui/ButtonLink";

function Checkout() {
  const [deliveryAdded, setDeliveryAdded] = useState(false);
  const [paymentAdded, setPaymentAdded] = useState(false);

  return (
    <div className="mx-auto flex max-w-[1200px] flex-col items-center px-6 text-sm font-semibold tablet:px-14">
      <PageTitle title="Checkout" />
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
          <div className="pb-10">
            <div className="flex items-center justify-between">
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
            <DeliveryOptions
              setDeliveryAdded={setDeliveryAdded}
              deliveryAdded={deliveryAdded}
            />
          </div>
          <div className="py-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <h3>Payment</h3>
                {paymentAdded && (
                  <span className="text-xl text-green-700">
                    <IoCheckmark />
                  </span>
                )}
              </div>
              {paymentAdded && (
                <ButtonLink
                  border={true}
                  onClick={() => setPaymentAdded(false)}
                >
                  Edit
                </ButtonLink>
              )}
            </div>
            {deliveryAdded && <Payment />}
          </div>

          <div className="py-10">
            <div className="flex items-center justify-between">
              <h3>Order Review</h3>
              {paymentAdded && (
                <ButtonLink
                  border={true}
                  onClick={() => setPaymentAdded(false)}
                >
                  Edit
                </ButtonLink>
              )}
            </div>
            {deliveryAdded && paymentAdded && <OrderReview />}
          </div>
        </div>

        <div className="hidden w-full tablet:block tablet:w-1/3">
          <Summary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
