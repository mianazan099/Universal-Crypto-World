import Hero from "../components/Hero";
import FeatureProject from "../components/Success/FeatureProject";
import Testimonial from "../components/Testimonial";

function SuccessStories() {
  return (
    <>
      <Hero
        heading="Success Stories"
        subHeading="We list some of the most innovative and upcoming crypto projects here are a few:"
      />
      <FeatureProject />
      <Testimonial />
    </>
  );
}

export default SuccessStories;
