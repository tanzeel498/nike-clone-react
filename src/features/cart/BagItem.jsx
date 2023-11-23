import { Link } from "react-router-dom";
import { data } from "./bagData";
import { formatCurrency } from "../../utils/helpers";
import { IoTrashOutline } from "react-icons/io5";
import ButtonLink from "../../ui/ButtonLink";

function BagItem() {
  return (
    <div className="py-6">
      <div className="flex w-full gap-8">
        <Link
          className="max-w-[150px]"
          to={`https://www.nike.com${data[0].url}`}
        >
          <img
            className="aspect-square max-w-[150px] object-cover"
            src={data[0].images.squarishURL}
            alt=""
          />
        </Link>
        <div className="flex grow flex-col justify-between">
          <div className="flex flex-col gap-1 font-medium text-stone-500">
            <div className="flex flex-col gap-1 mobile:flex-row-reverse mobile:justify-between">
              <div className="flex gap-3">
                {data[0].cartFullPrice !== data[0].cartTotal && (
                  <h4 className="line-through">
                    {formatCurrency(data[0].cartFullPrice)}
                  </h4>
                )}
                <h4 className="text-stone-900">
                  {formatCurrency(data[0].cartTotal)}
                </h4>
              </div>
              <Link
                className="text-stone-900"
                to={`https://www.nike.com${data[0].url}`}
              >
                <h4>{data[0].title}</h4>
              </Link>
            </div>
            <span>{data[0].subtitle}</span>
            <span className="hidden tablet:flex">
              {data[0].colorDescription}
            </span>
            <div className="flex gap-4">
              <div>
                <span>Size </span>
                <select className="text-sm">
                  {Array.from({ length: 15 }).map((_, i) => (
                    <option className="text-sm" key={i}>
                      {i < 12 ? (i + 14) / 2 : i + 1}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <span>Quantity </span>
                <select className="text-sm">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <option className="text-sm" key={i}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button className="text-2xl text-stone-900">
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
