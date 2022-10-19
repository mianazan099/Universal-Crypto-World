import { useState } from "react";
import { logo } from "../../assets";
import { Icon } from "@iconify/react";

const NavLink = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="flex transform items-center gap-2 text-gray-700 transition-colors duration-300  hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8"
    >
      {props.icon}
      {props.text}
    </a>
  );
};

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-white dark:bg-gray-900">
        <nav className="container mx-auto p-6 lg:flex lg:items-center lg:justify-between ">
          <div className="flex items-center justify-between">
            <div>
              <a
                className="flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
                href="/"
              >
                <img className="h-10 w-10" src={logo} alt="" />
                <p>Universal Crypto world</p>
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                className="text-gray-500 hover:text-gray-600 focus:text-gray-600 focus:outline-none dark:text-gray-200 dark:hover:text-gray-400 dark:focus:text-gray-400"
                type="button"
                aria-label="toggle menu"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {!isOpen ? (
                  <Icon icon="ic:baseline-menu" width="24px" />
                ) : (
                  <Icon icon="ic:baseline-close" width="24px" />
                )}
              </button>
            </div>
          </div>
          <div
            className={`${
              isOpen
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            } absolute inset-x-0 z-20 w-full bg-white px-6 py-4 shadow-md transition-all duration-300 ease-in-out dark:bg-gray-900 lg:relative lg:top-0 lg:mt-0 lg:flex lg:w-auto lg:translate-x-0 lg:items-center lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent `}
          >
            <div className="lg:-px-8 flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0">
              <NavLink
                link="https://t.me/UniversalcryptoworldAMA"
                icon={<Icon icon="bxl:telegram" width="24px" />}
                text="Join Us"
              />
              <NavLink
                link="http://twitter.com/UniCrypto_World"
                icon={<Icon icon="bxl:twitter" width="24px" />}
                text="Follow Us"
              />
            </div>
            <form action="mailto:universalcryptoworld@gmail.com">
              <button
                type="submit"
                className="mt-4 block rounded-lg bg-blue-600 px-6 py-2.5 font-medium capitalize leading-5 text-white hover:bg-blue-500 lg:ml-4 lg:mt-0 lg:w-auto"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Hero;
