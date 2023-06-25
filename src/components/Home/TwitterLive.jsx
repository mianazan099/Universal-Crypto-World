function TwitterLive() {
  return (
    <section className="mb-24 grid gap-5 lg:grid-cols-2 lg:items-center lg:gap-14">
      <div className="">
        <p className="rounded-t-md bg-darkPurple-400 py-3 text-center text-md font-bold ring-1 ring-darkPurple-400 sm:py-5">
          Twitter Live
        </p>
        <div className="h-[410px] w-[100%] overflow-y-scroll ring-1 ring-darkPurple-400 sm:h-[460px]">
          <a
            class="twitter-timeline"
            data-theme="dark"
            data-chrome="noheader nofooter noborders"
            href="https://twitter.com/UniCrypto_World?ref_src=twsrc%5Etfw"
          >
            Tweets by UniCrypto_World
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-[62ch] lg:mx-0 lg:ml-auto">
        <h2 className="mb-5 text-xl font-bold sm:text-4xl">
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
        <button className="rounded-lg bg-gradientPrimary px-8 py-4 font-bold sm:text-md">
          Join Telegram Channel
        </button>
      </div>
    </section>
  );
}

export default TwitterLive;
