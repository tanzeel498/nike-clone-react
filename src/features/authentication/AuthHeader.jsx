import Logo from "../../ui/Logo";

function AuthHeader() {
  return (
    <header className="my-4 flex items-center gap-4">
      <div className="scale-75">
        <Logo />
      </div>
    </header>
  );
}

export default AuthHeader;
