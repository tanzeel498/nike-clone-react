import OrderTable from "../features/Order/OrderTable";
import OrderTableMobile from "../features/Order/OrderTableMobile";

function Orders() {
  return (
    <div className="mb-28 flex w-full flex-col items-center px-4 tablet:mx-auto tablet:w-2/3">
      <h2 className="my-14 text-3xl">Orders</h2>
      <div className="hidden mobile:block">
        <OrderTable />
      </div>
      <OrderTableMobile />
    </div>
  );
}

export default Orders;
