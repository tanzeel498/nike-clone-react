import { Link } from "react-router-dom";
import { useState } from "react";

import ProductTitle from "./ProductTitle";
import ProductColor from "./ProductColor";
import ButtonLink from "../../ui/ButtonLink";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ProductReviews from "./ProductReviews";
import ProductDescription from "./ProductDescription";
import SizeButton from "../../ui/SizeButton";
import useProduct from "./useProduct";
import useAddToCart from "./useAddToCart";

function ProductDetails() {
  const { isLoading, product } = useProduct();
  const { addToCart, isPending } = useAddToCart();
  const [size, setSize] = useState(null);

  if (isLoading || isPending) return;
  const { descriptionPreview, sizeChartUrl } = product;
  const { skus, colorCode, colorDescription } = product.colors.at(0);

  function handleAddToCart() {
    addToCart(
      { id: product._id, colorCode, size },
      {
        onSuccess: (user) => console.log(user),
      },
    );
  }

  return (
    <div className="w-full px-6 tablet:max-w-[400px] tablet:px-0">
      <div className="hidden tablet:block">
        <ProductTitle />
      </div>
      <ProductColor />
      <div className="mb-10">
        <div className="my-4 flex items-center justify-between">
          <p className="font-medium">Select Size</p>
          <Link to={sizeChartUrl} className="text-stone-500" target="_blank">
            Size Guide
          </Link>
        </div>
        <div className="flex flex-wrap justify-between gap-2">
          {skus.map((sku) => (
            <SizeButton
              key={sku._id}
              size={sku.size}
              selectedSize={size}
              available={sku.available}
              perRow="17"
              onClick={() => setSize(sku.size)}
            />
          ))}
        </div>
      </div>

      <div className="my-10">
        <Button size="large" onClick={handleAddToCart}>
          Add to Bag
        </Button>
      </div>

      <div className="description">
        <p className="mb-10 text-base font-medium leading-7 text-stone-800">
          {descriptionPreview}
        </p>
        <ul className="mb-10 list-disc pl-5 text-base leading-7">
          <li>Shown: {colorDescription}</li>
          <li>Style: {colorCode}</li>
        </ul>

        <Modal>
          <Modal.Open opens="description">
            <ButtonLink>View Product Details</ButtonLink>
          </Modal.Open>
          <Modal.Window name="description">
            <ProductDescription />
          </Modal.Window>
        </Modal>
      </div>

      <ProductReviews />
    </div>
  );
}

export default ProductDetails;
