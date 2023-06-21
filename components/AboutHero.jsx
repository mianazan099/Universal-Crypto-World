import Image from "next/image";

function AboutHero() {
  return (
    <section>
      <h1 className="text-h2 mb-5">Universal Crypto World</h1>
      <p className="mb-8 text-md leading-[22.5px]">
        Universal Crypto World is a top ranked influencer community for crypto
        investors. We feature crypto projects through AMA.
      </p>
      <button className="mb-8 rounded-lg bg-gradientOne px-14 py-4 font-bold">
        Join Now
      </button>
      <Image src="/hero.png" />
    </section>
  );
}

export default AboutHero;
