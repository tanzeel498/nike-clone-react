import Button from "../../ui/Button";
import ButtonLink from "../../ui/ButtonLink";

function OrderReview() {
  return (
    <div className="pt-10 text-stone-600">
      <p className="leading-7">
        By Clicking the "Submit Payment" button, you confirm that you have read,
        understand, and accept our <ButtonLink>Terms of Use</ButtonLink>,{" "}
        <ButtonLink>Terms of Sale</ButtonLink>,{" "}
        <ButtonLink>Privacy Policy</ButtonLink>, and{" "}
        <ButtonLink>Return Policy</ButtonLink>.
      </p>
      <div className="mt-10 flex justify-end">
        <Button>Submit Payment</Button>
      </div>
    </div>
  );
}

export default OrderReview;
