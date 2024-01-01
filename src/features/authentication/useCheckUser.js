import { useMutation } from "@tanstack/react-query";
import { checkUser as checkUserApi } from "../../services/apiAuth";

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
