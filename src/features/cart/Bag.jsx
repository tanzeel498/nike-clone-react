import BagItem from "./BagItem";
import LoginBox from "./LoginBox";
import useCart from "./useCart";

function Bag() {
  const { cart, isLoading, error } = useCart();

  if (isLoading) return;

  if (error) return <h1>{error.message}</h1>;
  return (
    <div className="grow">
      <LoginBox />
      <div>
        <h2 className="hidden tablet:block">Bag</h2>
        <div className="divide-y">
          {cart.items.map((item) => (
            <BagItem key={item._id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bag;
