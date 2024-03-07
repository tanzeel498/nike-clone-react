import CarouselProduct from "../features/product/CarouselProduct";
import ProductDetails from "../features/product/ProductDetails";
import ProductTitle from "../features/product/ProductTitle";

function Product() {
  return (
    <>
      <div className="mx-auto flex flex-col tablet:my-12 tablet:w-auto tablet:flex-row tablet:justify-center tablet:gap-10">
        <div className="tablet:hidden">
          <ProductTitle />
        </div>
        <CarouselProduct />
        <ProductDetails />
      </div>
    </>
  );
}

export default Product;
