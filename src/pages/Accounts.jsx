import { Outlet } from "react-router-dom";
import AuthHeader from "../features/authentication/AuthHeader";
import { EmailProviderAuth } from "../features/context/EmailContextAuth";
function Accounts() {
  return (
    <div className="mx-auto w-[460px]">
      <AuthHeader />
      <EmailProviderAuth>
        <Outlet />
      </EmailProviderAuth>
    </div>
  );
}

export default Accounts;
