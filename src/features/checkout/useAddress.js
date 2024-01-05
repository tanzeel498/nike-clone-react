import { useQuery } from "@tanstack/react-query";
import { getAddress } from "../../services/apiAddress";

function useAddress() {
  const { data: address, isLoading } = useQuery({
    queryKey: ["address"],
    queryFn: getAddress,
  });
  return { address, isLoading };
}

export default useAddress;
