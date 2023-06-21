import Image from "next/image";
import Link from "next/link";
function Header({ open, setOpen }) {
  return (
    <header className="z-20 flex items-center justify-between gap-5 pb-14 pt-5">
      <Link className="z-30 flex items-center gap-1 sm:gap-2" href="/">
        <Image
          src="/logo.png"
          alt=""
          width="50"
          height="50"
          className="h-5 w-5 sm:h-9 sm:w-9"
        />
        <p className="text-xs font-bold sm:text-xl">Universal Crypto World</p>
      </Link>
      <button
        className="z-30 lg:hidden"
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
          open ? "absolute inset-0 z-20 bg-dark-one pb-24 pt-32" : "hidden"
        } lg:relative lg:flex lg:items-center lg:gap-5 lg:bg-[transparent] lg:pb-0 lg:pt-0`}
      >
        <ul className="flex flex-col gap-5 pb-8 lg:flex-row lg:pb-0">
          <li className="text-lg font-bold lg:text-md lg:font-medium">
            <Link href="/about-us">About Us</Link>
          </li>
          <li className="text-lg font-bold lg:text-md lg:font-medium">
            <Link href="/ama-review">AMA Review</Link>
          </li>
          <li className="text-lg font-bold lg:text-md lg:font-medium">
            <Link href="/partners">Partners</Link>
          </li>
          <li className="text-lg font-bold lg:text-md lg:font-medium">
            <Link href="/success-stories">Success Stories</Link>
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
