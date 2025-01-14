// import React from 'react';
// import 'remixicon/fonts/remixicon.css';

// const Header = () => {
//   return (
//     <div className='fixed w-full z-10 p-16 flex items-center justify-end'>
//       <a 
//         target='_blank' 
//         rel='noopener noreferrer' 
//         href="https://www.linkedin.com/in/hari-suman-b97483213/"
//       >
//         <button className='border-4 text-xl bg-black px-10 py-2 rounded-full text-white hover:bg-gray-500'>
//           Hire me
//         </button>
//         <button className='border-4 text-xl bg-black px-9 py-2 rounded-full text-white hover:bg-gray-500'>
//           Hire me
//         </button>
//         <button className='border-4 text-xl bg-black px-9 py-2 rounded-full text-white hover:bg-gray-500'>
//           Hire me
//         </button>
//       </a>
//       <i className="ri-more-2-fill text-2xl ml-1"></i>
//     </div>
//   );
// };

// export default Header;



// import React from 'react';
// import 'remixicon/fonts/remixicon.css';

// const Header = () => {
//   return (
//     <div className='fixed w-full z-10 p-16 flex items-center justify-end'>
//       <a 
//         target='_blank' 
//         rel='noopener noreferrer' 
//         href="https://www.linkedin.com/in/hari-suman-b97483213/"
//         className="flex gap-4"
//       >
//         <button className='border-4 text-xl bg-black px-10 py-2 rounded-full text-white hover:bg-gray-500'>
//           About 
//         </button>
//         <button className='border-4 text-xl bg-black px-9 py-2 rounded-full text-white hover:bg-gray-500'>
//           Projects
//         </button>
//         <button className='border-4 text-xl bg-black px-9 py-2 rounded-full text-white hover:bg-gray-500'>
//           Hire me
//         </button>
//       </a>
//       <i className="ri-more-2-fill text-2xl ml-1"></i>
//     </div>
//   );
// };

// export default Header;



import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
  return (
    <div className='fixed w-full z-10 p-16 flex items-center justify-end'>
      <a 
        target='_blank' 
        rel='noopener noreferrer' 
        href="https://www.linkedin.com/in/hari-suman-b97483213/"
        className="flex gap-4"
      >
        <button className='border-4 text-xl bg-black px-10 py-2 rounded-full text-white hover:bg-gray-500'>
          About 
        </button>
        
        <button 
          className='border-4 text-xl bg-black px-9 py-2 rounded-full text-white hover:bg-gray-500'
          onClick={() => window.open("https://github.com/harisuman2024/Projects_URL_Links", "_blank")}
        >Projects
        </button>

        <button 
          className='border-4 text-xl bg-black px-9 py-2 rounded-full text-white hover:bg-gray-500'
          onClick={() => window.open("https://github.com/harisuman2024/Updated_Resume", "_blank")}
        >
          Resume
        </button>

        {/* <button className='border-4 text-xl bg-black px-9 py-2 rounded-full text-white hover:bg-gray-500'>
          Hire me
        </button> */}
   
        <button 
          className='border-4 text-xl bg-black px-9 py-2 rounded-full text-white hover:bg-gray-500'
          onClick={() => window.open("mailto:harisuman1008@gmail.com", "_blank")}
        >
          Hire Me
        </button>

      </a>
      <i className="ri-more-2-fill text-2xl ml-1"></i>
    </div>
  );
};

export default Header;

