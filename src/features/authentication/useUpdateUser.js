import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";

function useUpdateUser() {
  const queryClient = useQueryClient();

  const {
    mutate: updateUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
    },
  });

  return { updateUser, isPending, error };
}

export default useUpdateUser;
