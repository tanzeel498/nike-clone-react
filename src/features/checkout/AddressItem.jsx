import ButtonLink from "../../ui/ButtonLink";

function AddressItem({ address, setAddressAdded, deliveryAdded }) {
  return (
    <div
      className={`rounded-lg ${
        deliveryAdded ? "border-0" : "border-2"
      } border-stone-900 p-5`}
    >
      {!deliveryAdded && (
        <span className="float-right">
          <ButtonLink border={true} onClick={() => setAddressAdded(false)}>
            Edit
          </ButtonLink>
        </span>
      )}
      <div className="flex flex-col gap-1">
        <span>{address.firstName + " " + address.lastName}</span>
        <span>{address.address}</span>
        <span>{address.apt}</span>
        <span>
          {address.city + " " + address.state + " " + address.postalCode}
        </span>
        <span>{address.email}</span>
        <span>{address.phone}</span>
      </div>
    </div>
  );
}

export default AddressItem;
