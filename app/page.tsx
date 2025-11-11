'use client'

import SortSearchIcon from "@/app/components/icons/sortSearchIcon";
import BBCLogo from "@/app/components/icons/logo";
import Button from "@/app/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 10) {
        setIsScrolled(true) 
      } else {
        setIsScrolled(false)
      }
    }; 
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll) 
  }, [])

  return (
    <>
      <header className={`fixed top-0 ${isScrolled ? "h-16" : "h-20"} transition-all ease-in-out duration-500 border-b border-border z-50 w-full`} >
        <div className={`flex items-center h-full px-4 py-3 transition-all duration-500`}>
          <SortSearchIcon  className="flex-1 flex justify-start items-center" />
          <BBCLogo className="flex-1 flex justify-center items-center h-[90%] transition-all duration-500 ease-in-out"/>
          <div className="flex-1 flex items-center justify-end gap-5">
            <Button className="bg-black text-white">Register</Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>
      <div className="h-[10000]"></div>
    </>
  );
}
