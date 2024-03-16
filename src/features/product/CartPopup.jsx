import { ScrollRestoration } from "react-router-dom";
import Button from "../../ui/Button";
import useOutsideClick from "../../hooks/useOutsideClick";
import HeaderIcon from "../../ui/HeaderIcon";
import { IoClose } from "react-icons/io5";
import { formatCurrency } from "../../utils/helpers";
import useNumCartItems from "../cart/useNumCartItems";
import { MdCheckCircle } from "react-icons/md";
import { useEffect, useState } from "react";

function CartPopup({ user, onClose, product, size }) {
  const { numCartItems } = useNumCartItems();
  const [count, setCount] = useState(5);
  const ref = useOutsideClick(onClose);

  useEffect(
    function () {
      if (!user) return; //no timeout will run when the user is not logged in i.e popup will stay
      const timeout = setTimeout(() => {
        if (count > 0) return setCount((c) => c - 1);
        onClose();
      }, 1000);
      return () => clearTimeout(timeout);
    },
    [count, onClose, user],
  );

  return (
    <>
      <ScrollRestoration />

      <div className="fixed inset-0 z-30 bg-neutral-900 bg-opacity-80">
        <div
          className="absolute right-10 top-12 flex w-96 flex-col justify-center rounded-md bg-white px-7 pb-8 pt-16"
          ref={ref}
        >
          {!user ? (
            <>
              <h3 className="mb-10 mt-2 text-center text-xl capitalize">
                choose how you would like to Continue
              </h3>

              <div className="flex justify-center gap-4">
                <Button to="/account/join">Login</Button>
                <Button to="/account/join">Sign Up</Button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 flex w-full items-center justify-between">
                <span className="flex items-center gap-2 font-semibold">
                  {" "}
                  <MdCheckCircle className="text-green-700" />
                  Added to Bag
                </span>
                <HeaderIcon onClick={onClose}>
                  <IoClose className="text-2xl" />
                </HeaderIcon>
              </div>
              <div className="flex gap-7">
                <img
                  className="aspect-square max-w-24 object-cover"
                  src={product.colors.at(0).squarishUrl}
                  alt="bag-item-img"
                />
                <div className="flex flex-col justify-start gap-1 text-xs font-semibold">
                  <span>{product.title}</span>
                  <span className="text-stone-500">{product.subtitle}</span>
                  <span className="text-stone-500">Size {size}</span>
                  <span>
                    {formatCurrency(product.colors.at(0).currentPrice)}
                  </span>
                </div>
              </div>
              <div className="mt-8 flex justify-center gap-6">
                <Button type="secondary" to="/cart">
                  View Bag ({numCartItems})
                </Button>
                <Button to="/checkout">Checkout</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPopup;
