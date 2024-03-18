import { formatCurrency } from "../../utils/helpers";
import parse from "html-react-parser";
import useProduct from "./useProduct";
import HeaderIcon from "../../ui/HeaderIcon";
import { IoClose } from "react-icons/io5";
import { forwardRef } from "react";

const ProductDescription = forwardRef(function ({ onClick }, ref) {
  const { isLoading, product } = useProduct();

  if (isLoading) return;
  const { description, title } = product;
  const { currentPrice, squarishUrl, alt } = product.colors.at(0);

  return (
    <div
      ref={ref}
      className="fixed h-5/6 w-5/6 overflow-y-auto rounded-lg bg-white p-4 shadow-xl duration-300 mobile:px-8 mobile:py-6 tablet:w-1/2 tablet:min-w-[900px]"
    >
      <div className="absolute right-4 top-3">
        <HeaderIcon onClick={onClick}>
          <IoClose className="text-2xl" />
        </HeaderIcon>
      </div>

      <div>
        <div className="mb-8 flex items-end gap-5">
          <img className="h-16 w-16 rounded-md" src={squarishUrl} alt={alt} />
          <div>
            <p>{title}</p>
            <p>{formatCurrency(currentPrice)}</p>
          </div>
        </div>
        {parse(description)}
      </div>
    </div>
  );
});

export default ProductDescription;
