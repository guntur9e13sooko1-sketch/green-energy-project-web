import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <Head>
        <title>Green Energy Project</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.min.css"
          rel="stylesheet"
        />
      </Head>
      <nav className="flex items-center md:justify-center justify-end flex-wrap bg-black p-6">
        <div className="block md:hidden w-full">
          <button
            className="flex items-center justify-end w-full px-3 py-2 border rounded text-gray-300 border-gray-400 hover:text-white hover:border-white"
            onClick={handleExpanded}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={` ${
            expanded ? "block" : "hidden"
          }  w-full  md:flex md:items-center md:w-auto container`}
        >
          <div className="text-base md:flex-grow ">
            <Link
              href="/"
              className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Home
            </Link>
            <Link
              href="/about-us"
              className="block mt-4 md:inline-block md:mt-0 text-gray-300 hover:text-white mr-4"
            >
              Tentang Kami
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
