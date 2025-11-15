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
import PlayIcon from "./components/icons/playIcon";
import { mostWatched } from "./data/most-watched";

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
        <div className="min-h-[10000px] px-4">
          {/* News Heading */}
          <div className="text-center text-4xl font-bold py-4 text-red-700">
            NEWS
          </div>

          {/* Breaking News */}
          <div className="grid md:grid-cols-[3fr_1fr] grid-rows-[min-content_minmax(0,1fr)] gap-x-4 gap-y-8 max-w-7xl mx-auto w-full">
            {/* Main News */}
            <div className="group order-1 md:order-0 grid md:grid-cols-[1fr_2fr] gap-4 leading-8">
              {/* Heading */}
              <div className="order-2 md:order-0 self-center flex flex-col gap-2 font-serif border-b border-border md:border-none">
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
                title="Trump rolls back tariffs on dozens of food products"
                description="The executive order allowing products like coffee and bananas to escape tariffs comes as the Trump administration faces mounting pressure over rising prices."
                imageUrl="/images/nside-1.webp"
                url="/"
                category="US & Canada"
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
              <NewsCard
                title="BBC apologises to Trump over Panorama edit but refuses to pay compensation"
                description="Lawyers for the US president have threatened to sue the corporation for $1bn (£759m)."
                imageUrl="/images/bottom-1.webp"
                url="/"
                category="Culture"
                publishedAt="2025-11-10T14:20:00Z"
              />

              <NewsCard
                title="Modi's alliance heads for decisive win in  Indian state election"
                description="The polls in November saw a 66.91% turnout - Bihar state’s highest since its first election in 1951."
                imageUrl="/images/bottom-2.webp"
                url="/"
                category="Asia"
                publishedAt="2025-11-10T14:20:00Z"
              />

              <NewsCard
                title="Man who grabbed Ariana Grande in Singapore charged in court"
                description="Johnson Wen rushed at the actress in Singapore, during the Asia-Pacific premiere of Wicked: For Good."
                imageUrl="/images/bottom-3.webp"
                url="/"
                category="Asia"
                publishedAt="2025-11-10T14:20:00Z"
              />

              <NewsCard
                title="Watch: Mud volcano erupts in southern Taiwan"
                description="The Wandan mud volcano is a particularly unusual example of the geological phenomenon, an expert told the BBC."
                imageUrl="/images/bottom-4.webp"
                url="/"
                category="Asia"
                publishedAt="2025-11-10T14:20:00Z"
              />
            </div>
          </div>

          {/* Minor News */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 font-serif my-12 max-w-7xl mx-auto">
            {/* Heading with play button */}
            <div className="group pb-4 border-b border-border sm:border-none">
              <div className="float-left mr-1.5">
                <PlayIcon className="w-[18.3px] h-[18.3px]" />
              </div>
              <h2 className="group-hover:underline font-medium leading-[22px] text-lg">
                Watch: Mud volcano erupts in southern Taiwan
              </h2>
            </div>
            <h2 className="hover:underline font-medium leading-[22px] text-lg pb-4 border-b border-border sm:border-none">
              Emails highlight Jeffrey Epstein and Steve Bannon relationship
            </h2>
            <h2 className="hover:underline font-medium leading-[22px] text-lg pb-4 border-b border-border sm:border-none">
              Ex-Bangladesh leader charged with crimes against humanity wants
              vote ban lifted
            </h2>
            <h2 className="hover:underline font-medium leading-[22px] text-lg pb-4 border-b border-border sm:border-none">
              Record settler attacks in West Bank opening up rifts within Israel
            </h2>
            <h2 className="hover:underline font-medium leading-[22px] text-lg pb-4 border-b border-border sm:border-none">
              Mass killings probe in Sudan will hold culprits to account, vows
              UN
            </h2>
          </div>

          {/* More to explore */}
          <section className="my-12 max-w-7xl mx-auto">
            {/* Header */}
            <div>
              <hr className="h-0.5 w-full bg-hr" />
              <div className="flex mt-2">
                <h2 className="font-extrabold text-[15px] uppercase leading-5 tracking-[0.75px]">
                  More to explore
                </h2>
              </div>
            </div>

            {/* News in more to explore */}
            <div className="grid md:grid-cols-[3fr_1fr] grid-rows-[min-content_minmax(0,1fr)] gap-x-4 gap-y-8 max-w-7xl mx-auto w-full my-4">
              {/* Main News */}
              <div className="group order-1 md:order-0 grid md:grid-cols-[1fr_2fr] gap-4 leading-8">
                {/* Heading */}
                <div className="order-2 md:order-0 self-center flex flex-col gap-2 font-serif border-b border-border md:border-none">
                  <h2 className="font-medium text-[28px] group-hover:underline">
                    &apos;Astonishingly lethal&apos;: BBC reports from site of
                    Russian strike in Kyiv
                  </h2>

                  <p className="leading-[18px] text-sm">
                    The BBC&apos;s James Landale reports from the east of the
                    capital where a drone struck a multi-storey residential
                    building.
                  </p>

                  <div className="flex gap-2 items-center font-sans text-xs leading-3.5 text-muted h-8">
                    <span>20 hrs ago</span>
                    <span>|</span>
                    <span>Europe</span>
                  </div>
                </div>

                {/* Image */}
                <div>
                  <Image
                    alt="Split screen image showing James Landale on the right and a damaged multi-storey building in Kyiv on the left"
                    src="/images/e-main.webp"
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
                  title="Watch: How the BBC works... in under two minutes"
                  description="Culture reporter Noor Nanji explains how the BBC is funded and governed, amid controversy that has lead to the departures of two senior bosses."
                  imageUrl="/images/e-side-1.webp"
                  url="/"
                  category="Culture"
                  publishedAt="2025-11-10T14:20:00Z"
                  className="w-full"
                />

                {/* Two small cards (no image, side by side) */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                  <NewsCard
                    title="From florist to drone maker: How the weapon became so mainstream"
                    description="With drones centre stage in Ukraine, military firms around the globe are ramping up their production."
                    url="/"
                    category="Europe"
                    publishedAt="2025-11-08T09:50:00Z"
                    className="flex flex-col"
                  />

                  <NewsCard
                    title="Thirteen hours by touch – inside one of the world's longest exam days"
                    description="South Korea's national college entry exam is notoriously hard - but blind students face unique challenges."
                    url="/"
                    category="Asia"
                    publishedAt="2025-11-09T22:15:00Z"
                    className="flex flex-col"
                  />
                </div>
              </div>

              {/* Below Main */}
              <div className="grid grid-cols-1 gap-4 order-2 md:order-0 sm:grid-cols-2 lg:grid-cols-3">
                <NewsCard
                  title="Watch: Bear runs onto airport tarmac, halting flights"
                  description="An airport in Japan temporarily suspended flights on Wednesday after a bear wandered onto its grounds."
                  imageUrl="/images/e-bottom-1.webp"
                  url="/"
                  category="Asia"
                  publishedAt="2025-11-10T14:20:00Z"
                />

                <NewsCard
                  title="The Aussie giving War & Peace a 'bogan' remake"
                  description="Ander Louis has written a new version of Leo Tolstoy's classic Russian novel in Australian slang."
                  imageUrl="/images/e-bottom-2.webp"
                  url="/"
                  category="Australia"
                  publishedAt="2025-11-10T14:20:00Z"
                />

                <div className="sm:col-span-2 lg:col-span-1">
                  <NewsCard
                    title="After 'insane drama' of pub quiz cheating scandal, can you get the questions right?"
                    description="The weekly pub quiz at the Barking Dog in Urmston returns after a cheating team was rumbled."
                    imageUrl="/images/e-bottom-3.webp"
                    url="/"
                    category="Manchester"
                    className="sm:col-span-2"
                    publishedAt="2025-11-10T14:20:00Z"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Most Watched */}
          <section className="my-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-6">
              <hr className="h-0.5 w-full bg-hr" />
              <div className="flex mt-2">
                <h2 className="font-extrabold text-[15px] uppercase leading-5 tracking-[0.75px]">
                  Most watched
                </h2>
              </div>
            </div>

            {/* List of most watched */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-5 font-serif gap-6 sm:gap-4 m-4">
              {mostWatched.map(({ id, title }) => {
                return (
                  <div
                    key={id}
                    className="grid grid-cols-[38px_1fr] gap-2 group"
                  >
                    <div className="flex justify-center items-start">
                      <span className="text-[32px] leading-8 text-numbered-bullet">
                        {id}
                      </span>
                    </div>

                    <div>
                      <div className="float-left mr-1.5">
                        <PlayIcon className="w-[16.7] h-[16.7]" />
                      </div>
                      <h2 className="font-medium leading-5 group-hover:underline">
                        {title}
                      </h2>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Also in the news */}
          <section className="my-12 max-w-7xl mx-auto">
            {/* Header */}
            <div>
              <hr className="h-0.5 w-full bg-hr" />
              <div className="flex mt-2">
                <h2 className="font-extrabold text-[15px] uppercase leading-5 tracking-[0.75px]">
                  Also in news
                </h2>
              </div>
            </div>

            {/* News in more to explore */}
            <div className="grid md:grid-cols-[3fr_1fr] grid-rows-[min-content_minmax(0,1fr)] gap-x-4 gap-y-8 max-w-7xl mx-auto w-full my-4">
              {/* Main News */}
              <div className="group order-1 md:order-0 grid md:grid-cols-[1fr_2fr] gap-4 leading-8">
                {/* Heading */}
                <div className="order-2 md:order-0 flex flex-col self-center gap-2 font-serif border-b border-border md:border-none">
                  <h2 className="font-medium text-[28px] group-hover:underline">
                    UK court finds mining firm liable for Brazil&apos;s worst
                    environmental disaster
                  </h2>

                  <p className="leading-[18px] text-sm">
                    The 2015 dam collapse killed 19 people, polluted a river and
                    destroyed hundreds of homes.
                  </p>

                  <div className="flex gap-2 items-center font-sans text-xs leading-3.5 text-muted h-8">
                    <span>19 hrs ago</span>
                    <span>|</span>
                    <span>Latin America</span>
                  </div>
                </div>

                {/* Image */}
                <div>
                  <Image
                    alt="Split screen image showing James Landale on the right and a damaged multi-storey building in Kyiv on the left"
                    src="/images/a-main.webp"
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
                  title="Hollywood's SAG Awards announces it will change its name"
                  description="The rebrand is meant to reflect the name of the ceremony's award, like the Oscars and Grammys."
                  imageUrl="/images/a-side.webp"
                  url="/"
                  category="US & Canada"
                  publishedAt="2025-11-10T14:20:00Z"
                  className="w-full"
                />

                {/* Two small cards (no image, side by side) */}
                <div className="flex flex-col sm:flex-row md:flex-col gap-4">
                  <NewsCard
                    title="Man who grabbed Ariana Grande in Singapore charged in court"
                    description="Johnson Wen rushed at the actress in Singapore, during the Asia-Pacific premiere of Wicked: For Good."
                    url="/"
                    category="Asia"
                    publishedAt="2025-11-08T09:50:00Z"
                    className="flex flex-col"
                  />

                  <NewsCard
                    title="Russian drone slams into block of flats in deadly wave of strikes across Kyiv"
                    description="Six people are killed in Kyiv, and Ukraine targets one of Russia's biggest oil ports on the Black Sea coast."
                    url="/"
                    category="Europe"
                    publishedAt="2025-11-09T22:15:00Z"
                    className="flex flex-col"
                  />
                </div>
              </div>

              {/* Below Main */}
              <div className="grid grid-cols-1 gap-4 order-2 md:order-0 sm:grid-cols-2 lg:grid-cols-3">
                <NewsCard
                  title="Dozens of Australian and NZ schools shut over asbestos risk in children's sand"
                  description="The Australian regulator has recalled several sand products used by children for play, but says the risk from them is 'low'."
                  imageUrl="/images/a-bottom-1.webp"
                  url="/"
                  category="Australia"
                  publishedAt="2025-11-10T14:20:00Z"
                />

                <NewsCard
                  title="South Africa to investigate 'mystery' of planeload of Palestinians"
                  description="It is not clear who chartered the plane carrying the Palestinians from Kenya to South Africa. "
                  imageUrl="/images/a-bottom-2.webp"
                  url="/"
                  category="World"
                  publishedAt="2025-11-10T14:20:00Z"
                />

                <div className="sm:col-span-2 lg:col-span-1">
                  <NewsCard
                    title="Cardi B welcomes fourth child, her first with boyfriend Stefon Diggs"
                    description="The US rapper welcomed a baby girl in the wake of releasing her sophomore album last month."
                    imageUrl="/images/a-bottom-3.webp"
                    url="/"
                    category="US & Canada"
                    className="sm:col-span-2"
                    publishedAt="2025-11-10T04:20:00Z"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
