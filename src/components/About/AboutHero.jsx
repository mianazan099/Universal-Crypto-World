function AboutHero() {
  return (
    <section className="about-bg mb-24 pt-4 text-center lg:pb-24">
      <div className="mx-auto max-w-[62ch]">
        <h1 className="mb-5 text-xl font-bold sm:text-4xl">
          Universal Crypto World
        </h1>
        <p className="mb-8 text-md">
          Universal Crypto World is a top ranked influencer community for crypto
          investors. We feature crypto projects through AMA.
        </p>
        <button className="mb-8 rounded-lg bg-gradientPrimary px-14 py-4 font-bold sm:text-md">
          Join Now
        </button>
        <img
          src="/planet.png"
          alt=""
          height="336"
          width="600"
          className="sm:hidden"
        />
      </div>
    </section>
  );
}

export default AboutHero;
