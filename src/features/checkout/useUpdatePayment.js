import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updatePayment as updatePaymentApi } from "../../services/apiPayments";

function useUpdatePayment() {
  const queryClient = useQueryClient();

  const { mutate: updatePayment, isPending } = useMutation({
    mutationFn: updatePaymentApi,
    onSuccess: (payment) => queryClient.setQueryData(["payment"], payment),
  });

  return { updatePayment, isPending };
}

export default useUpdatePayment;
