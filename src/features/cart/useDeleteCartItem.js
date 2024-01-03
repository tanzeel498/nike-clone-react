import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCartItem as deleteCartItemApi } from "../../services/apiCarts";

function useDeleteCartItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteCartItem, isPending } = useMutation({
    mutationFn: deleteCartItemApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["cart"]);
    },
  });
  return { deleteCartItem, isPending };
}

export default useDeleteCartItem;
