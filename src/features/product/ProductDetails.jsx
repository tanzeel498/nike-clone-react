import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductTitle from "./ProductTitle";
import ProductColor from "./ProductColor";
import ButtonLink from "../../ui/ButtonLink";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ProductReviews from "./ProductReviews";
import ProductDescription from "./ProductDescription";
import SizeButton from "../../ui/SizeButton";
import useProduct from "./useProduct";
import useAddToCart from "../cart/useAddToCart";
import ProductDetailsBlank from "./ProductDetailsBlank";
import useUser from "../authentication/useUser";
import CartPopup from "./CartPopup";

function ProductDetails() {
  const { user } = useUser();
  const { isLoading, product } = useProduct();
  const { addToCart, isPending } = useAddToCart();
  const [size, setSize] = useState({ value: "", error: null });
  const [initialPageLoaded, setInitialPageLoaded] = useState(false); // using this hook to not show <CarouselProductBlank /> again if user chooses another color
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(
    function () {
      if (initialPageLoaded) return;
      if (!isLoading) setInitialPageLoaded(true);
    },
    [isLoading, initialPageLoaded],
  );

  const { descriptionPreview, sizeChartUrl } = product ?? {};
  const { skus, colorCode, colorDescription, currentPrice } =
    product?.colors.at(0) ?? {};

  function handleAddToCart() {
    if (!user) {
      setIsPopupOpen(true);
      return;
    }

    if (!size.value) {
      setSize((s) => ({ ...s, error: true }));
    } else {
      addToCart(
        { id: product._id, colorCode, size: size.value, currentPrice },
        {
          onSuccess: () => {
            setIsPopupOpen(true);
            console.log("Cart updated!");
          },
        },
      );
    }
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
    if (user) setSize({ value: "", error: null });
  }

  return isLoading && !initialPageLoaded ? (
    <ProductDetailsBlank />
  ) : (
    <div className="w-full px-6 tablet:max-w-[400px] tablet:px-0">
      {isPopupOpen && (
        <CartPopup
          user={user}
          onClose={handleClosePopup}
          product={product}
          size={size.value}
        />
      )}
      <div className="hidden tablet:block">
        <ProductTitle />
      </div>
      <ProductColor />
      <div className="mb-10">
        <div className="my-4 flex items-center justify-between">
          <p className="font-medium">Select Size</p>
          {sizeChartUrl && (
            <Link to={sizeChartUrl} className="text-stone-500" target="_blank">
              Size Guide
            </Link>
          )}
        </div>
        <div
          className={`flex flex-wrap justify-between gap-2 rounded-lg border-[1px] ${
            size.error ? "border-red-600" : "border-none"
          }`}
        >
          {isLoading ? (
            <div className="flex flex-wrap justify-between gap-2 rounded-lg">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="h-9 w-16 cursor-pointer rounded-md bg-stone-200 tablet:w-[70px]"
                />
              ))}
            </div>
          ) : (
            skus?.map((sku) => (
              <SizeButton
                key={sku._id}
                size={
                  sku.size === sku.localizedSize ? sku.size : sku.localizedSize
                }
                selectedSize={size.value}
                available={sku.available}
                perRow={sku.size === sku.localizedSize ? "17" : "40"}
                onClick={() =>
                  setSize({ value: sku.localizedSize, error: null })
                }
              />
            ))
          )}
        </div>
        {size.error && (
          <p className="ml-4 mt-2 text-sm font-semibold text-red-600">
            Please select a size.
          </p>
        )}
      </div>

      <div className="my-10">
        <Button size="large" onClick={handleAddToCart} disabled={isPending}>
          {isPending ? <span className="spinner-mini"></span> : "Add to Bag"}
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
