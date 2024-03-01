import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

function useCart() {
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });
  return { cart, isLoading };
}

export default useCart;
