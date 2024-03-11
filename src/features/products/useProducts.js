import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";
import { useSearchParams } from "react-router-dom";

function useProducts() {
  const [searchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy");
  const filter = searchParams.get("filter");

  console.log({ sortBy, filter });

  const { data, isLoading, error } = useQuery({
    queryKey: ["products", sortBy, filter],
    queryFn: () => getProducts(sortBy, filter),
  });

  if (isLoading) return { isLoading };

  const { products, numProducts } = data;
  return { products, numProducts, isLoading, error };
}

export default useProducts;
