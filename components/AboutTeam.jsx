import Image from "next/image";

function AboutTeam() {
  return (
    <section className="mx-auto mb-24 max-w-3xl">
      <h2 className="text-h2 mb-8 text-center">Hear From The Team</h2>
      <div className="flex flex-col gap-5 sm:flex-row-reverse sm:gap-16">
        <div className="flex-1">
          <p className="text-start text-md leading-[22.5px]">
            I started Universal Crypto World to solve the problems of the
            investors, as I myself was finding a lot of noise revolving around
            the crypto space which was a fuss. So, I with a few of my friends
            started Metamoonshots to eliminate all the fuss and scams which were
            running to protect the investors and collaborate with new and
            upcoming evolutionary projects.”.
          </p>
        </div>
        <div className="big-border flex flex-1 justify-between gap-5">
          <div className="h-[264px] w-full rounded-lg bg-dark-two"></div>
          <div className="flex flex-col justify-between">
            <div className="h-[60px] w-16 rounded-lg bg-dark-two"></div>
            <div className="h-[60px] w-16 rounded-lg bg-dark-two"></div>
            <div className="h-[60px] w-16 rounded-lg bg-dark-two"></div>
            <div className="h-[60px] w-16 rounded-lg bg-dark-two"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
