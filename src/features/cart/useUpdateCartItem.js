import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem as updateCartItemApi } from "../../services/apiCart";

function useUpdateCartItem() {
  const queryClient = useQueryClient();

  const { mutate: updateCartItem, isPending } = useMutation({
    mutationFn: updateCartItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
  return { updateCartItem, isPending };
}

export default useUpdateCartItem;
