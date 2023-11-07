import Bag from "../features/cart/Bag";
import Summary from "../features/cart/Summary";

function Cart() {
  return (
    <div className="mx-auto flex w-[1100px] justify-center gap-6 pt-10">
      <Bag />
      <Summary />
    </div>
  );
}

export default Cart;
