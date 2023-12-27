import ProductTile from "./ProductTile";

function ProductsGrid({ products }) {
  return (
    <div className="grid w-full max-w-full grow grid-cols-2 gap-4 duration-300 tablet:grid-cols-3">
      {products.map((product) => (
        <ProductTile key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
