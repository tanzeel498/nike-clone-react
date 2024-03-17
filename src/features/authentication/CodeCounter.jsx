import { cloneElement, useEffect, useState } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { useEmailAuth } from "../context/EmailAuthContext";
import useCheckUser from "./useCheckUser";
import useForgotPassword from "./useForgotPassword";

function CodeCounter({ children, type = "join" }) {
  const [count, setCount] = useState(30);
  const { email } = useEmailAuth();
  const {
    checkUser,
    isPending: checkUserPending,
    error: checkUserError,
  } = useCheckUser();
  const {
    forgotPassword,
    error: forgotPasswordError,
    isPending: isForgotPasswordPending,
  } = useForgotPassword();

  function handleClick(e) {
    e?.preventDefault();
    if (type === "join") {
      checkUser(email, {
        onSuccess: () => setCount(30),
      });
    } else if (type === "forgotPassword") {
      forgotPassword(email, {
        onSuccess: () => setCount(30),
      });
    }
  }

  useEffect(
    function () {
      let timer;
      if (count >= 0) {
        timer = setInterval(() => {
          setCount((c) => c - 1);
        }, 1000);
      }
      return () => clearInterval(timer);
    },
    [count],
  );

  const isPending = checkUserPending || isForgotPasswordPending;
  return (
    <div className="relative">
      {cloneElement(children, {
        children: (
          <button
            disabled={count >= 0 || isPending}
            className="mr-3 text-xl duration-300 ease-out enabled:rotate-[360deg] disabled:opacity-40"
            onClick={handleClick}
          >
            <FiRefreshCw />
          </button>
        ),
      })}
      {checkUserError ||
        (forgotPasswordError && (
          <span className="absolute -bottom-5 left-3 right-3 text-right text-xs font-semibold text-red-600">
            Resending code Failed!
          </span>
        ))}
      {count >= 0 && (!checkUserError || !forgotPasswordError) && (
        <span className="absolute -bottom-5 left-3 right-3 text-right text-xs font-semibold text-stone-500">
          Resend code in {count}s
        </span>
      )}
    </div>
  );
}

export default CodeCounter;
