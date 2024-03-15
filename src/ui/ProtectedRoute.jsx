import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Spinner from "./Spinner";
import useUser from "../features/authentication/useUser";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoading, user } = useUser();

  //if No authenticated user, redirect to /account/join
  useEffect(
    function () {
      if (!user && !isLoading) navigate("/tunnel", { replace: true });
    },
    [navigate, user, isLoading],
  );

  if (isLoading)
    return (
      <div className="flex h-96 items-center justify-center">
        <Spinner />
      </div>
    );

  if (user) return children;
}

export default ProtectedRoute;
