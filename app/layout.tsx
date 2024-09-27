import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import { BusRouteProvider } from "./lib/Context";
import { Footer } from "./components/Footer";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Calo Digital | Cari Jadwal Bus",
  description: "Bus Schedule Listing | Project By Amir Ubaidillah",
  icons: {
    icon: "/bus-ico.png",
    shortcut: "/bus-ico.png",
    apple: "/bus-ico.png",
    other: {
      rel: "apple-touch-icon",
      url: "/bus-ico.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300 min-h-screen`}
        >
          <div className="sm:container sm:mx-auto min-h-screen p-8 sm:max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-lg bg-white relative">
            <BusRouteProvider>{children}</BusRouteProvider>
          </div>
          <Footer />
        </body>
        <PrelineScript />
      </html>
    </>
  );
}
