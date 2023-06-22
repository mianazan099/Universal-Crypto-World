import Image from "next/image";

function Team() {
  return (
    <section className="mx-auto mb-24 max-w-3xl text-center">
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-bold sm:mb-5 sm:text-3xl sm:leading-[45px]">
          Our Execution Team
        </h2>
        <p className="text-sm sm:text-md sm:leading-[22.5px]">
          All the members of our team are active, cooperative and available 24/7
        </p>
      </div>
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex gap-5 sm:flex-1">
          <Card name="Malaika" role="Founder" />
          <Card name="John Granna" role="Co-Founder" />
        </div>
        <div className="flex gap-5 sm:flex-1">
          <Card name="Sophia Queen" role="CEO" />
          <Card name="Mr. Jack" role="CMO" />
        </div>
      </div>
    </section>
  );
}

const Card = ({ name, role }) => {
  return (
    <div className="flex-1 rounded-lg bg-dark-two px-3 py-5">
      <div className="mb-5 text-center">
        <Image
          src="https://fakeimg.pl/100x100/"
          alt=""
          height="100"
          width="100"
          className="mx-auto mb-2 rounded-full"
        />
        <p className="text-md font-bold sm:text-lg sm:leading-6">{name}</p>
        <span className="text-sm">{role}</span>
      </div>
      <div className="mx-auto flex w-fit gap-5">
        <Image
          src="/telegram-logo.svg"
          alt=""
          height="24"
          width="24"
          className="text-white"
        />
        <Image
          src="/twitter-logo.svg"
          alt=""
          height="24"
          width="24"
          className=""
        />
      </div>
    </div>
  );
};

export default Team;
