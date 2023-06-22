"use client";
import Header from "@/components/Header";
import PartnersHero from "@/components/PartnersHero";
import OurPartners from "@/components/OurPartners";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`h-[100vmin] ${open ? "overflow-hidden" : ""}`}>
      <Header open={open} setOpen={setOpen} />
      <PartnersHero />
      <OurPartners />
      <Footer />
    </div>
  );
}
