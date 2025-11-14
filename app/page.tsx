"use client";

import SortSearchIcon from "@/app/components/icons/sortSearchIcon";
import BBCLogo from "@/app/components/icons/logo";
import Button from "@/app/components/ui/button";
import { useEffect, useState } from "react";
import ProfileLogo from "@/app/components/icons/profileLogo";
import { categories } from "@/app/data/categories";
import Link from "next/link";
import CategoryButton from "./components/ui/catetory-button";
import Image from "next/image";
import LiveIcon from "./components/icons/liveIcon";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full z-50 bg-background">
        {/* Header */}
        <header
          className={`${
            isScrolled ? "h-16" : "h-20"
          } transition-all ease-in-out duration-500 border-b border-border`}
        >
          <div
            className={`flex items-center h-full px-4 py-3 transition-all duration-500`}
          >
            <SortSearchIcon className="flex-1 flex justify-start items-center" />
            <BBCLogo className="flex-1 flex justify-center items-center h-[73%] transition-all duration-500 ease-in-out" />
            <div className="flex-1">
              <ProfileLogo className="sm:hidden flex justify-end" />
              <div className="hidden sm:flex items-center justify-end gap-5">
                <Button className="bg-primary text-background hover:opacity-75">
                  Register
                </Button>
                <Button className="hover:bg-primary hover:text-background hover:opacity-90">
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Navbar */}
        <nav
          className={`overflow-hidden transition-all duration-500 ease-in-out
            ${
              isScrolled
                ? "max-h-0 opacity-0 -translate-y-2"
                : "max-h-16 opacity-100 translate-y-0"
            }
            hidden md:flex justify-center border-b border-border
          `}
        >
          <div className="flex">
            {categories.map((item) => (
              <Link key={item.name} href={item.link}>
                <CategoryButton
                  onClick={() => setSelectedCategory(item.name)}
                  className={`py-3 px-2 font-medium text-sm hover:bg-border hover:cursor-pointer ${
                    selectedCategory === item.name
                      ? "border-b-[3px] pb-[9px] border-black"
                      : ""
                  }`}
                >
                  {item.name}
                </CategoryButton>
              </Link>
            ))}
          </div>
        </nav>
      </div>

      {/* Main Body */}
      <main className="pt-20 md:pt-[125px] bg-background">
        <div className="min-h-[1000px]">
          {/* News Heading */}
          <div className="text-center text-4xl font-bold py-4 text-red-700">
            NEWS
          </div>

          {/* Breaking News */}
          <div className="grid grid-cols-[3fr_1fr] grid-rows-2 gap-x-4 gap-y-8 max-w-7xl mx-auto w-full">
            {/* Main News */}
            <div className="grid grid-cols-[1fr_2fr] gap-x-4 leading-8 mx-4">
              <div className="flex flex-col gap-2 font-serif">
                <div>
                  <div className="flex items-center float-left gap-1">
                    <LiveIcon className="w-[26.7] h-[26.7] text-red-600 " />
                    <span className="mr-1 font-sans font-bold text-red-600 text-[28px]">
                      LIVE
                    </span>
                  </div>
                  <h1 className="font-medium text-[28px]">
                    Calls to release all Epstein files grow as White House says
                    messages about Trump &apos;prove nothing&apos;
                  </h1>
                </div>
                <p className="leading-[18px] text-sm">
                  Jeffrey Epstein said in 2018 he could &quot;take down&quot;
                  Donald Trump, in an exchange released along with thousands of
                  other files.
                </p>
              </div>
              <div>
                <Image
                  alt="A composite image of Donald Trump on the left and Jeffrey Epstein on the right"
                  src="/images/trump.webp"
                  className="w-full object-cover aspect-video"
                  width={1024}
                  height={576}
                />
              </div>
            </div>

            {/* Side */}
            <div className="bg-amber-300 row-span-2"></div>

            {/* Below Main */}
            <div className="bg-blue-300"></div>
          </div>
        </div>
      </main>
    </>
  );
}
