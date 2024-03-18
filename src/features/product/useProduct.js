import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";

function useProduct(colorCode) {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const color = colorCode || searchParams.get("color");

  const {
    data: product,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["product", id, color],
    queryFn: () => getProduct(id, color),
  });

  return { product, isLoading, error, refetch };
}

export default useProduct;
