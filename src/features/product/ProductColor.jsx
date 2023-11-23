function ProductColor({ activeColor, styleCode, setColor }) {
  // use styleCode for fetching data from server
  // set the first color code to activeColor by default
  return (
    <div className="my-6 flex w-[400px] flex-wrap gap-2">
      <img
        className={`w-28 cursor-pointer rounded-md tablet:w-[70px] ${
          activeColor === "CZ0790-200" ? "border-[1px]" : ""
        } border-stone-900`}
        src="product/product0.webp"
        alt=""
        onClick={() => setColor("CZ0790-200")}
      />
      <img
        className={`w-28 cursor-pointer rounded-md tablet:w-[70px] ${
          activeColor === "CZ0790-161" ? "border-[1px]" : ""
        } border-stone-900`}
        src="product/product1.webp"
        alt=""
        onClick={() => setColor("CZ0790-161")}
      />
    </div>
  );
}

export default ProductColor;
