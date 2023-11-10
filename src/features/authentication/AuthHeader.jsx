import Logo from "../../ui/Logo";
import LogoJordan from "../../ui/LogoJordan";

function AuthHeader() {
  return (
    <header className="my-4 flex items-center gap-4">
      <div className="scale-75">
        <Logo />
      </div>
      <div className="scale-150">
        <LogoJordan />
      </div>
    </header>
  );
}

export default AuthHeader;
