import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import AMAReview from "./Page/AMAReview";
import Partners from "./Page/Partners";
import SuccessStories from "./Page/SuccessStories";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`h-[100vmin] ${open ? "overflow-hidden" : ""}`}>
      <Header open={open} setOpen={setOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ama-review" element={<AMAReview />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/success-stories" element={<SuccessStories />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
