import { Link } from "react-router-dom";
import Button from "../../ui/Button";

function Hero() {
  return (
    <section className="mx-6 mb-12 mobile:mx-0">
      <figure className="relative">
        <Link>
          <img
            src="images/hero1_1.webp"
            className="hidden h-full min-h-[300px] w-full object-cover mobile:block"
            alt="hero"
          />
          <img
            src="images/hero1-mobile.webp"
            className="max-w-full object-cover mobile:hidden"
            alt="hero"
          />
        </Link>
        <figcaption className="left-14 top-[calc(18%)] h-1/3 mobile:absolute">
          <h1 className="hidden tracking-tighter mobile:block mobile:text-[42px] tablet:text-7xl">
            20% off select styles
          </h1>
          <p className="my-8 font-medium">
            <span className="hidden mobile:inline">Members: </span>Sign in and
            use code MEMBER20 to save 20% off
            <br className="hidden mobile:inline" />
            select styles. Exclusions apply.
          </p>
          <Button>Shop Now</Button>
        </figcaption>
      </figure>
    </section>
  );
}

export default Hero;
