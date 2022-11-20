import { Icon } from "@iconify/react";

const Service = ({ draft, icon, name, text }) => {
  return (
    <div className="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
      <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
        <Icon icon={icon} width="24px" height="24px" />
      </span>
      <h1 className="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
        {name}
      </h1>
      <p className="text-gray-500 dark:text-gray-300">{text}</p>
      <button
        disabled={draft}
        className="disabled: rounded-lg bg-blue-600 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-gray-600 disabled:hover:bg-gray-600 lg:mt-0 lg:w-auto"
      >
        {draft ? "Coming soon" : "Contact Us"}
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
            our Services.
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
            <Service
              name="Hosting AMA Session"
              text="Crypto AMA is a session where crypto enthusiasts meet to discuss the latest crypto projects in a live session or a pre-planned AMA session."
              icon="heroicons-outline:speakerphone"
              draft={false}
            />
            <Service
              name="Live Webinar"
              text="We can arrange live webinar with our Subscriber for your project you can do it in both telegram community members or Twitter community members."
              icon="fluent:live-24-filled"
              draft={false}
            />
            <Service
              name="Airdrop and Giveaway Promotions"
              text="We can help you to build your  project audience by doing giveaway tasks and we can help you to promote your Airdrop."
              icon="game-icons:water-drop"
              draft={false}
            />
            <Service
              name="Launch Pad Listing"
              text="Get your token listed on top centralized exchanges. Boost the trading volume, the number of holders, and the project's exposure. Also, we are good friends with many Launchpads and invested in many of them. Getting in touch is not a problem."
              icon="fa-solid:clipboard-list"
              draft={false}
            />
            <Service
              name="Telegram, Twitter, Discord Manager"
              text="We provide you best telegram and discord community managers, if you are looking for a manager who has more than 2 years of experience, contact below"
              icon="fluent-mdl2:functional-manager-dashboard"
              draft={false}
            />
            <Service
              name="CMC Listing"
              text="We will help you to list your token in CMC ( CoinMarketCap), for more details about it please contact our community admin"
              icon="fa6-solid:clipboard-list"
              draft={false}
            />
            <Service
              name="Telegram Bot Development"
              text="Our experts can make telegram bots, We can make your project official bot, Airdrop bot, etc All."
              icon="bx:bot"
              draft={false}
            />
            <Service
              name="YouTube Promotion"
              text="We currently Have 9 YouTube Channels. Detailed Project Introduction Video on active YT Channel by our Influencers."
              icon="mdi:youtube"
              draft={false}
            />
            {/* <Service
              name="Crypto Website Development"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="gg:website"
              draft={true}
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
