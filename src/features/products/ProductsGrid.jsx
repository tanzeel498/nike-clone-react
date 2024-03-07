import ProductTile from "./ProductTile";
import useProducts from "./useProducts";

function ProductsGrid({ showFilters }) {
  const { products, isLoading } = useProducts();

  return (
    <>
      {isLoading && (
        <div
          className={`fixed bottom-0 right-14 top-44 flex items-center justify-center bg-stone-100 bg-opacity-25 ${
            showFilters ? " left-[344px]" : "left-14"
          }`}
        >
          <div className="spinner"></div>
        </div>
      )}
      {products && (
        <div className="relative grid w-full grow grid-cols-2 gap-4 duration-300 tablet:grid-cols-3">
          {products.map((product) => (
            <ProductTile key={product._id} product={product} />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductsGrid;
