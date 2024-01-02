import BagItem from "./BagItem";
import LoginBox from "./LoginBox";
import useCart from "./useCart";

function Bag() {
  const { cart, isLoading } = useCart();

  if (isLoading) return;
  console.log(cart);
  return (
    <div className="grow">
      <LoginBox />
      <div>
        <h2 className="hidden tablet:block">Bag</h2>
        <div className="divide-y">
          {cart.map((item) => (
            <BagItem key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bag;
