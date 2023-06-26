import { useState } from "react";

const data = [
  {
    img: "https://fakeimg.pl/700x700/",
    name: "Malaika",
    role: "Founder",
  },
  {
    img: "https://fakeimg.pl/800x800/",
    name: "John Granna",
    role: "Co-Founder",
  },
  {
    img: "https://fakeimg.pl/900x900/",
    name: "Sophia Queen",
    role: "CEO",
  },
  {
    img: "https://fakeimg.pl/1000x1000/",
    name: "Mr. Jack",
    role: "CMO",
  },
];

function AboutTeam() {
  const [member, setMember] = useState(0);
  return (
    <section className="mx-auto mb-24 max-w-3xl">
      <h2 className="mb-8 text-center text-xl font-bold sm:text-4xl">
        Hear From The Team
      </h2>
      <div className="team-border-sm mx-auto grid max-w-[400px] gap-5 sm:gap-16 md:max-w-none md:grid-cols-2">
        <div className="my-border"></div>
        <div className="mb:col-start-2">
          <p className="text-start text-md">
            I started Universal Crypto World to solve the problems of the
            investors, as I myself was finding a lot of noise revolving around
            the crypto space which was a fuss. So, I with a few of my friends
            started Metamoonshots to eliminate all the fuss and scams which were
            running to protect the investors and collaborate with new and
            upcoming evolutionary projects.”.
          </p>
        </div>
        <div className="team-border-md grid grid-cols-4 gap-5 md:col-start-1 md:row-start-1 md:grid-cols-5">
          <div className="relative col-span-3 overflow-hidden rounded-lg md:col-span-4">
            <img
              src={data[member].img}
              alt=""
              className="h-full object-cover"
            />
            <div className="absolute bottom-8 left-1/2 w-max -translate-x-1/2">
              <p className="text-lg font-bold">{data[member].name}</p>
              <p className="text-sm">{data[member].role}</p>
            </div>
          </div>
          <div className="-mb-[5px] space-y-2 md:mb-0 md:grid md:place-content-between">
            {data.map((data, index) => (
              <button
                key={index}
                className="overflow-hidden rounded-sm"
                onClick={() => setMember(index)}
              >
                <img src={data.img} alt="h-16 w-16" className="" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
