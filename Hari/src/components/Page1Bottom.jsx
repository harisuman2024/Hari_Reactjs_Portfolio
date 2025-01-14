// import { useGSAP } from '@gsap/react'
// import React from 'react'
// import { gsap } from 'gsap';
// const Page1Bottom = () => {
//   useGSAP(function(){
//     gsap.to("#img img",{
//       rotate:360,
//       duration:5,
//       repeat:-1,
// ease:'linear'
//     })
//   })
//   return (
//     <div className='mt-2  absoulte bottom-0 w-full flex items-start justify-between '>
// <div className=''>
//   <h2 className='py-20 text-white   font-[anzo2] '>
//   EMAIL: harisuman1008@gmail.com <br /> <span className='text-white font-[anzo3] text-l'> CONTACT: 7654048346</span> </h2> 

// </div>
// <div id="img">
//   <img className='mb-2' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" srcset="" />
//   <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" srcset="" />

// </div>

//     </div>
//   )
// }
// export default Page1Bottom










import { useGSAP } from '@gsap/react';
import React from 'react';
import { gsap } from 'gsap';

const Page1Bottom = () => {
  useGSAP(function () {
    gsap.to("#img img", {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    });
  });

  return (
    <div className='mt-2 absolute bottom-0 w-full flex items-start justify-between'>
      <div className=''>
        <h2 className='py-20 text-white font-[anzo2]'>
          EMAIL: harisuman1008@gmail.com <br />
          <span className='text-white font-[anzo3] text-l'>
            CONTACT: 7654048346
          </span>
          <div className='flex gap-4 mt-4'>
            <a href="https://www.linkedin.com/in/hari-suman-b97483213/" target="_blank" rel="noopener noreferrer">
              <i className='ri-linkedin-box-fill text-white text-2xl'></i>
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
              <i className='ri-github-fill text-white text-2xl'></i>
            </a>
            <a href="mailto:harisuman1008@gmail.com">
              <i className='ri-mail-fill text-white text-2xl'></i>
            </a>
            <a href="https://wa.me/7654048346" target="_blank" rel="noopener noreferrer">
              <i className='ri-whatsapp-fill text-white text-2xl'></i>
            </a>
            <a href="tel:+917654048346" target="_blank" rel="noopener noreferrer">
              <i className='ri-phone-fill text-white text-2xl'></i>
            </a>
          </div>
        </h2>
      </div>
      <div id="img">
        <img className='mb-10' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
        <img src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
      </div>
    </div>
  );
};

export default Page1Bottom;
