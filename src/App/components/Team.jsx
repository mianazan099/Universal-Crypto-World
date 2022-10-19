import { Icon } from "@iconify/react";
import { member1, member2, member3, member4 } from "../../assets";

const Member = (props) => {
  return (
    <div class="group flex transform cursor-pointer flex-col items-center rounded-xl border p-8 transition-colors duration-300 hover:border-transparent hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
      <img
        class="h-32 w-32 rounded-full object-cover ring-4 ring-gray-300"
        src={props.img}
        alt=""
      />
      <h1 class="mt-4 text-2xl font-semibold capitalize text-gray-700 group-hover:text-white dark:text-white">
        {props.name}
      </h1>
      <p class="mt-2 capitalize text-gray-500 group-hover:text-gray-300 dark:text-gray-300">
        {props.role}
      </p>
      <div class="-mx-2 mt-3 flex">
        <a
          href={props.telegram}
          class="mx-2 p-[2px] text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
          aria-label="Telegram"
        >
          <Icon icon="akar-icons:telegram-fill" width="28px" height="28px" />
        </a>
        <a
          href={props.twitter}
          class="mx-2 text-gray-600 hover:text-gray-500 group-hover:text-white dark:text-gray-300 dark:hover:text-gray-300"
          aria-label="Twitter"
        >
          <Icon
            icon="ant-design:twitter-circle-filled"
            width="32px"
            height="32px"
          />
        </a>
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <section class="bg-white dark:bg-gray-900">
        <div class="container mx-auto px-6 py-10">
          <h1 class="text-center text-3xl font-semibold capitalize text-gray-800 dark:text-white lg:text-4xl">
            Our Executive Team
          </h1>
          <p class="mx-auto my-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">
            All the members of our team are active, cooperative and available
            24/7.
          </p>
          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-16 xl:grid-cols-4">
            <Member
              name="Jenny Dooc"
              role="Founder"
              img={member1}
              telegram="https://t.me/Jennydooc"
              twitter="https://twitter.com/Jenny_Dooc_UCW"
            />
            <Member
              name="John granna"
              role="Co-Founder"
              img={member2}
              telegram="https://t.me/kingjohn45"
              twitter="https://twitter.com/John_Granna"
            />
            <Member
              name="Sophia Queen"
              role="CEO"
              img={member3}
              telegram="https://t.me/Sophia_Queen"
              twitter="https://twitter.com/Sophia_QueenUCW"
            />
            <Member
              name="Mr. jack"
              role="CMO"
              img={member4}
              telegram="https://t.me/Mr_Jack8 "
              twitter="https://twitter.com/Mr_Jack_UCW"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
