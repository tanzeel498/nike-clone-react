import { formatCurrency } from "../../utils/helpers";
import useProduct from "./useProduct";
import useProductColors from "./useProductColors";

function ProductTitle() {
  const { product } = useProduct();
  const { product: productColors } = useProductColors();

  const { title, subtitle } = productColors || {};
  const currentPrice = product?.colors?.at(0).currentPrice || 0;

  return (
    <div className="my-5 px-6 tablet:my-2 tablet:px-0">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p className="my-3 font-medium">{formatCurrency(currentPrice)}</p>
    </div>
  );
}

export default ProductTitle;
