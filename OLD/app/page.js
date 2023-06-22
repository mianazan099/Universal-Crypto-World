"use client";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TwitterLive from "../components/TwitterLive";
import AMA from "../components/AMA";
import Stats from "../components/Stats";
import CTA from "../components/CTA";
import Team from "../components/Team";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`h-[100vmin] ${open ? "overflow-hidden" : ""}`}>
      <Header open={open} setOpen={setOpen} />
      <Hero />
      <TwitterLive />
      <AMA />
      <Stats />
      <CTA />
      <Team />
      <Testimonial />
      <Faq />
      <Footer />
    </div>
  );
}
