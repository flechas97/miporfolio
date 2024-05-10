"use client";

import { useEffect } from "react";
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)


const Header = () => {
    useEffect(() => {
        var tl = gsap.timeline({repeat: 0, repeatDelay: 0});
        tl.to("header", { x: 0, y:75, duration: 0.4, delay: 4})
         .to(".nombre", { x: 0, y:75, duration: 0.3, delay: 0})
         .to(".ctr", { x: 0, y:75, duration: 0.3, delay: 0});
      }, [])


    return (
    <header>
        <div className="wrapperHeader">
          <div className="nombre">
              Roberto Bermejo
          </div>
          <div className="ctr">
              <button>Contacto</button>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;