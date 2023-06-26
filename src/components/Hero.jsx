function Hero({ heading, subHeading }) {
  return (
    <section className="mb-24 text-center">
      <h1 className="mb-5 text-xl font-bold sm:text-4xl">{heading}</h1>
      <p className="mx-auto mb-8 max-w-[48ch] text-md">{subHeading}</p>
      <button className="rounded-lg bg-gradientPrimary px-14 py-4 font-bold sm:text-md">
        Join Now
      </button>
    </section>
  );
}

export default Hero;
