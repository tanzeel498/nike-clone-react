import { useQuery } from "@tanstack/react-query";
import { getNumCartItems } from "../../services/apiCart";

function useNumCartItems() {
  const {
    data: numCartItems,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["numCartItems"],
    queryFn: getNumCartItems,
  });
  return { numCartItems, isLoading, error };
}

export default useNumCartItems;
