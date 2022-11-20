import { logo } from "../../../assets";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center bg-white px-4 text-gray-800 dark:bg-gray-900 dark:text-white">
        <div className="container py-6">
          <h1 className="mx-auto max-w-sm text-center text-lg font-bold lg:text-2xl">
            Join our 60k+ Communty, Add your gmail and stay updated with our
            next AMAs.
          </h1>

          <div className="mt-6 flex justify-center">
            <div className="rounded-md border bg-white focus-within:border-blue-400 dark:border-gray-700 dark:bg-gray-900 dark:focus-within:border-blue-300">
              <div className="flex flex-wrap justify-between md:flex-row">
                <input
                  type="email"
                  className="m-1 appearance-none bg-transparent p-2 text-sm text-gray-700 focus:placeholder-transparent focus:outline-none dark:text-gray-200"
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                />
                <button className="m-1 w-full transform rounded-md bg-gray-800 px-3 py-2 text-sm font-medium uppercase tracking-wider text-white transition-colors duration-300 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600 lg:w-auto">
                  subscribe
                </button>
              </div>
            </div>
          </div>

          <hr className="mt-6 h-px border-none bg-gray-200 dark:bg-gray-700" />

          <div className="mt-6 flex flex-col items-center justify-between md:flex-row">
            <div>
              <a
                className="flex items-center gap-2 text-2xl font-bold text-gray-800 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 lg:text-3xl"
                href="/"
              >
                <img className="h-10 w-10" src={logo} alt="" />
                <p>Universal Crypto world</p>
              </a>
            </div>

            <div className="mt-4 flex md:m-0">
              <div className="-mx-4">
                <a
                  href="https://t.me/UniversalcryptoworldAMA"
                  className="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-400"
                >
                  Telegram
                </a>
                <a
                  href="http://twitter.com/UniCrypto_World"
                  className="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-400"
                >
                  Twitter
                </a>
                <a
                  href="https://medium.com/@Universal_crypto_world"
                  className="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-400"
                >
                  Medium
                </a>
                <a
                  href="mailto:universalcryptoworld@gmail.com"
                  className="px-4 text-sm font-medium text-gray-600 transition-colors duration-300 hover:text-blue-500 hover:underline dark:text-gray-200 dark:hover:text-blue-400"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
