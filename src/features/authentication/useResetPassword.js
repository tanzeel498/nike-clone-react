import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";

function useResetPassword() {
  const {
    mutate: resetPassword,
    isPending,
    error,
  } = useMutation({
    mutationFn: resetPasswordApi,
  });

  return { resetPassword, isPending, error };
}

export default useResetPassword;
