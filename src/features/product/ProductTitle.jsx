import { formatCurrency } from "../../utils/helpers";

function ProductTitle({ title, subTitle, fullPrice, currentPrice }) {
  return (
    <div className="my-2">
      <h2>{title}</h2>
      <p>{subTitle}</p>
      <p className="my-3 font-medium">{formatCurrency(currentPrice)}</p>
    </div>
  );
}

export default ProductTitle;
