import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function Celebration() {
  return (
    <section className="mx-6 mb-16 mobile:mx-0">
      <figure>
        <div className="mb-12">
          <Link to="/products">
            <img
              src="images/hero2.webp"
              className="hidden h-full min-h-[300px] w-full object-cover mobile:block"
              alt="hero"
            />
            <img
              src="images/hero2-mobile.webp"
              className="max-w-full object-cover mobile:hidden"
              alt="hero"
            />
          </Link>
        </div>

        <figcaption className="mobile:text-center">
          <h1 className="leading-10 tracking-tighter mobile:leading-none">
            welcome <br className="mobile:hidden" /> to the
            <br />
            celebration
          </h1>
          <p className="py-8 font-medium">
            This week, Members get access to exclusive styles, 20% off & more.
            <br />
            To stay up-to-date on it all, make sure you have the Nike App.
          </p>
          <div className="flex justify-center gap-1">
            <Button to="/products">Shop the Collection</Button>
            <Button to="/products">Explore the Calender</Button>
            <Button to="/products">Download the Nike App</Button>
          </div>
        </figcaption>
      </figure>
    </section>
  );
}

export default Celebration;
