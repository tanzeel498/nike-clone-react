import { useQuery } from "@tanstack/react-query";
import { getOrder } from "../../services/apiOrders";

function useOrder(id) {
  const {
    data: order,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["order", id],
    queryFn: () => getOrder(id),
  });
  return { order, isLoading, error };
}

export default useOrder;
