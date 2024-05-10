"use client";
// import Image from "next/image";
// import { Inter } from "next/font/google";
import { useEffect,useState } from "react";
import { gsap } from 'gsap'
import { CSSPlugin } from 'gsap/CSSPlugin'
gsap.registerPlugin(CSSPlugin)
// gsap.to(".box", { rotation: 27, x: 100, duration: 1 });

export default function Home() {
  const [Text, setText] = useState<JSX.Element | null>(null);
  const textoPrincipal = (
    <div className="prueba">
      <h1>Desarrollador Web</h1>
      <h1>FullStack</h1>
      <h1>Especializado en Frontend</h1>
    </div>
  );
  const texto1 = (
    <div className="prueba">
      <h1>Programador TEST</h1>
    </div>
  );
  function changeText(newText: JSX.Element) {
    gsap.to(".contentText", { opacity: 0, duration: 0.2, onComplete: () => setText(newText) });
    gsap.to(".contentText", { opacity: 1, duration: 0.2, delay: 0.2 });
  }
  useEffect(() => {
    setText(textoPrincipal);
    var tla = gsap.timeline({repeat: 0, repeatDelay: 0});
    tla.to(".textbox", { opacity:1, duration: 0.6, delay: 3.5})


    var tl = gsap.timeline({repeat: 0, repeatDelay: 0});

    gsap.to(".itemCircle1", { x: 0, y:0, duration: 0.4, delay: 0.5})
    gsap.to(".itemCircle2", { x: 0, y:0, duration: 0.4, delay: 0.6})
    gsap.to(".itemCircle3", { x: 0, y:0, duration: 0.4, delay: 0.7})
    gsap.to(".itemCircle4", { x: 0, y:0, duration: 0.4, delay: 0.8})
    gsap.to(".itemCircle5", { x: 0, y:0, duration: 0.4, delay: 0.9})
    gsap.to(".itemCircle6", { x: 0, y:0, duration: 0.4, delay: 1})
    gsap.to(".itemCircle7", { x: 0, y:0, duration: 0.4, delay: 1.1})
    gsap.to(".itemCircle8", { x: 0, y:0, duration: 0.4, delay: 1.2})
    gsap.to(".itemCircle9", { x: 0, y:0, duration: 0.4, delay: 1.3})
    gsap.to(".itemCircle10", { x: 0, y:0, duration: 0.4, delay: 1.4})
    gsap.to(".itemCircle11", { x: 0, y:0, duration: 0.4, delay: 1.5})
    gsap.to(".itemCircle12", { x: 0, y:0, duration: 0.4, delay: 1.6})
    gsap.to(".itemCircle1", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2})
    gsap.to(".itemCircle2", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.1})
    gsap.to(".itemCircle3", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.2})
    gsap.to(".itemCircle4", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.3})
    gsap.to(".itemCircle5", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.4})
    gsap.to(".itemCircle6", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.5})
    gsap.to(".itemCircle7", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.6})
    gsap.to(".itemCircle8", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.7})
    gsap.to(".itemCircle9", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.8})
    gsap.to(".itemCircle10", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 2.9})
    gsap.to(".itemCircle11", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 3})
    gsap.to(".itemCircle12", { filter: 'drop-shadow(0px 0px 4px #4fff42)',delay: 3.1})

  }, [])



  return (
    <main>
      <section className="inicio">
          <div className="content">
                <div className="circle">
                  <div className="textbox">
                    <div className="contentText">
                      {Text}
                    </div>
                  </div>
                </div>
                <div className="itemCircle1" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(texto1)}>test</div>
                <div className="itemCircle2" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle3" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle4" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle5" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle6" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle7" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle8" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle9" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle10" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle11" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
                <div className="itemCircle12" onMouseLeave={()=>changeText(textoPrincipal)} onMouseEnter={() => changeText(<h1>Hola mundo</h1>)}></div>
          </div>
      </section>
    </main>
  );
}
