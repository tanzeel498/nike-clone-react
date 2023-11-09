import { formatCurrency } from "../../utils/helpers";
import parse from "html-react-parser";

function ProductDescription({ description, imgSrc, title, currentPrice }) {
  return (
    <div>
      <div className="mb-8 flex items-end gap-5">
        <img className="h-16 w-16 rounded-md" src={imgSrc} alt="" />
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
