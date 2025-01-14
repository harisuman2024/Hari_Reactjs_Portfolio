import { useGSAP } from '@gsap/react';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
const Page2 = () => {
  gsap.registerPlugin(ScrollTrigger);

    useGSAP(function(){
        gsap.from("#rotateText",{
           transform:'rotateX(80deg)',
           opacity:0,
           duration:5,
           stagger:1,
           scrollTrigger:{
            trigger:"#rotateText",
       
            start:'top 100%',
            end:'top -250%',
            scrub:2,
           }
        })
    })

     
    const animation = () => {
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
  
      // Ensure the canvas has explicit width and height
      const setCanvasSize = () => {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      };
  
      // Preload images
      const imagePath = Array.from({ length: 138 }, (elem, idx) => `/src/assets/webframes/${idx}.png`);
      const images = [];
      let imagesLoadedCount = 0;
  
      imagePath.forEach((path, idx) => {
        const img = new Image();
        img.src = path;
        img.onload = () => {
          images[idx] = img;
          imagesLoadedCount++;
          if (imagesLoadedCount === imagePath.length) {
            requestAnimationFrame(loopImages);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load image at ${path}`);
        };
      });
  
      let currentFrame = 0;
      let lastFrame = 0;
  
      const loopImages = (timestamp) => {
        if (timestamp - lastFrame >= 1000 / 30) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(images[currentFrame], 0, 0, canvas.width, canvas.height);
          currentFrame = (currentFrame + 1) % images.length;
          lastFrame = timestamp;
        }
        requestAnimationFrame(loopImages);
      };
  
      // Initial canvas size
      setCanvasSize();
      window.addEventListener('resize', setCanvasSize); // Update canvas size on window resize
  
      // Clean up on component unmount
      return () => {
        window.removeEventListener('resize', setCanvasSize);
      };
    };
  
    useEffect(() => {
     animation();
    }, []);
  
  return (
    <>
      <div id="sc2" className='bg-white text-center text-black p-10 w-full'>
        <h3 className='text-gray-500 font-[anzo3] text-xl font-extralight'>
          @ B.Tech- CSE 2024 Passout | Core Java & Front-End Developer !
        </h3>
        <div id="rotateText" className='mt-12'>
          <h1 className='text-[40vw] font-[anzo1] leading-[0.8]'>
            DEVELOPER
          </h1>
        </div>
        <div id="rotateText">
          <h1 className='text-[20vw] font-[anzo1] leading-[0.8]'>PROGRAMMING</h1>
        </div>
        <div id="rotateText">
          <h1 className='text-[20vw] font-[anzo1] leading-[0.8]'>ISN'T ABOUT WHAT YOU KNOW</h1>
        </div>
        <div id="rotateText">
          <h1 className='text-[20vw] font-[anzo1] leading-[0.8]'>IT'S ABOUT WHAT YOU</h1>
        </div>
        <div id="rotateText">
          <h1 className='text-[20vw] font-[anzo1] leading-[0.8]'>CAN FIGURE OUT !</h1>
        </div>
        <div id="rotateText relative">
          <canvas id='canvas' className='h-[15%] w-[70%] left-1/2 -translate-x-1/2 absolute ' >
          
          </canvas>
          
        </div>
       
        <div className='mt-10 h-0.5 w-1/3 relative left-1/2 -translate-x-1/2 bg-black'>

        </div>
      </div>

    </>
  );
};

export default Page2;
