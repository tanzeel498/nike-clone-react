import { LiaShippingFastSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { useState } from "react";
import ShippingForm from "./ShippingForm";
import PickUpForm from "./PickUpForm";
import IconButton from "./IconButton";

function DeliveryOptions({ setDeliveryAdded }) {
  const [deliveryMode, setDeliveryMode] = useState("ship");

  return (
    <div className="mt-10">
      <div className="mb-10 flex justify-between gap-4">
        <IconButton
          name="ship"
          activeMode={deliveryMode}
          onClick={() => setDeliveryMode("ship")}
        >
          <span className="text-2xl">
            <LiaShippingFastSolid />
          </span>
          Ship
        </IconButton>
        <IconButton
          name="pickUp"
          activeMode={deliveryMode}
          onClick={() => setDeliveryMode("pickUp")}
        >
          <span className="text-2xl">
            <IoLocationOutline />
          </span>
          Pick Up
        </IconButton>
      </div>

      {deliveryMode === "ship" && (
        <ShippingForm setDeliveryAdded={setDeliveryAdded} />
      )}
      {deliveryMode === "pickUp" && <PickUpForm />}
    </div>
  );
}

export default DeliveryOptions;
