import { useState } from "react";
import Button from "../../ui/Button";
import AddressItem from "./AddressItem";
import DeliveryForm from "./DeliveryForm";
import useAddress from "./useAddress";

function Delivery({ deliveryAdded, setDeliveryAdded }) {
  const [addressAdded, setAddressAdded] = useState(false);
  const { address, isLoading } = useAddress();

  if (isLoading) return;
  return (
    <>
      {!deliveryAdded && !addressAdded && (
        <DeliveryForm address={address} setAddressAdded={setAddressAdded} />
      )}
      {!deliveryAdded && addressAdded && (
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
      {deliveryAdded && addressAdded && (
        <AddressItem address={address} border={false} />
      )}
    </>
  );
}

export default Delivery;
