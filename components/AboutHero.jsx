import Image from "next/image";

function AboutHero() {
  return (
    <section className="relative mx-auto mb-8 max-w-xl text-center lg:pb-24 lg:mb-24">
      <h1 className="text-h2 mb-5 lg:pt-4">Universal Crypto World</h1>
      <p className="mb-8 text-md leading-[22.5px]">
        Universal Crypto World is a top ranked influencer community for crypto
        investors. We feature crypto projects through AMA.
      </p>
      <button className="mb-8 rounded-lg bg-gradientOne px-14 py-4 font-bold">
        Join Now
      </button>
      <Image
        src="/planet.png"
        alt=""
        height="336"
        width="600"
        className="sm:absolute sm:left-1/2 sm:top-1/2 sm:-z-10 sm:h-full sm:w-auto sm:-translate-x-1/2 sm:-translate-y-1/2"
      />
    </section>
  );
}

export default AboutHero;
