import { useEffect } from "react";

import HomeHero from "../components/Home/HomeHero";
import TwitterLive from "../components/Home/TwitterLive";
import AMA from "../components/Home/AMA";
import Stats from "../components/Home/Stats";
import CTA from "../components/Home/CTA";
import Faq from "../components/Home/Faq";

import Team from "../components/Team";
import Testimonial from "../components/Testimonial";

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <HomeHero />
      <TwitterLive />
      <AMA />
      <Stats />
      <CTA />
      <Team />
      <Testimonial />
      <Faq />
    </>
  );
}

export default Home;
