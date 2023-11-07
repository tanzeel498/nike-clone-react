import { Link } from "react-router-dom";

function LogoJordan() {
  return (
    <Link to="https://www.nike.com/jordan">
      <img className={`w-6 hover:opacity-60`} src="/jordan.svg" alt="jordan" />
    </Link>
  );
}

export default LogoJordan;
