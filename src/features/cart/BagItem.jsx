import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/helpers";
import { IoTrashOutline } from "react-icons/io5";
import ButtonLink from "../../ui/ButtonLink";
import useUpdateCartItem from "./useUpdateCartItem";
import useDeleteCartItem from "./useDeleteCartItem";

function BagItem({ data }) {
  const { updateCartItem, isPending: isUpdatePending } = useUpdateCartItem();
  const { deleteCartItem, isPending: isDeletePending } = useDeleteCartItem();

  function handleUpdateItem(value) {
    updateCartItem({ id: data._id, ...value });
  }

  function handleDeleteItem() {
    deleteCartItem(data._id);
  }

  return (
    <div className="py-6">
      <div className="flex w-full gap-8">
        <Link
          className="max-w-[150px]"
          to={`/products/${data.productId}?color=${data.colorCode}`}
        >
          <img
            className="aspect-square max-w-[150px] object-cover"
            src={data.squarishUrl}
            alt="cart-img"
          />
        </Link>
        <div className="flex grow flex-col justify-between">
          <div className="flex flex-col gap-1 font-medium text-stone-500">
            <div className="flex flex-col gap-1 mobile:flex-row-reverse mobile:justify-between">
              <div className="flex gap-3">
                {data.fullPrice !== data.currentPrice && (
                  <h4 className="line-through">
                    {formatCurrency(data.fullPrice)}
                  </h4>
                )}
                <h4 className="text-stone-900">
                  {formatCurrency(data.currentPrice * data.quantity)}
                </h4>
              </div>
              <Link
                className="text-stone-900"
                to={`/products/${data.productId}?color=${data.colorCode}`}
              >
                <h4>{data.title}</h4>
              </Link>
            </div>
            <span>{data.subtitle}</span>
            <span className="hidden tablet:flex">{data.colorDescription}</span>
            <div className="flex gap-4">
              <div>
                <span>Size </span>
                <select
                  className="text-sm"
                  value={data.size}
                  onChange={(e) => handleUpdateItem({ size: e.target.value })}
                >
                  {data.skus.map(
                    (sku) =>
                      sku.available && (
                        <option className="text-sm" key={sku._id}>
                          {sku.size}
                        </option>
                      ),
                  )}
                </select>
              </div>

              <div>
                <span>Quantity </span>
                <select
                  className="text-sm"
                  value={data.quantity}
                  onChange={(e) =>
                    handleUpdateItem({ quantity: e.target.value })
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

      <div className="my-4">
        <h4 className="mb-1">Shipping</h4>
        <h4>
          Arrives by Tue, Nov 7{" "}
          <ButtonLink border={true}>Edit Location</ButtonLink>
        </h4>
      </div>

      <div className="mt-4">
        <h4 className="mb-1">Free Pickup</h4>
        <ButtonLink border={true}>Find a Store</ButtonLink>
      </div>
    </div>
  );
}

export default BagItem;
