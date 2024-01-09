import { useState } from "react";
import Button from "../../ui/Button";
import AddressItem from "./AddressItem";
import DeliveryForm from "./DeliveryForm";
import useAddress from "./useAddress";

function ShippingForm({ setDeliveryAdded }) {
  const [addressAdded, setAddressAdded] = useState(false);
  const { address, isLoading } = useAddress();
  // console.log("address called from ShippingForm");

  if (isLoading) return;
  return (
    <>
      {!addressAdded && (
        <DeliveryForm address={address} setAddressAdded={setAddressAdded} />
      )}
      {addressAdded && (
        <>
          <AddressItem
            address={address}
            setAddressAdded={setAddressAdded}
            border={true}
          />
          <div className="mt-10 flex justify-end">
            <Button onClick={() => setDeliveryAdded(true)}>
              Continue to Payment
            </Button>
          </div>
        </>
      )}
    </>
  );
}

export default ShippingForm;
