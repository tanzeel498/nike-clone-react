function SizeButton({ size, selectedSize, available, perRow, onClick }) {
  let sizeMatched;
  if (typeof selectedSize === "number") sizeMatched = size === selectedSize;
  else sizeMatched = selectedSize.includes(size);

  return (
    <button
      className={`grow rounded-md border-[1px] py-2.5 font-medium ${
        available ? "hover:border-stone-900" : ""
      } ${sizeMatched ? "border-stone-900" : "border-stone-200"} ${
        !available ? "opacity-50" : "opacity-100"
      }`}
      disabled={!available}
      onClick={onClick}
      style={{ flexBasis: perRow + "%" }}
    >
      {size}
    </button>
  );
}

export default SizeButton;
