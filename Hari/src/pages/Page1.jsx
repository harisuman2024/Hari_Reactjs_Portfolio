import React, { useRef, useState } from 'react';
import Page1Bottom from '../components/Page1Bottom';
import Tilttext from '../components/Tilttext';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const handleMouseMove = (e) => {
    setXVal(e.clientX / 20);
    setYVal(e.clientY / 20);
  };

  useGSAP(() => {
    gsap.to(tiltRef.current, {
      transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration: 5,
      ease: 'elastic.out(1, 0.3)',
    });
  }, [xVal, yVal]);

  return (
    <div 
      onMouseMove={handleMouseMove} 
      className="h-screen p-3 bg-white text-black"
    >
      <div 
        id="page-1" 
        className="relative shadow-xl p-12 h-full w-full bg-cover rounded-[30px] bg-[url(https://raw.githubusercontent.com/harisuman2024/Hari_Reactjs_Portfolio/refs/heads/main/file.jpg)]"
      >
        <img 
          className="h-16" 
          src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_70,h_70,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" 
          alt="Logo"
        />
        <Tilttext abc={tiltRef} />
        <Page1Bottom />
      </div>
    </div>
  );
};

export default Page1;
