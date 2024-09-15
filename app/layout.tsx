import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PrelineScript from "./components/PrelineScript";
import { BusRouteProvider } from "./lib/Context";

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
  title: "Calo Digital",
  description: "Cari Jadwal Bus | Project By Amir Ubaidillah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        <BusRouteProvider>
          <div className="sm:container sm:mx-auto min-h-screen p-8 sm:max-w-screen-sm md:max-w-screen-lg lg:max-w-screen-lg bg-white rounded-2xl relative">
            {children}
          </div>
        </BusRouteProvider>
      </body>
      <PrelineScript />
    </html>
  );
}
