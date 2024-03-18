import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import useProduct from "./useProduct";
import useProductColors from "./useProductColors";

function ProductTitle() {
  const { product, isLoading } = useProduct();
  const [price, setPrice] = useState(0); // using this so that it doesn't go to zero during isLoading
  const { product: productColors } = useProductColors();

  useEffect(
    function () {
      if (!isLoading) setPrice(product.colors.at(0).currentPrice);
    },
    [product?.colors, isLoading],
  );

  const { title, subtitle } = productColors || {};

  return (
    <div className="my-5 px-6 tablet:my-2 tablet:px-0">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <p className="my-3 font-medium">{formatCurrency(price)}</p>
    </div>
  );
}

export default ProductTitle;
