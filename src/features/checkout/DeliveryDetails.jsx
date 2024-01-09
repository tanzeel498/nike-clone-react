import AddressItem from "./AddressItem";
import useAddress from "./useAddress";

function DeliveryDetails() {
  const { address, isLoading } = useAddress();

  if (isLoading) return;
  return (
    <div>
      <AddressItem address={address} border={false} />
    </div>
  );
}

export default DeliveryDetails;
