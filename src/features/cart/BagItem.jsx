import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { IoTrashOutline } from "react-icons/io5";
import ButtonLink from "../../ui/ButtonLink";
import useUpdateCartItem from "./useUpdateCartItem";
import useDeleteCartItem from "./useDeleteCartItem";
import useCartProduct from "./useCartProduct";
import Spinner from "../../ui/Spinner";

function BagItem({ data: { _id, size, colorCode, quantity, product } }) {
  const { cartProduct, isLoading } = useCartProduct(product._id, colorCode);
  const { updateCartItem, isPending: isUpdatePending } = useUpdateCartItem();
  const { deleteCartItem, isPending: isDeletePending } = useDeleteCartItem();

  function handleUpdateItem(value) {
    updateCartItem({ id: _id, ...value });
  }

  function handleDeleteItem() {
    deleteCartItem(_id);
  }

  const isPending = isUpdatePending || isDeletePending;

  return (
    <div className="relative py-10">
      {isPending && (
        <div className="absolute inset-0 bg-white bg-opacity-50">
          <Spinner scale={50} />
        </div>
      )}
      {isLoading ? (
        <Spinner scale={50} />
      ) : (
        <div className="flex w-full gap-8">
          <Link
            className="max-w-[150px]"
            to={`/product/${product._id}?color=${colorCode}`}
          >
            <img
              className="aspect-square max-w-[150px] object-cover"
              src={cartProduct.colors.at(0).squarishUrl}
              alt="cart-img"
            />
          </Link>
          <div className="flex grow flex-col justify-between">
            <div className="flex flex-col gap-1 font-medium text-stone-500">
              <div className="flex flex-col gap-1 mobile:flex-row-reverse mobile:justify-between">
                <div className="flex gap-3">
                  {cartProduct.colors.at(0).fullPrice !==
                    cartProduct.colors.at(0).currentPrice && (
                    <h4 className="line-through">
                      {formatCurrency(cartProduct.colors.at(0).fullPrice)}
                    </h4>
                  )}
                  <h4 className="text-stone-900">
                    {formatCurrency(
                      cartProduct.colors.at(0).currentPrice * quantity,
                    )}
                  </h4>
                </div>
                <Link
                  className="text-stone-900"
                  to={`/product/${product._id}?color=${colorCode}`}
                >
                  <h4>{cartProduct.title}</h4>
                </Link>
              </div>
              <span>{cartProduct.subtitle}</span>
              <span className="hidden tablet:flex">
                {cartProduct.colors.at(0).colorDescription}
              </span>
              <div className="flex gap-4">
                <div>
                  <span>Size </span>
                  <select
                    className="text-sm"
                    value={size}
                    onChange={(e) => handleUpdateItem({ size: e.target.value })}
                  >
                    {cartProduct.colors.at(0).skus.map(
                      (sku) =>
                        sku.available && (
                          <option className="text-sm" key={sku._id}>
                            {sku.size === sku.localizedSize
                              ? sku.size
                              : sku.localizedSize}
                          </option>
                        ),
                    )}
                  </select>
                </div>

                <div>
                  <span>Quantity </span>
                  <select
                    className="text-sm"
                    value={quantity}
                    onChange={(e) =>
                      handleUpdateItem({ quantity: +e.target.value })
                    }
                  >
                    {Array.from({ length: 10 }).map((_, i) => (
                      <option className="text-sm" key={i}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button
              className="text-2xl text-stone-900"
              onClick={handleDeleteItem}
            >
              <IoTrashOutline />
            </button>
          </div>
        </div>
      )}

      {/* <div className="my-4">
        <h4 className="mb-1">Shipping</h4>
        <h4>
          Arrives by Tue, Nov 7{" "}
          <ButtonLink border={true}>Edit Location</ButtonLink>
        </h4>
      </div>

      <div className="mt-4">
        <h4 className="mb-1">Free Pickup</h4>
        <ButtonLink border={true}>Find a Store</ButtonLink>
      </div> */}
    </div>
  );
}

export default BagItem;
