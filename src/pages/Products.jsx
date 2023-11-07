import { useState } from "react";
import { products } from "../features/products/productsData";
import HeaderProducts from "../features/products/HeaderProducts";
import FilterBar from "../features/filterBar/FilterBar";
import ProductsGrid from "../features/products/ProductsGrid";

function Products() {
  const [showFilterBar, setShowFilterBar] = useState(true);
  const { title, resultCount, data } = products;

  return (
    <div className="relative w-full max-w-[1920px]">
      <HeaderProducts
        title={title}
        resultCount={resultCount}
        showFilterBar={showFilterBar}
        setShowFilterBar={setShowFilterBar}
      />
      <div className="flex min-h-screen px-6 tablet:px-14">
        <FilterBar showFilterBar={showFilterBar} />
        <ProductsGrid products={data} showFilterBar={showFilterBar} />
      </div>
    </div>
  );
}

export default Products;
