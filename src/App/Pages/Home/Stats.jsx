import { Icon } from "@iconify/react";

const Stat = (props) => {
  return (
    <div className="w-full p-4 sm:w-1/2 md:w-1/4">
      <div className="rounded-lg border-2 border-gray-200 px-4 py-6">
        {props.icon}
        <h2 className="title-font text-3xl font-medium text-gray-900 dark:text-gray-100">
          {props.number}
        </h2>
        <p className="leading-relaxed">{props.name}</p>
      </div>
    </div>
  );
};

const Stats = () => {
  return (
    <>
      <section className="bg-white text-gray-600 dark:bg-gray-900 dark:text-gray-400">
        <div className="container mx-auto px-5 py-24">
          <div className="mb-12 flex w-full flex-col text-center">
            <h1 className="mb-4 text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
              Universal Crypto World Stats
            </h1>
            <p className="mx-auto text-base leading-relaxed lg:w-2/3">
              Our Statistics shows that how many people trust us and choose us
              as their project Promotional Partner.
            </p>
          </div>
          <div className="-m-4 flex flex-wrap text-center">
            <Stat
              name="Telegram Subscribers"
              number="60K+"
              icon={
                <Icon
                  className="mb-3 inline-block h-12 w-12 text-[#0088cc]"
                  icon="bxl:telegram"
                />
              }
            />
            <Stat
              name="Twitter Followers"
              number="55k+"
              icon={
                <Icon
                  className="mb-3 inline-block h-12 w-12 text-[#00acee]"
                  icon="bxl:twitter"
                />
              }
            />
            <Stat
              name="Our Clients"
              number="1.1k+"
              icon={
                <Icon
                  className="mb-3 inline-block h-12 w-12 text-blue-400"
                  icon="icon-park-solid:peoples"
                />
              }
            />
            <Stat
              name="Total Rewards"
              number="$50k+"
              icon={
                <Icon
                  className="mb-3 inline-block h-12 w-12 text-blue-400"
                  icon="bi:gift-fill"
                />
              }
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Stats;
