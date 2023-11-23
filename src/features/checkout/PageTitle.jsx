import { formatCurrency } from "../../utils/helpers";

function PageTitle({ numItems, title, totalAmount = 504.97 }) {
  return (
    <div className="my-14 flex flex-col items-center gap-2">
      <h2 className="text-3xl">{title}</h2>
      <div className="flex gap-1 font-semibold">
        <span className="text-stone-600">{numItems} Items |</span>
        <span>{formatCurrency(totalAmount)}</span>
      </div>
    </div>
  );
}

export default PageTitle;
