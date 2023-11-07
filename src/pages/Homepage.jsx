import Hero from "../features/homepage/Hero";
import Celebration from "../features/homepage/Celebration";
import Carousel from "../features/homepage/Carousel";
import CarouselLarge from "../features/homepage/CarouselLarge";

function Homepage() {
  return (
    <div>
      <Hero />
      <Celebration />
      <Carousel />
      <CarouselLarge />
    </div>
  );
}

export default Homepage;
