import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import HeaderProducts from "../features/products/HeaderProducts";
import FilterBar from "../features/filter/FilterBar";
import ProductsGrid from "../features/products/ProductsGrid";
import FilterPage from "../features/filter/FilterPage";

function Products() {
  const windowsWidth = useRef(window.innerWidth);
  const [showFilters, setShowFilters] = useState(
    windowsWidth.current > 960 ? true : false,
  );

  return (
    <div className="relative w-full max-w-[1920px]">
      <HeaderProducts
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

        <ProductsGrid showFilters={showFilters} />
      </div>
    </div>
  );
}

export default Products;
