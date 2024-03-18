import Spinner from "../../ui/Spinner";
import BagItem from "./BagItem";
import useCart from "./useCart";
import Message from "../../ui/Message";

function Bag() {
  const { cart, isLoading, error } = useCart();

  return (
    <div className="grow">
      {error && <Message type="error">{error.message}</Message>}
      {isLoading ? (
        <Spinner />
      ) : (
        <div>
          <h2 className="hidden tablet:block">Bag</h2>
          <div className="divide-y">
            {cart.items <= 0 && (
              <span className="my-5 ml-3 inline-block text-lg italic">
                There are no items in your bag.
              </span>
            )}

            {cart?.items.map((item) => (
              <BagItem key={item._id} data={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Bag;
