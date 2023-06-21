"use client";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import Solutions from "@/components/Solutions";
import AboutTeam from "@/components/AboutTeam";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`h-[100vmin] ${open ? "overflow-hidden" : ""}`}>
      <Header open={open} setOpen={setOpen} />
      <AboutHero />
      <Solutions />
      <AboutTeam />
      <Team />
      <Footer />
    </div>
  );
}
