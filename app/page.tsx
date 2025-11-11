"use client";

import SortSearchIcon from "@/app/components/icons/sortSearchIcon";
import BBCLogo from "@/app/components/icons/logo";
import Button from "@/app/components/ui/button";
import { useEffect, useState } from "react";
import ProfileLogo from "@/app/components/icons/profileLogo";
import { categories } from "@/app/data/categories";
import Link from "next/link";
import CategoryButton from "./components/ui/catetory-button";

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
      <div className="fixed top-0 w-full z-50">
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
              <div className="hidden  sm:flex items-center justify-end gap-5">
                <Button className="bg-black text-white">Register</Button>
                <Button>Sign In</Button>
              </div>
            </div>
          </div>
        </header>
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
      <div className="h-[10000]"></div>
    </>
  );
}
