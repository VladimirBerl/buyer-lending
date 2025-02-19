"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import { navItem } from "@/config/config";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  const [headerHeight, setHeaderHeight] = useState(
    headerRef.current?.offsetHeight || 88
  );

  useEffect(() => {
    if (showNavbar) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [showNavbar]);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, [headerRef]);

  function toggleNavbar() {
    setShowNavbar(!showNavbar);
  }

  return (
    <>
      <header
        ref={headerRef}
        className="fixed z-50 top-0 left-0 right-0 flex items-center max-lg:justify-between gap-[50px] py-6 px-4 max-lg:py-[27px] bg-black shadow-[0px_5px_20px_0px_black]"
      >
        <div className="relative w-[200px] h-[34px]">
          <Image src="/icon/logo.svg" fill alt="logo" />
        </div>

        <button
          onClick={toggleNavbar}
          className="lg:hidden relative w-[34px] h-[22px]"
        >
          <div className="absolute top-0 w-full h-[2px] bg-[#D9D9D9] rounded-sm"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-[2px] bg-[#D9D9D9] rounded-sm"></div>
          <div className="absolute bottom-0 w-full h-[2px] bg-[#D9D9D9] rounded-sm"></div>
        </button>

        <nav className="max-lg:hidden">
          <ul className="flex items-center gap-x-4 gap-y-3">
            {navItem.map((item) => (
              <li key={item.name}>
                <Link className="px-[18px] py-[6px] text-[16px]" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {showNavbar && (
          <nav
            className="fixed inset-0"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
          >
            <ul className="flex flex-col items-start gap-x-4 gap-y-3 bg-[#111] absolute top-0 right-0 bottom-0 w-4/5 p-6 py-12">
              <button
                onClick={toggleNavbar}
                className="absolute z-50 top-4 right-4 size-[34px]"
              >
                <div className="absolute top-1/2 -translate-y-1/2 rotate-45 w-full h-[2px] bg-[#D9D9D9] rounded-sm"></div>
                <div className="absolute top-1/2 -translate-y-1/2 -rotate-45 w-full h-[2px] bg-[#D9D9D9] rounded-sm"></div>
              </button>

              <li className="relative w-[200px] h-[34px] mb-3">
                <Image src="/icon/logo.svg" fill alt="logo" />
              </li>

              {navItem.map((item) => (
                <li key={item.name}>
                  <Link className="py-[6px] px-0 text-2xl" href={item.href}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
      <div className="w-full" style={{ height: headerHeight + 20 + "px" }}></div>
    </>
  );
};
