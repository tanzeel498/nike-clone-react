import { useState } from "react";
import CarouselProduct from "../features/product/CarouselProduct";
import ProductDetails from "../features/product/ProductDetails";

import { product } from "../features/product/productData";
import ProductTitle from "../features/product/ProductTitle";

function Product() {
  // set default color of shoes from useQueryParams or ...
  const [activeColor, setActiveColor] = useState("CZ0790-200");
  const { title, subTitle, fullPrice, currentPrice } = product;

  return (
    <>
      <div className="mx-auto my-12 hidden justify-center gap-10 tablet:flex">
        <CarouselProduct activeColor={activeColor} />
        <ProductDetails
          product={product}
          activeColor={activeColor}
          setColor={setActiveColor}
        />
      </div>
      <div className="flex w-full flex-col tablet:hidden">
        <ProductTitle
          title={title}
          subTitle={subTitle}
          fullPrice={fullPrice}
          currentPrice={currentPrice}
        />
        <CarouselProduct activeColor={activeColor} />
        <ProductDetails
          product={product}
          activeColor={activeColor}
          setColor={setActiveColor}
        />
      </div>
    </>
  );
}

export default Product;
