function HomeHero() {
  return (
    <section className="mb-8 lg:grid lg:grid-cols-2 lg:items-center lg:gap-5">
      <div className="mb-12 lg:mb-0">
        <h1 className="mb-5 text-xl font-bold sm:mx-auto sm:max-w-[22ch] sm:text-4xl lg:mx-0">
          Universal Crypto World #1 Community To Join
        </h1>
        <p className="mb-8 sm:text-md">
          With Awesome Services. That can help your Project Grow.
        </p>
        <a href="#">
          <button className="rounded-lg bg-gradientPrimary px-8 py-4 font-bold sm:text-md">
            Join Community
          </button>
        </a>
      </div>
      <img className="mx-auto" src="/hero-img.png" alt="" />
    </section>
  );
}

export default HomeHero;
