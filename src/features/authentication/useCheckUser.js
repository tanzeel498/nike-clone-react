import { useMutation } from "@tanstack/react-query";
import { checkUser as checkUserApi } from "../../services/apiAuth";

// this hook is used to check if user exists in DB while joining
function useCheckUser() {
  const {
    mutate: checkUser,
    isPending,
    error,
  } = useMutation({
    mutationFn: checkUserApi,
  });
  return { checkUser, isPending, error };
}

export default useCheckUser;
