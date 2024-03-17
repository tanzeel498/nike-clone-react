import { useMutation } from "@tanstack/react-query";
import { forgotPassword as forgotPasswordApi } from "../../services/apiAuth";

function useForgotPassword() {
  const {
    mutate: forgotPassword,
    isPending,
    error,
  } = useMutation({
    mutationFn: forgotPasswordApi,
  });

  return { forgotPassword, isPending, error };
}

export default useForgotPassword;
