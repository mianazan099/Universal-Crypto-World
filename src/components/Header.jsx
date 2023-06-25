import { Link } from "react-router-dom";

function Header({ open, setOpen }) {
  return (
    <header className="flex items-center justify-between gap-5 pb-14 pt-5 lg:pb-24 lg:pt-8">
      <Link
        to="/"
        className="z-30 flex items-center gap-1 sm:gap-2"
        onClick={() => setOpen(false)}
      >
        <img src="/logo.png" alt="" className="h-5 w-5 sm:h-9 sm:w-9" />
        <p className="text-xs font-bold sm:text-xl">Universal Crypto World</p>
      </Link>
      <button
        className="z-30 lg:hidden"
        onClick={() => {
          setOpen((p) => !p);
        }}
      >
        <img
          src={open ? "/close.svg" : "/hamburger.svg"}
          alt=""
          className="h-5 w-5"
        />
      </button>
      <nav
        className={`${
          open
            ? "absolute inset-0 z-20 bg-darkPurple-900 pb-24 pt-32"
            : "hidden"
        } lg:static lg:flex lg:items-center lg:gap-5 lg:bg-[transparent] lg:p-0`}
      >
        <ul className="flex flex-col gap-5 pb-8 lg:flex-row lg:pb-0">
          <li className="text-md font-bold lg:font-medium">
            <Link onClick={() => setOpen(false)} to="/about-us">
              About Us
            </Link>
          </li>
          <li className="text-md font-bold lg:font-medium">
            <Link onClick={() => setOpen(false)} to="/ama-review">
              AMA Review
            </Link>
          </li>
          <li className="text-md font-bold lg:font-medium">
            <Link onClick={() => setOpen(false)} to="/partners">
              Partners
            </Link>
          </li>
          <li className="text-md font-bold lg:font-medium">
            <Link onClick={() => setOpen(false)} to="/success-stories">
              Success Stories
            </Link>
          </li>
        </ul>
        <button className="rounded-lg bg-gradientPrimary px-12 py-4 font-bold lg:px-8 lg:py-3">
          Contact Us
        </button>
      </nav>
    </header>
  );
}

export default Header;
