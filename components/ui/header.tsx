"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/utils/dropdown";
import MobileMenu from "./mobile-menu";
import Sosmed from "../sosmed";

export default function Header() {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  const handleDownloadCv = () => {
    const filePath = "/pdf/MuhamadAlifAnwar_CV.pdf"; // Sesuaikan dengan path file Anda
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = "MuhamadAlifAnwar_CV.pdf"; // Nama file yang akan diunduh
    downloadLink.click();
  };

  const handleDownloadPortf = () => {
    const filePath = "/pdf/MuhamadAlifAnwar_Portf.pdf";
    const downloadLink = document.createElement("a");
    downloadLink.href = filePath;
    downloadLink.download = "MuhamadAlifAnwar_Portf.pdf";
    downloadLink.click();
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top ? "bg-white backdrop-blur-sm shadow-lg" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-end  w-full justify-end gap-3">
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
                      src="https://img.icons8.com/metro/26/OOOOOO/download.png"
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
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
