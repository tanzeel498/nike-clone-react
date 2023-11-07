import ButtonLink from "../../ui/ButtonLink";

function AddressItem({ address }) {
  return (
    <div className="rounded-lg border-2 border-stone-900 p-5">
      <span className="float-right">
        <ButtonLink border={true}>Edit</ButtonLink>
      </span>
      <div className="flex flex-col gap-1">
        <span>{address.firstName + " " + address.lastName}</span>
        <span>{address.apt}</span>
        <span>{address.city + " " + address.address}</span>
        <span>{address.email}</span>
        <span>{address.phone}</span>
      </div>
    </div>
  );
}

export default AddressItem;
