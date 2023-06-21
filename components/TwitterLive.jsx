"use client";

import { TwitterTimelineEmbed } from "react-twitter-embed";

function TwitterLive() {
  return (
    <section className="mb-24 lg:mx-auto lg:flex lg:w-fit lg:items-center lg:gap-5">
      <div className="mb-8 lg:mb-0">
        <p className="mb-5 text-center text-md font-bold">Twitter Live</p>
        <div className="mx-auto w-full max-w-fit">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="UniCrypto_World"
            options={{ height: 420, width: 500 }}
            theme="dark"
          />
        </div>
      </div>
      <div className="mx-auto max-w-[544px]">
        <h2 className="mb-5 text-xl font-bold leading-8 sm:text-4xl sm:leading-[52.5px]">
          Be Part of Something Massive
        </h2>
        <p className="mb-8 text-sm sm:text-md">
          Universal Crypto World is a place for crypto enthusiasts wherein you
          get hold of the latest crypto project through our AMAs.
          <br />
          <br />
          Universal Crypto World has crypto enthusiasts who assist each other in
          the community and you also get a chance to witness the latest crypto
          projects through our AMA sessions.
        </p>
        <button className="rounded-lg bg-gradientOne px-8 py-4 font-bold sm:text-md">
          Join Telegram Channel
        </button>
      </div>
    </section>
  );
}

export default TwitterLive;
