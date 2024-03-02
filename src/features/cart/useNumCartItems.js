import { useQuery } from "@tanstack/react-query";
import { getNumCartItems } from "../../services/apiCart";

function useNumCartItems() {
  const { data: numCartItems, isLoading } = useQuery({
    queryKey: ["numCartItems"],
    queryFn: getNumCartItems,
  });
  return { numCartItems, isLoading };
}

export default useNumCartItems;
