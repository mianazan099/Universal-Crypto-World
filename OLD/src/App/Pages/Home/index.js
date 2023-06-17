// import Pricing from "./Pricing";
import Hero from "./Hero";
import Stats from "./Stats";
import Services from "./Services";
import Team from "./Team";
import Testimonial from "./Testimonial";
import Faq from "./Faq";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      {/* <Pricing /> */}
      <Team />
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
