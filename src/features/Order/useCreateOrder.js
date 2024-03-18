import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder as createOrderApi } from "../../services/apiOrders";
import { useNavigate } from "react-router-dom";

function useCreateOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: createOrder,
    isPending,
    error,
  } = useMutation({
    mutationFn: createOrderApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["numCartItems"]);
      navigate("/orders", { replace: true });
    },
  });
  return { createOrder, isPending, error };
}

export default useCreateOrder;
