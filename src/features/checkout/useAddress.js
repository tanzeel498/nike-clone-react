import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../../services/apiCheckout";

function useAddress() {
  const {
    data: address,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["address"],
    queryFn: getAddress,
  });
  return { address, isLoading, error };
}

export default useAddress;
