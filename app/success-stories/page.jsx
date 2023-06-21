"use client";
import Header from "@/components/Header";
import SuccessHero from "@/components/SuccessHero";
import FeatureProject from "@/components/FeatureProject";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`h-[100vmin] ${open ? "overflow-hidden" : ""}`}>
      <Header open={open} setOpen={setOpen} />
      <SuccessHero />
      <FeatureProject />
      <Testimonial />
      <Footer />
    </div>
  );
}
