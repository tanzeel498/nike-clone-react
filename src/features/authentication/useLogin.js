import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginApi,
    onSuccess: (user) => {
      const {token, userData} = user;
      queryClient.setQueryData(["user"], userData);
      localStorage.setItem("token", token);
      navigate("/");
    },
  });
  return { login, isPending, error };
}
