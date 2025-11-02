import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const reithSerif = localFont({
  src: [
    {
      path: "./fonts/BBCReithSerif_W_Rg.woff2",
      weight: "400",
    },
    {
      path: "./fonts/BBCReithSerif_W_Md.woff2",
      weight: "500",
    },
  ],
  variable: "--font-reith-serif",
});

const reithSans = localFont({
  src: [
    {
      path: "./fonts/BBCReithSans_W_Rg.woff2",
      weight: "400",
    },
    {
      path: "./fonts/BBCReithSans_W_Md.woff2",
      weight: "500",
    },
    {
      path: "./fonts/BBCReithSans_W_Bd.woff2",
      weight: "700",
    },
    {
      path: "./fonts/BBCReithSans_W_ExBd.woff2",
      weight: "800",
    },
  ],
  variable: "--font-reith-sans",
});

export const metadata: Metadata = {
  title:
    "BBC Home - Breaking News, World News, US News, Sports, Business, Innovation, Climate, Culture, Travel, Video & Audio",
  description:
    "Visit BBC for trusted reporting on the latest world and US news, sports, business, climate, innovation, culture and much more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${reithSans.variable} ${reithSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
