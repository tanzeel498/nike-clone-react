import { useState } from "react";
import { products } from "../features/products/productsData";
import HeaderProducts from "../features/products/HeaderProducts";
import FilterBar from "../features/filterBar/FilterBar";
import ProductsGrid from "../features/products/ProductsGrid";

function Products() {
  const [showFilters, setShowFilters] = useState(true);
  const { title, resultCount, data } = products;

  return (
    <div className="relative w-full max-w-[1920px]">
      <HeaderProducts
        title={title}
        resultCount={resultCount}
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      <div className="flex min-h-screen px-6 tablet:px-14">
        <FilterBar showFilters={showFilters} />
        <ProductsGrid products={data} />
      </div>
    </div>
  );
}

export default Products;
