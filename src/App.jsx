import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Page/Home";
import AboutUs from "./Page/AboutUs";
import AMAReview from "./Page/AMAReview";
import Partners from "./Page/Partners";
import SuccessStories from "./Page/SuccessStories";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/ama-review">AMA Review</Link>
        <Link to="/partners">Partners</Link>
        <Link to="/success-stories">Success Stories</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/ama-review" element={<AMAReview />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/success-stories" element={<SuccessStories />} />
      </Routes>
    </>
  );
}

export default App;
