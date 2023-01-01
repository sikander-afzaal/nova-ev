import Contact from "./Contact";
import Hero from "./Hero";
import Products from "./Products";
import Questions from "./Questions";
import Service from "./Service";
import Testimonials from "./Testimonials";
import Work from "./Work";

const Landing = () => {
  return (
    <div>
      <Hero />
      <Service />
      <Work />
      <Products />
      <Questions />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Landing;
