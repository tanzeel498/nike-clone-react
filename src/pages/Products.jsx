import { useRef, useState } from "react";
import { createPortal } from "react-dom";
// import { products } from "../features/products/productsData";
import HeaderProducts from "../features/products/HeaderProducts";
import FilterBar from "../features/filter/FilterBar";
import ProductsGrid from "../features/products/ProductsGrid";
import FilterPage from "../features/filter/FilterPage";
import useProducts from "../features/products/useProducts";

function Products() {
  const windowsWidth = useRef(window.innerWidth);
  const [showFilters, setShowFilters] = useState(
    windowsWidth.current > 960 ? true : false,
  );
  const title = "Men's Shoes and Snickers";
  const { products, isLoading } = useProducts();
  const resultCount = products?.length;
  // const { title, resultCount, data } = products;
  if (isLoading) return;

  return (
    <div className="relative w-full max-w-[1920px]">
      <HeaderProducts
        title={title}
        resultCount={resultCount}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      <div className="flex min-h-screen px-6 tablet:px-14">
        {windowsWidth.current > 960 && <FilterBar showFilters={showFilters} />}
        {windowsWidth.current < 960 &&
          createPortal(
            <FilterPage
              showFilters={showFilters}
              setShowFilters={setShowFilters}
            />,
            document.body,
          )}

        <ProductsGrid products={products} />
      </div>
    </div>
  );
}

export default Products;
