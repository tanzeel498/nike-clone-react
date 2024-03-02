import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem as deleteCartItemApi } from "../../services/apiCart";

function useDeleteCartItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteCartItem, isPending } = useMutation({
    mutationFn: deleteCartItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart", "numCartItems"]);
    },
  });
  return { deleteCartItem, isPending };
}

export default useDeleteCartItem;
