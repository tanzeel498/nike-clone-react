import { useQuery } from "@tanstack/react-query";
import { getSearchProducts } from "../../services/apiProducts";

function useSearchProducts(q) {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["products", q],
    queryFn: () => getSearchProducts(q),
  });

  return { products, isLoading, error };
}

export default useSearchProducts;
