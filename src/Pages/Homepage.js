import Nav from "../Component/Nav";
import Hero from "../Component/Hero";
import Specials from "../Component/Specials";
import Testimonials from "../Component/Testimonials";
import About from "../Component/About";
import Footer from "../Component/Footer";

function Homepage() {
  return (
    <>
      <Nav />
      <Hero />
      <Specials />
      <Testimonials />
      <About />
      <Footer />
    </>
  );
}

export default Homepage;
