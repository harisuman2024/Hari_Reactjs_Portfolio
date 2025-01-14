import React from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react'
const Page5 = () => {

  useGSAP(function(){
    gsap.to("#img ",{
      rotate:360,
      duration:5,
      repeat:-1,
ease:'linear'
    })
  })
  useGSAP(function(){
    gsap.to("#img2 ",{
      rotate:180,
      duration:5,
      repeat:-1,
ease:'linear'
    })
  })
  
  return (
<div className='h-screen p-5'>
      <div className='h-full w-full bg-black rounded-[50px] overflow-hidden relative'>
        <img className='h-[90vh] relative left-[25%] top-0' src="https://static.wixstatic.com/media/f1c650_e5c1c4b281ea418a8663a17e66f283f1~mv2.png/v1/fill/w_777,h_668,al_c,q_90,enc_auto/triangle%203.png" alt="" srcset="" />
    <h1 className='font-[anzo1] text-[10vw] md:text-[16vw] text-white absolute -top-12 left-12 tracking-wide'>CORE JAVA </h1>
    <h1 className='font-[anzo1] text-[10vw] md:text-[17vw] text-white absolute top-[25%] left-12 tracking-wide'></h1>
      <h1 className='font-[anzo1] text-[10vw] md:text-[17vw] text-white absolute -top-12 left-[70%] tracking-wide'>PL/SQL </h1>
      {/* <h1 className='font-[anzo1] text-[10vw] md:text-[10vw] text-white absolute top-[25%] left-[75%] tracking-wide'>HTML5,CSS3,JavaScript</h1> */}
    <p className='  md:text-[1.5vw] text-[0.6vw] font-[anzo5] text-white top-[65%] absolute left-[37%] tracking-wide leading-6'><span className='font-[anzo5] text-gray-400'>  <br /> <br /> </span>  <br />  <br /> <br />
​
<span className=' font-[anzo5] leading-10'> <span className='font-[anzo5] text-gray-400'></span> </span></p>
<h1 className='font-[anzo1] text-[5vw] text-white left-[9%] top-[77%] absolute '>DESIGN </h1>
<span className='font-[anzo2] text-[1.5vw] text-white left-[17%] top-[84%] absolute'>01</span>
  <img id='img' className='font-[anzo1] text-[15vw] md:text-[30vw]  absolute top-[80%] left-10 tracking-wide' src="https://static.wixstatic.com/media/f1c650_67833facdc7a47d5aae7870d4fb7fc3e~mv2.png/v1/fill/w_61,h_61,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/SUN.png" alt="" />
   
  <h1 className='font-[anzo1] text-[4vw] text-white right-[9%] top-[78%] absolute '>DEVELOPMENT </h1>
<span className='font-[anzo2] text-[1.5vw] text-white right-20 top-[83%] absolute'>02</span>
  <img id='img2' className='font-[anzo1] text-[15vw] md:text-[30vw]  absolute top-[80%] right-[21%] tracking-wide' src='https://static.wixstatic.com/media/f1c650_027515148725478cbb3a91eca452cabf~mv2.png/v1/fill/w_58,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EARTH.png' alt="" />
      </div>
    </div>
  )
}

export default Page5