import "swiper/css/zoom";
import ProductTitle from "./ProductTitle";
import ProductColor from "./ProductColor";
import Button from "../../ui/Button";
import ProductReviews from "./ProductReviews";
import ButtonLink from "../../ui/ButtonLink";
import Modal from "../../ui/Modal";
import ProductDescription from "./ProductDescription";
import { Link } from "react-router-dom";
import { useState } from "react";
import SizeButton from "../../ui/sizeButton";

function ProductDetails({ product, setColor, activeColor }) {
  //fetch data of activeColor from server
  const [size, setSize] = useState("");

  const {
    title,
    subTitle,
    fullPrice,
    currentPrice,
    styleCode,
    skus,
    sizeChartUrl,
    descriptionPreview,
    styleColor,
    colorDescription,
    description,
  } = product;
  return (
    <div className="max-w-[400px]">
      <ProductTitle
        title={title}
        subTitle={subTitle}
        fullPrice={fullPrice}
        currentPrice={currentPrice}
      />
      <ProductColor
        activeColor={activeColor}
        setColor={setColor}
        styleCode={styleCode}
      />
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
              item={sku}
              size={size}
              perRow="17"
              onClick={() => setSize(sku.nikeSize)}
            >
              {sku.nikeSize}
            </SizeButton>
          ))}
        </div>
      </div>

      <div className="my-10">
        <Button size="large">Add to Bag</Button>
      </div>

      <div className="description">
        <p className="mb-10 text-base font-medium leading-7 text-stone-800">
          {descriptionPreview}
        </p>
        <ul className="mb-10 list-disc pl-5 text-base leading-7">
          <li>Shown: {colorDescription}</li>
          <li>Style: {styleColor}</li>
        </ul>

        <Modal>
          <Modal.Open opens="description">
            <ButtonLink>View Product Details</ButtonLink>
          </Modal.Open>
          <Modal.Window name="description">
            <ProductDescription
              description={description}
              imgSrc={"product/00.webp"}
              title={title}
              currentPrice={currentPrice}
            />
          </Modal.Window>
        </Modal>
      </div>

      <ProductReviews />
    </div>
  );
}

export default ProductDetails;
