import ProductTile from "./ProductTile";

function ProductsGrid({ products }) {
  return (
    <div className="grid w-full max-w-full grow grid-cols-3 gap-4 duration-300">
      {products.map((product) => (
        <ProductTile key={product.pid} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
