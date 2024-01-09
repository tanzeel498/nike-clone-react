import { useQuery } from "@tanstack/react-query";
import { getPaymentDetails } from "../../services/apiCheckout";

function usePayment() {
  const { data: payment, isLoading } = useQuery({
    queryKey: ["payment"],
    queryFn: getPaymentDetails,
  });
  return { payment, isLoading };
}

export default usePayment;
