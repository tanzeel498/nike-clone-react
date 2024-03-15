import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="sticky top-[100vh] bg-neutral-800 py-16 text-center text-xs font-light text-neutral-300 mobile:py-8">
      <div className="mb-16 flex justify-center gap-5 mobile:mb-10">
        <Link>
          <span>Your Privacy Choices</span>
          <img className="ml-2 inline w-10" src="/opt-out.svg" alt="opt-out" />
        </Link>
        |<Link>Privacy Policy</Link>|<Link>Terms and Conditions</Link>
      </div>
      <span>&copy; {new Date().getFullYear()} Duzz Nike, Inc.</span>
    </footer>
  );
}

export default Footer;
