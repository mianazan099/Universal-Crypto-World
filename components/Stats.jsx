import Image from "next/image";

function Stats() {
  return (
    <section className="mb-24 lg:mx-auto lg:flex lg:max-w-5xl lg:items-center lg:justify-between">
      <div className="mb-8 sm:mx-auto sm:max-w-[544px] lg:mx-0 lg:mb-0">
        <h2 className="mb-5 text-xl font-bold leading-8 sm:text-3xl sm:leading-[45px]">
          Universal Crypto World Stats
        </h2>
        <p className="mb-8 text-sm sm:text-md">
          Our Statistics shows that how many people trust us and choose us as
          their project Promotional Partner
        </p>
        <div className="mx-auto flex w-full max-w-[300px] gap-2 rounded-lg bg-dark-two p-3 text-center sm:max-w-[77.5%] sm:p-5 lg:mx-0">
          <div className="flex-1">
            <h3 className="font-medium sm:mb-1 sm:text-2xl sm:leading-9">
              110k+
            </h3>
            <p className="text-xs sm:text-base sm:leading-[18px]">
              Telegram Subscribers
            </p>
          </div>
          <div className="flex-1">
            <h3 className="font-medium sm:mb-1 sm:text-2xl sm:leading-9">
              50k+
            </h3>
            <p className="text-xs sm:text-base sm:leading-[18px]">
              Twitter Followers
            </p>
          </div>
          <div className="flex-1">
            <h3 className="font-medium sm:mb-1 sm:text-2xl sm:leading-9">
              750+
            </h3>
            <p className="text-xs sm:text-base sm:leading-[18px]">
              AMA Sessions Done
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mx-auto grid h-36 w-36 place-content-center rounded-full bg-[radial-gradient(#1c1328_40%,transparent_41%),conic-gradient(#f3782c_0_27.5%,#832d70_27.5%_50%,#c8286a_50%_65%,_#1e5492_60%_100%)] sm:h-72 sm:w-72">
          <Image
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
