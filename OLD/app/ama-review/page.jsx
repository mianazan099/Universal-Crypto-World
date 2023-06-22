"use client";
import Header from "@/components/Header";
import AMAHero from "@/components/AMAHero";
import RecommendedAMA from "@/components/RecommendedAMA";
import TopAnnouncement from "@/components/TopAnnouncement";
import LatestAMAReviews from "@/components/LatestAMAReviews";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`h-[100vmin] ${open ? "overflow-hidden" : ""}`}>
      <Header open={open} setOpen={setOpen} />
      <AMAHero />
      <RecommendedAMA />
      <TopAnnouncement />
      <LatestAMAReviews />
      <Footer />
    </div>
  );
}
