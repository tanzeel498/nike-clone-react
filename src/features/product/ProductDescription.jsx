import { formatCurrency } from "../../utils/helpers";
import parse from "html-react-parser";
import useProduct from "./useProduct";

function ProductDescription() {
  const { isLoading, product } = useProduct();

  if (isLoading) return;
  const { description, title } = product;
  const { currentPrice, squarishUrl } = product.colors.at(0);

  return (
    <div>
      <div className="mb-8 flex items-end gap-5">
        <img className="h-16 w-16 rounded-md" src={squarishUrl} alt="" />
        <div>
          <p>{title}</p>
          <p>{formatCurrency(currentPrice)}</p>
        </div>
      </div>
      {parse(description)}
    </div>
  );
}

export default ProductDescription;
