import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mobile:py-8 bg-neutral-800 py-16 text-center text-xs font-light text-neutral-300">
      <div className="mobile:mb-10 mb-16 flex justify-center gap-5">
        <Link>
          <span>Your Privacy Choices</span>
          <img className="ml-2 inline w-10" src="opt-out.svg" alt="opt-out" />
        </Link>
        |<Link>Privacy Policy</Link>|<Link>Terms and Conditions</Link>
      </div>
      <span>&copy; {new Date().getFullYear()} adidas America, Inc.</span>
    </footer>
  );
}

export default Footer;
