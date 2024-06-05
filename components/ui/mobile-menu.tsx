"use client";

import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import Sosmed from "../sosmed";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (
        !mobileNavOpen ||
        mobileNav.current.contains(target as Node) ||
        trigger.current.contains(target as Node)
      )
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  const handleDownloadCv = () => {
    const filePath = "/pdf/MuhamadAlifAnwar_CV.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = "MuhamadAlifAnwar_CV.pdf";
    downloadLink.click();
  };

  const handleDownloadPortf = () => {
    const filePath = "/pdf/MuhamadAlifAnwar_Portf.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = "MuhamadAlifAnwar_Portf.pdf";
    downloadLink.click();
  };
  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && "active"}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-900"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" />
          <rect y="11" width="24" height="2" />
          <rect y="18" width="24" height="2" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <div ref={mobileNav}>
        <Transition
          show={mobileNavOpen}
          as="nav"
          id="mobile-nav"
          className="absolute top-full h-screen pb-16 z-20 left-0 w-full overflow-scroll bg-white"
          enter="transition ease-out duration-200 transform"
          enterFrom="opacity-0 -translate-y-2"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <ul className="flex flex-col justify-center  w-full  items-center gap-3">
            <Sosmed />
            <li>
              <button
                className="btn btn-outline "
                onClick={handleDownloadPortf}
              >
                Download Portfolio
                <span>
                  <img
                    className="w-3 h-3 shrink-0 ml-2 -mr-1"
                    src="https://img.icons8.com/metro/26/FFFFFF/download.png"
                    alt="download"
                  />
                </span>
              </button>
            </li>
            <li className="flex">
              {/* <a href="/pdf/3.pdf" download="3.pdf">Download CV</a> */}
              <button className="btn " onClick={handleDownloadCv}>
                Download CV
                <span>
                  <img
                    className="w-3 h-3 shrink-0 ml-2 -mr-1"
                    src="https://img.icons8.com/metro/26/FFFFFF/download.png"
                    alt="download"
                  />
                </span>
              </button>
            </li>
          </ul>
        </Transition>
      </div>
    </div>
  );
}
