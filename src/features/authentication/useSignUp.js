import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signUp as signUpApi } from "../../services/apiAuth";

function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {
    mutate: signUp,
    isPending,
    error,
  } = useMutation({
    mutationFn: signUpApi,
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user);
      navigate("/");
    },
  });
  return { signUp, isPending, error };
}

export default useSignUp;
