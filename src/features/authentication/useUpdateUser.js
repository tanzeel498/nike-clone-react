import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

function useUpdateUser() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: updateUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: ({ user }) => {
      queryClient.setQueryData(["user"], user);
      navigate("/");
    },
  });

  return { updateUser, isPending, error };
}

export default useUpdateUser;
