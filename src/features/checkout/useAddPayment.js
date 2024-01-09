import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPayment as addPaymentApi } from "../../services/apiCheckout";

function useAddPayment() {
  const queryClient = useQueryClient();

  const { mutate: addPayment, isPending } = useMutation({
    mutationFn: addPaymentApi,
    onSuccess: (payment) => queryClient.setQueryData(["payment"], payment),
  });

  return { addPayment, isPending };
}

export default useAddPayment;
