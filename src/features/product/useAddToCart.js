import { useMutation } from "@tanstack/react-query";
import { addToCart as addToCartApi } from "../../services/apiProducts";
import { useNavigate } from "react-router-dom";

function useAddToCart() {
  const navigate = useNavigate();

  const { mutate: addToCart, isPending } = useMutation({
    mutationFn: addToCartApi,
    onSuccess: () => {
      navigate("/cart");
    },
  });

  return { addToCart, isPending };
}

export default useAddToCart;
