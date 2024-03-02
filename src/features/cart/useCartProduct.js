import { useQuery } from "@tanstack/react-query";
import { getCartProduct } from "../../services/apiCart";

function useCartProduct(id, color) {
  const {
    data: cartProduct,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["cart", id, color],
    queryFn: () => getCartProduct(id, color),
  });

  return { cartProduct, isLoading, error };
}

export default useCartProduct;
