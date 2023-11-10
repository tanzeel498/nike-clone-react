import { useMutation } from "@tanstack/react-query";
import { verifyOtp as verifyOtpApi } from "../../services/apiAuth";

function useVerifyOtp() {
  const {
    mutate: verifyOtp,
    isPending,
    error,
  } = useMutation({
    mutationFn: verifyOtpApi,
  });
  return { verifyOtp, isPending, error };
}

export default useVerifyOtp;
