import Image from "next/image";

function Hero() {
  return (
    <section className="mb-8 lg:flex lg:items-center lg:justify-between lg:gap-5">
      <div className="mb-12 lg:mb-0">
        <h1 className="mb-5 text-xl font-bold leading-8 sm:mx-auto sm:max-w-xl sm:text-4xl sm:leading-[52.5px]">
          Universal Crypto World #1 Community To Join
        </h1>
        <p className="mb-8 leading-6 sm:text-md">
          With Awesome Services. That can help your Project Grow.
        </p>
        <a href="#">
          <button className="rounded-lg bg-gradientOne px-8 py-4 font-bold sm:text-md">
            Join Community
          </button>
        </a>
      </div>
      <Image
        className="mx-auto w-full max-w-sm sm:max-w-lg"
        src="/hero-img.png"
        alt=""
        width="316"
        height="248"
      />
    </section>
  );
}

export default Hero;
