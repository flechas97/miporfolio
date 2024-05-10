"use client";

import Image from "next/image";
import { useEffect } from "react";
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
// gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

export default function Home() {
  useEffect(() => {
    // gsap.to(".box", { x: 100, y:100, duration: 1 });
  }, [])


  return (
    <main>
      <div className="box">
        <h1>Hola Mundo 22</h1>
      </div>
      
    </main>
  );
}
