import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useUser from "../features/authentication/useUser";

function UnProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, user } = useUser();

  //if authenticated user, redirect to /account
  useEffect(
    function () {
      if (user && !isLoading) navigate("/account", { replace: true });
    },
    [navigate, user, isLoading],
  );

  if (isLoading)
    return (
      <div className="flex h-96 items-center justify-center">
        <Spinner />
      </div>
    );

  if (!user) return children;
}

export default UnProtectedRoute;
