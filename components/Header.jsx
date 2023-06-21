import Image from "next/image";

function Header({ open, setOpen }) {
  return (
    <header className="z-20 flex items-center justify-between gap-5 pb-14 pt-5">
      <a className="z-10 flex items-center gap-1 sm:gap-2" href="/">
        <Image
          src="/logo.png"
          alt=""
          width="50"
          height="50"
          className="h-5 w-5 sm:h-9 sm:w-9"
        />
        <p className="text-xs font-bold sm:text-xl">Universal Crypto World</p>
      </a>
      <button
        className="z-10 lg:hidden"
        onClick={() => {
          setOpen((p) => !p);
        }}
      >
        {open ? (
          <Image src="/close.svg" alt="" height="20" width="20" />
        ) : (
          <Image src="/hamburger.svg" alt="" height="20" width="20" />
        )}
      </button>
      <nav
        className={`${
          open ? "absolute inset-0 bg-dark-one pb-24 pt-32" : "hidden"
        } lg:relative lg:flex lg:items-center lg:gap-5 lg:bg-[transparent] lg:pb-0 lg:pt-0`}
      >
        <ul className="flex flex-col gap-5 pb-8 lg:flex-row lg:pb-0">
          <li className="text-lg font-bold lg:text-md lg:font-medium">
            <a href="">About Us</a>
          </li>
          <li className="text-lg font-bold lg:text-md lg:font-medium">
            <a href="">AMA Review</a>
          </li>
          <li className="text-lg font-bold lg:text-md lg:font-medium">
            <a href="">Partners</a>
          </li>
          <li className="text-lg font-bold lg:text-md lg:font-medium">
            <a href="">Success Stories</a>
          </li>
        </ul>
        <button className="rounded-lg bg-gradientOne px-12 py-4 font-bold lg:px-8 lg:py-3">
          Contact Us
        </button>
      </nav>
    </header>
  );
}

export default Header;
