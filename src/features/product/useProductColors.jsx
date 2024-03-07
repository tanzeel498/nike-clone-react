import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductColors } from "../../services/apiProducts";

function useProductColors() {
  const { id } = useParams();
  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductColors(id),
  });

  return { product, isLoading };
}

export default useProductColors;
