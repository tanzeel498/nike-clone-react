import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateAddress as updateAddressApi } from "../../services/apiAddress";

function useAddAddress() {
  const queryClient = useQueryClient();

  const { mutate: updateAddress, isPending } = useMutation({
    mutationFn: updateAddressApi,
    onSuccess: (address) => {
      queryClient.setQueryData(["address"], address);
    },
  });
  return { updateAddress, isPending };
}

export default useAddAddress;
