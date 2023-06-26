function Stat({ name, number }) {
  return (
    <div className="w-fit">
      <h3 className="font-medium sm:mb-1 sm:text-2xl">{number}</h3>
      <p className="mx-auto max-w-[13ch] text-xs sm:text-base">{name}</p>
    </div>
  );
}

function Stats() {
  return (
    <section className="mb-24 sm:mb-32 lg:mx-auto lg:flex lg:max-w-5xl lg:items-center lg:justify-between">
      <div className="mx-auto mb-8 max-w-[52ch] lg:mx-0 lg:mb-0">
        <h2 className="mb-5 text-xl font-bold sm:text-3xl">
          Universal Crypto World Stats
        </h2>
        <p className="mb-8 text-sm sm:text-md">
          Our Statistics shows that how many people trust us and choose us as
          their project Promotional Partner
        </p>
        <div className="mx-auto grid w-fit grid-cols-3 gap-2 rounded-lg bg-darkPurple-400 p-3 text-center sm:p-5 lg:mx-0">
          <Stat name="Telegram Subscribers" number="110k+" />
          <Stat name="Twitter Followers" number="50k+" />
          <Stat name="AMA Sessions Done" number="750+" />
        </div>
      </div>
      <div className="">
        <div className="mx-auto grid h-36 w-36 place-content-center rounded-full bg-circle sm:h-72 sm:w-72">
          <img
            src="/logo.png"
            alt=""
            height="500"
            width="500"
            className="h-12 w-12 sm:h-24 sm:w-24"
          />
        </div>
      </div>
    </section>
  );
}

export default Stats;
