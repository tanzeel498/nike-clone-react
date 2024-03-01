import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../../services/apiCart";

function useAddToCart() {
  const queryClient = useQueryClient();

  const { mutate: addToCart, isPending } = useMutation({
    mutationFn: addToCartApi,
    onSuccess: () => queryClient.invalidateQueries(["user"]),
  });

  return { addToCart, isPending };
}

export default useAddToCart;
