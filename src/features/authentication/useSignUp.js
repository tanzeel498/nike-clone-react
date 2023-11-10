import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";

function useSignUp() {
  const {
    mutate: signUp,
    isPending,
    error,
  } = useMutation({
    mutationFn: signUpApi,
  });
  return { signUp, isPending, error };
}

export default useSignUp;
