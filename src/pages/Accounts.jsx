import { Outlet } from "react-router-dom";
import AuthHeader from "../features/user/AuthHeader";
function Accounts() {
  return (
    <div className="mx-auto w-[460px]">
      <AuthHeader />
      <Outlet />
    </div>
  );
}

export default Accounts;
