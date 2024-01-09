import ButtonLink from "../../ui/ButtonLink";

function AddressItem({ address, setAddressAdded = () => {}, border }) {
  return (
    <div
      className={`rounded-lg ${
        border ? "border-2 text-stone-900" : "border-0 text-stone-500"
      } border-stone-900 p-5 font-medium`}
    >
      {border && (
        <span className="float-right">
          <ButtonLink border={true} onClick={() => setAddressAdded(false)}>
            Edit
          </ButtonLink>
        </span>
      )}
      <div className="flex flex-col gap-1">
        {!border && (
          <span className="font-semibold text-stone-900">Shipping Address</span>
        )}
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
