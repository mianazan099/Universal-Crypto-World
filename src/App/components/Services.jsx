import { Icon } from "@iconify/react";

const Service = (props) => {
  return (
    <div class="flex flex-col items-center space-y-3 rounded-xl bg-gray-100 p-6 text-center dark:bg-gray-800">
      <span class="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
        <Icon icon={props.icon} width="24px" height="24px" />
      </span>
      <h1 class="text-2xl font-semibold capitalize text-gray-700 dark:text-white">
        {props.name}
      </h1>
      <p class="text-gray-500 dark:text-gray-300">{props.text}</p>
      <button class="rounded-lg bg-blue-600 px-6 py-2.5 text-center font-medium capitalize leading-5 text-white hover:bg-blue-500 lg:mt-0 lg:w-auto">
        Contact Us
      </button>
    </div>
  );
};

const Services = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
            our Services.
          </h1>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
            <Service
              name="Hosting AMA Session"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="heroicons-outline:speakerphone"
            />
            <Service
              name="Live Webinar"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="fluent:live-24-filled"
            />
            <Service
              name="Airdrop and Giveaway Promotions"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="game-icons:water-drop"
            />
            <Service
              name="Launch Pad Listing"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="fa-solid:clipboard-list"
            />
            <Service
              name="Telegram, Twitter, Discord Manager"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="fluent-mdl2:functional-manager-dashboard"
            />
            <Service
              name="Crypto Website Development"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="gg:website"
            />
            <Service
              name="CMC Listing"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="fa6-solid:clipboard-list"
            />
            <Service
              name="Telegram Bot Development"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet"
              icon="bx:bot"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default Services;
