import "./globals.css";
import { ReactNode } from "react";
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
  // preload: false,
});

const baiJamjuree = BaiJamjuree({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-bai-jamjuree",
  display: "swap",
  // preload: false,
});

export const metadata = {
  title: "NLW SpaceTime",
  description:
    "Uma cápsula do tempo construída com React, Next.js, TailwindCSS e TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
