function SizeButton({ perRow, item, onClick, size, children }) {
  let sizeMatched;
  if (typeof size === "string") sizeMatched = size === item.size;
  else sizeMatched = size.includes(item.size);

  return (
    <button
      className={`grow rounded-md border-[1px] py-2.5 font-medium ${
        item?.available ? "hover:border-stone-900" : ""
      } ${sizeMatched ? "border-stone-900" : "border-stone-200"} ${
        item.available === false ? "opacity-50" : "opacity-100"
      }`}
      disabled={!item.available}
      onClick={onClick}
      style={{ flexBasis: perRow + "%" }}
    >
      {children}
    </button>
  );
}

export default SizeButton;
