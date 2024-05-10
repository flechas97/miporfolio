
// "use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from 'react';
import { useEffect } from "react";
import Header from './Header';
// import { gsap } from 'gsap'
// import { CSSPlugin } from 'gsap/CSSPlugin'
// gsap.registerPlugin(CSSPlugin)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // useEffect(() => {
  //   var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
  //   tl.to("header", { x: 0, y:75, duration: 0.4, delay: 2})
  //    .to(".nombre", { x: 0, y:75, duration: 0.3, delay: 0})
  //    .to(".ctr", { x: 0, y:75, duration: 0.3, delay: 0});
  // }, [])


  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
