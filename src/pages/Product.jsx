import { useState } from "react";
import CarouselProduct from "../features/product/CarouselProduct";
import ProductDetails from "../features/product/ProductDetails";

import { product } from "../features/product/productData";

function Product() {
  // set default color of shoes from useQueryParams or ...
  const [activeColor, setActiveColor] = useState("CZ0790-200");

  return (
    <div className="mx-auto my-12 flex max-w-screen-xl justify-center gap-24">
      <CarouselProduct activeColor={activeColor} />
      <ProductDetails
        product={product}
        activeColor={activeColor}
        setColor={setActiveColor}
      />
    </div>
  );
}

export default Product;
