import Button from "../../ui/Button";
import ButtonFixedBottom from "../../ui/ButtonFixedBottom";
import Collapsible from "../../ui/Collapsible";
import { formatCurrency } from "../../utils/helpers";

function Summary() {
  return (
    <div className="w-full border-t-[1px] tablet:w-1/3 tablet:border-0">
      <h2 className="my-5 tablet:my-0">Summary</h2>
      <div className="mb-9 mt-6 flex flex-col gap-3">
        <div>
          <Collapsible initialExpand={false}>
            <Collapsible.Trigger>
              <h4>Do you have a promo code?</h4>
            </Collapsible.Trigger>
            <Collapsible.Group>
              <div className="mb-2 mt-5 flex gap-3">
                <input
                  className="w-2/3 rounded-xl border-[1px] border-stone-300 px-3 outline-none"
                  type="text"
                />
                <Button type="secondary">Apply</Button>
              </div>
            </Collapsible.Group>
          </Collapsible>
        </div>

        <div className="flex items-center justify-between">
          <h4>Subtotal</h4>
          <p>{formatCurrency(219.97)}</p>
        </div>
        <div className="flex items-center justify-between">
          <h4>Estimated Shipping & Handling</h4>
          <p>{formatCurrency(7)}</p>
        </div>
        <div className="flex items-center justify-between">
          <h4>Estimated Tax</h4>
          <p>{formatCurrency(0)}</p>
        </div>
        <div className="flex items-center justify-between border-y-[1px] border-stone-200 py-4">
          <h4>Total</h4>
          <p>{formatCurrency(226.97)}</p>
        </div>
      </div>
      <div className="hidden flex-col gap-3 tablet:flex">
        <Button size="large" to="/checkout">
          Checkout
        </Button>

        <span className="hidden tablet:block">
          <Button size="large" type="secondary">
            <img className="w-16" src="/paypal.svg" alt="paypal" />
          </Button>
        </span>
      </div>
      <ButtonFixedBottom>
        <Button size="large" to="/checkout">
          Go to Checkout
        </Button>
      </ButtonFixedBottom>
    </div>
  );
}

export default Summary;
