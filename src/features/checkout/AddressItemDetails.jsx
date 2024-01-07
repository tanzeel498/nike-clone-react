function AddressItemDetails({ name, address }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-semibold text-stone-900">{name}</span>

      <span>{address.firstName + " " + address.lastName}</span>
      <span>{address.address}</span>
      <span>{address.apt}</span>
      <span>
        {address.city + " " + address.state + " " + address.postalCode}
      </span>
      <span>{address.email}</span>
      <span>{address.phone}</span>
    </div>
  );
}

export default AddressItemDetails;
