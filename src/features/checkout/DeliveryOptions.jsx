import { LiaShippingFastSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import DeliveryForm from "./DeliveryForm";
import { useState } from "react";
import AddressItem from "./AddressItem";

const addresses = [
  {
    id: 1,
    firstName: "Tanzeel",
    lastName: "Rehman",
    email: "test@tester.com",
    phone: "238984934983",
    address: "Lahore Cantonment Tehsil, Lahore , Pakistan",
    apt: "Hosue # 10",
    city: "Lhore",
    state: "Pajab",
    postalCode: "99898",
  },
];

function DeliveryOptions() {
  const [userAddresses, setUserAddresses] = useState(addresses);

  return (
    <div className="mb-10">
      <h3>Delivery Options</h3>
      <div className="my-10 flex gap-4">
        <button className="flex grow items-center justify-center gap-2 rounded-lg border-[1px] border-stone-300 py-3.5 font-medium">
          <span className="text-2xl">
            <LiaShippingFastSolid />
          </span>
          Ship
        </button>
        <button className="flex max-w-[calc(50%-8px)] grow items-center justify-center gap-2 rounded-lg border-[1px] border-stone-300 py-3.5 font-medium">
          <span className="text-2xl">
            <IoLocationOutline />
          </span>
          Pick Up
        </button>
      </div>

      {!userAddresses.length && (
        <DeliveryForm addresses={userAddresses} setAddress={setUserAddresses} />
      )}
      {userAddresses.length && (
        <div>
          {userAddresses.map((address) => (
            <AddressItem key={address.id} address={address} />
          ))}
        </div>
      )}
    </div>
  );
}

export default DeliveryOptions;
