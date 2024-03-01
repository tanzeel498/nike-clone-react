import CarouselProduct from "../features/product/CarouselProduct";
import ProductDetails from "../features/product/ProductDetails";
import ProductTitle from "../features/product/ProductTitle";

function Product() {
  return (
    <>
      <div className="mx-auto my-12 hidden justify-center gap-10 tablet:flex">
        <CarouselProduct />
        <ProductDetails />
      </div>
      <div className="flex w-full flex-col tablet:hidden">
        <ProductTitle />
        <CarouselProduct />
        <ProductDetails />
      </div>
    </>
  );
}

export default Product;
