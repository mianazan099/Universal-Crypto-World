import Hero from "../components/Hero";
import RecommendedAMA from "../components/AMAReview/RecommendedAMA";
import TopAnnouncement from "../components/AMAReview/TopAnnouncement";
import LatestAMAReviews from "../components/AMAReview/LatestAMAReviews";

function AMAReview() {
  return (
    <>
      <Hero
        heading="Universal Crypto World Resources"
        subHeading="Universal Crypto World is a top ranked influencer community for crypto investors. We feature crypto projects through AMA."
      />
      <RecommendedAMA />
      <TopAnnouncement />
      <LatestAMAReviews />
    </>
  );
}

export default AMAReview;
