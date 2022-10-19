import { useState } from "react";
import { Icon } from "@iconify/react";

const Question = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <details class="rounded-lg border-2 border-gray-100 dark:border-gray-700">
        <summary
          class="flex w-full cursor-pointer items-center justify-between gap-2 p-8 font-semibold text-gray-700 dark:text-white"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {props.question}
          <span
            class={`rounded-full p-0.5 ${
              isOpen ? "bg-gray-200 text-gray-400" : "bg-blue-500 text-white"
            } `}
          >
            {!isOpen ? (
              <Icon className="h-5 w-5" icon="akar-icons:plus" />
            ) : (
              <Icon className="h-5 w-5" icon="akar-icons:minus" />
            )}
          </span>
        </summary>
        <hr class="border-gray-200 dark:border-gray-700" />

        {props.answer}
      </details>
    </>
  );
};

const Faq = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container mx-auto max-w-4xl px-6 py-10">
          <h1 class="text-center text-4xl font-semibold text-gray-800 dark:text-white">
            Frequently asked questions
          </h1>

          <div class="mt-12 space-y-8">
            <Question
              question="AMA"
              answer={
                <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
                  AMA also known as Ask Me Anything sessions increase awareness
                  of products of projects.
                  <br />
                  <br />
                  Universal Crypto World do arrange AMA sessions to introduce
                  various projects with our community and increase the bond
                  between Community & Projects leadership with some juicy
                  Community Rewards.
                </p>
              }
            />
            <Question
              question="Twitter Promotion"
              answer={
                <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
                  Twitter is the hub of Crypto and promotions there are
                  mandatory for projects to boost their progress.
                  <br />
                  <br />
                  Universal Crypto World has a sufficient amount of followers
                  including investors, influencers, and projects who have done
                  AMA sessions with us following those announcements which we do
                  via Twitter promotions. Reach out to us because stats and hard
                  work speak for itself
                </p>
              }
            />
            <Question
              question="Telegram Promotions"
              answer={
                <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
                  Telegram promotions are done in a systematic way to cover good
                  audiences. We do pin Project's informative posts in our
                  telegram community with thousands of viewers who join the
                  project’s telegram and engage there.
                  <br />
                  <br />
                  Community engagement is the key factor in any project and
                  we're here to assist serious projects professionally.
                </p>
              }
            />
            <Question
              question="How do you run AMA?"
              answer={
                <p class="p-8 text-sm  text-gray-500 dark:text-gray-300">
                  AMA contains three segments
                  <br />
                  1st segment: 5 questions from Host questions <br />
                  2nd segment: 5 questions from the Twitter community <br />
                  3rd segment: 5 questions from the Telegram community <br />
                  <br />
                  We will make announcements of AMA and pin on telegram and also
                  announce on Twitter. People will submit their questions
                  related to the project on Twitter then we will choose the 5
                  best questions.
                  <br />
                  In the last segment, we will open the group for 2 minutes so
                  that telegram members can ask their questions then the guest
                  will pick 5 best questions to give their answers
                </p>
              }
            />
            <Question
              question="How AMA could be helpful for your project?"
              answer={
                <p className="p-8 text-sm  text-gray-500 dark:text-gray-300">
                  AMA will help your project to promote in our telegram and
                  Twitter community and investors will know about your project.
                  <br />
                  Your telegram and Twitter will grow After AMA we will provide
                  you AMA Recap that you can post on your socials
                </p>
              }
            />
            <Question
              question="What is shilling?"
              answer={
                <p className="p-8 text-sm  text-gray-500 dark:text-gray-300">
                  Shillings mean promotions. We have a Professional team of 10
                  shillers who will promote your project in different telegram
                  groups and they will promote it on Twitter. Besides this, our
                  shillers will also do shillings on discord
                </p>
              }
            />
            <Question
              question="Do you promote NFT projects?"
              answer={
                <p className="p-8 text-sm  text-gray-500 dark:text-gray-300">
                  Yes, we do AMA of NFT projects and do shillings on twitter and
                  discord. We can grow discord and telegram community of NFT
                  projects.
                </p>
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
