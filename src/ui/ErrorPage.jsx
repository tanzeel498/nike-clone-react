import Header from "./Header";
import Footer from "../features/homepage/Footer";
import Button from "./Button";
import { useNavigate, useRouteError } from "react-router-dom";
import Message from "./Message";

function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  function handleRedirect() {
    navigate("/", { replace: true });
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex w-full grow flex-col items-center justify-center gap-4">
        <h1>Oops!</h1>
        <Message type="error">Sorry, an unexpected error has occurred.</Message>
        <p>
          <i>{error.message || error.statusText}</i>
        </p>
        <Button onClick={handleRedirect}>Home</Button>
      </div>
      <Footer />
    </div>
  );
}

export default ErrorPage;
