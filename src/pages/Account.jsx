import { Outlet } from "react-router-dom";
import AuthHeader from "../features/authentication/AuthHeader";
import { EmailAuthProvider } from "../features/context/EmailAuthContext";
function Accounts() {
  return (
    <div className="mx-8 mobile:mx-auto mobile:w-[460px]">
      <AuthHeader />
      <EmailAuthProvider>
        <Outlet />
      </EmailAuthProvider>
    </div>
  );
}

export default Accounts;
