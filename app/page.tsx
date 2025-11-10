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
      <header>
        <div className={`flex justify-between items-center px-4 py-3`}>
          <SortSearchIcon  />
          <BBCLogo className="w-40" />
          <div className="flex gap-5">
            <Button className="bg-black text-white">Register</Button>
            <Button>Sign In</Button>
          </div>
        </div>
      </header>
    </>
  );
}
