import { useState } from "react";

function Faq() {
  return (
    <section className="mb-24 text-center">
      <h2 className="mb-8 text-xl font-bold sm:text-3xl">
        Frequently asked questions
      </h2>
      <div className="mx-auto max-w-3xl space-y-3 sm:space-y-5">
        <Item title="AMA">
          AMA also known as Ask Me Anything sessions increase awareness of
          products of projects.
          <br />
          <br />
          Universal Crypto World do arrange AMA sessions to introduce various
          projects with our community and increase the bond between Community &
          Projects leadership with some juicy Community Rewards.
        </Item>
        <Item title="Twitter Promotion">
          Twitter is the hub of Crypto and promotions there are mandatory for
          projects to boost their progress.
          <br />
          <br />
          Universal Crypto World has a sufficient amount of followers including
          investors, influencers, and projects who have done AMA sessions with
          us following those announcements which we do via Twitter promotions.
          Reach out to us because stats and hard work speak for itself
        </Item>
        <Item title="Telegram Promotions">
          Telegram promotions are done in a systematic way to cover good
          audiences. We do pin Project's informative posts in our telegram
          community with thousands of viewers who join the project's telegram
          and engage there.
          <br />
          <br />
          Community engagement is the key factor in any project and we're here
          to assist serious projects professionally.
        </Item>
        <Item title="How do you run AMA?">
          AMA contains three segments
          <br />
          1st segment: 5 questions from Host questions
          <br />
          2nd segment: 5 questions from the Twitter community
          <br />
          3rd segment: 5 questions from the Telegram community
          <br />
          <br />
          We will make announcements of AMA and pin on telegram and also
          announce on Twitter. People will submit their questions related to the
          project on Twitter then we will choose the 5 best questions.
          <br />
          In the last segment, we will open the group for 2 minutes so that
          telegram members can ask their questions then the guest will pick 5
          best questions to give their answers
        </Item>
        <Item title="How AMA could be helpful for your project?">
          AMA will help your project to promote in our telegram and Twitter
          community and investors will know about your project.Your telegram and
          Twitter will grow After AMA we will provide you AMA Recap that you can
          post on your socials
        </Item>
        <Item title="What is shilling?">
          Shillings mean promotions. We have a Professional team of 10 shillers
          who will promote your project in different telegram groups and they
          will promote it on Twitter. Besides this, our shillers will also do
          shillings on discord
        </Item>
        <Item title="Do you promote NFT projects?">
          Yes, we do AMA of NFT projects and do shillings on twitter and
          discord. We can grow discord and telegram community of NFT projects.
        </Item>
      </div>
    </section>
  );
}

export default Faq;

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-lg bg-darkPurple-400">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex w-full items-center justify-between gap-2 px-8 py-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-start font-bold sm:text-md">{title}</p>
        <div>
          <svg
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180 transform" : ""
            }`}
          >
            <path
              d="M10 9.95L0 0H20L10 9.95Z"
              fill="url(#paint0_linear_21_3)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_21_3"
                x1="10"
                y1="0"
                x2="10"
                y2="9.95"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F3782C" />
                <stop offset="0.692708" stopColor="#C8286A" />
                <stop offset="1" stopColor="#832D70" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="rounded-b-lg bg-[hsla(267,14%,25%,1)] px-8 py-5 text-start sm:py-8">
          <p className="text-sm sm:text-md">{children}</p>
        </div>
      )}
    </div>
  );
};
