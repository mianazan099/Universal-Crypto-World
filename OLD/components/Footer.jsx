"use client";
import Image from "next/image";
function Footer() {
  return (
    <footer className="pb-20">
      <div className="relative mb-44 text-center sm:mb-20">
        <h2 className="mx-auto mb-10 max-w-[26ch] text-xl font-bold leading-8 sm:text-3xl sm:leading-[45px]">
          Enter your Email & Stay up-to-date with universal crypto world
        </h2>
        <form
          action="https://gmail.us11.list-manage.com/subscribe/post?u=472052a91ef6cbab068acbc25&amp;id=f082e38762&amp;f_id=00beaae0f0"
          method="post"
          target="_blank"
        >
          <div className="mx-auto h-16 max-w-[726px] overflow-hidden rounded-lg bg-dark-two">
            <input
              className="h-full w-full bg-[transparent] px-8 outline-none sm:w-3/4"
              placeholder="Enter your email"
              type="email"
              name="EMAIL"
              required
            />
            <button className="absolute -bottom-20 left-1/2 -translate-x-1/2 rounded-lg bg-gradientOne px-14 py-4 font-bold sm:static sm:h-full sm:w-1/4 sm:-translate-x-0 sm:p-0">
              Subscribe
            </button>
          </div>
          <div
            style={{
              position: "absolute",
              left: "-5000px",
            }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_472052a91ef6cbab068acbc25_f082e38762"
              tabIndex="-1"
            />
          </div>
        </form>
      </div>
      <hr className="mb-8" />
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="mx-auto mb-8 flex w-fit items-center gap-2 lg:mx-0 lg:mb-0">
          <Image src="/logo.png" alt="" width="36" height="36" />
          <p className="text-xl font-bold">Universal Crypto World</p>
        </div>
        <ul className="space-y-5 lg:flex lg:gap-8 lg:space-y-0">
          <li className="text-md font-bold leading-[22.5px]">
            <a href="">Telegram</a>
          </li>
          <li className="text-md font-bold leading-[22.5px]">
            <a href="">Twitter</a>
          </li>
          <li className="text-md font-bold leading-[22.5px]">
            <a href="">Medium</a>
          </li>
          <li className="text-md font-bold leading-[22.5px]">
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
