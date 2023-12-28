import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";

function useProduct() {
  const { id: productId } = useParams();
  const [searchParams] = useSearchParams();
  const color = searchParams.get("color");

  const {
    data: product,
    isLoading,
    error,
  } = useQuery({
    queryKey: [`products/${productId}?color=${color}`],
    queryFn: () => getProduct(productId, color),
  });

  return { product, isLoading, error };
}

export default useProduct;
