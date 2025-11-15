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
import NewsCard from "@/app/components/ui/news-card";
import { bottomNews } from "./data/bottonNews";

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
          <div className="grid md:grid-cols-[3fr_1fr] grid-rows-[min-content_minmax(0,1fr)] gap-x-4 gap-y-8 max-w-7xl mx-auto w-full px-4">
            {/* Main News */}
            <div className="group order-1 md:order-0 grid md:grid-cols-[1fr_2fr] gap-4 leading-8">
              {/* Heading */}
              <div className="order-2 md:order-0 flex flex-col gap-2 font-serif border-b border-border md:border-none">
                <div>
                  <div className="flex items-center float-left gap-1">
                    <LiveIcon className="w-[26.7] h-[26.7] text-red-600 " />
                    <span className="mr-1 font-sans font-bold text-red-600 text-[28px]">
                      LIVE
                    </span>
                  </div>
                  <h1 className="font-medium text-[28px] group-hover:underline">
                    Calls to release all Epstein files grow as White House says
                    messages about Trump &apos;prove nothing&apos;
                  </h1>
                </div>
                <p className="leading-[18px] text-sm mb-4">
                  Jeffrey Epstein said in 2018 he could &quot;take down&quot;
                  Donald Trump, in an exchange released along with thousands of
                  other files.
                </p>
              </div>

              {/* Image */}
              <div>
                <Image
                  alt="A composite image of Donald Trump on the left and Jeffrey Epstein on the right"
                  src="/images/trump.webp"
                  className="order-1 md:order-0 w-full object-cover aspect-video group-hover:opacity-80"
                  width={1024}
                  height={576}
                />
              </div>
            </div>

            {/* Side */}
            <div className="row-span-2 order-3 md:order-0 flex flex-col gap-4">
              {/* Featured (full width) */}
              <NewsCard
                title="'Astonishingly lethal': BBC reports from site of Russian strike in Kyiv"
                description="The BBC's James Landale reports from the east of the capital where a drone struck a multi-storey residential building."
                imageUrl="/images/side-1.webp"
                url="/"
                category="Europe"
                publishedAt="2025-11-10T14:20:00Z"
                className="w-full"
              />

              {/* Two small cards (no image, side by side) */}
              <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                <NewsCard
                  title="Germany agrees new military service plan to boost troop numbers"
                  description="The new military service plan will mandate all 18-year-old men to fill out a questionnaire on their suitability to serve."
                  url="/"
                  category="Europe"
                  publishedAt="2025-11-08T09:50:00Z"
                  className="flex flex-col"
                />

                <NewsCard
                  title="Dozens of Australian and NZ schools shut over asbestos risk in children's sand"
                  description="The Australian regulator has recalled several sand products used by children for play, but says the risk from them is 'low'."
                  url="/"
                  category="Australia"
                  publishedAt="2025-11-09T22:15:00Z"
                  className="flex flex-col"
                />
              </div>
            </div>

            {/* Below Main */}
            <div className="flex flex-col gap-4 order-2 sm:grid sm:grid-cols-2 md:order-0 lg:flex lg:flex-row">
              {bottomNews.map((news) => (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  imageUrl={news.imageUrl}
                  url={news.url}
                  description={news.description}
                  category={news.category}
                  publishedAt={news.publishedAt}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
