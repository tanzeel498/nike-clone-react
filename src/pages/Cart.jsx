import Bag from "../features/cart/Bag";
import Summary from "../features/cart/Summary";
import PageTitle from "../features/checkout/PageTitle";

function Cart() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center px-6 tablet:max-w-[1200px] tablet:px-14">
      <PageTitle title={"Cart"} />
      <div className="flex flex-col gap-12 tablet:flex-row">
        <Bag />
        <Summary />
      </div>
    </div>
  );
}

export default Cart;
