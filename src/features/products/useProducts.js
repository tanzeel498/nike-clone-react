import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

function useProducts() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "featured";
  const filter = {};
  for (const [key, value] of searchParams.entries()) {
    if (key !== "sortBy" && value) filter[key] = value;
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", sortBy, filter],
    queryFn: () => getProducts(sortBy, filter),
  });

  if (isLoading) return { isLoading };

  const { products, numProducts } = data || {};
  return { products, numProducts, isLoading, error };
}

export default useProducts;
