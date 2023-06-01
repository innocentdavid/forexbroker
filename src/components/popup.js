

import React, { useState, useEffect } from 'react';
import { FaTimes } from "react-icons/fa";

const Popup = ({ onClose }) => {
  return (
    <div className='max-w-[1000px] top-[30%] lg:mx-auto md:mx-[12px] mx-[12px] overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none '>
        <div className='popup relative p-7  mt-[40px] bg-[#f5fafc] gap-2 flex justify-center flex-col shadow-lg md:p-[40px]  border border-slate-600 md:text-[20px] text-[16px] mx-auto  m-5 rounded-lg' >
        <h2 className= ' text-[17px] md:text-[30px] text-center'>Subscribe to our newsletter</h2>
        <form action="" method='' className='flex md:flex-row flex-col gap-2 justify-center'>
          <input type="text" className='md:w-[40%] md:p-0 py-2 bg-transparent outline-none rounded-lg placeholder:text-[20px] placeholder:px-3 border border-slate-400 ' placeholder='Enter your email' />
          <input type="submit" className='md:px-4 px-2 py-1  bg-[#231f20] mt-4 md:mt-0 text-white outline-none rounded-lg  border border-slate-400' value='subscribe' />
        </form>
        <FaTimes onClick={onClose}  className='text-[20px] absolute top-2 md:top-[20px] right-3 md:right-[20px]'/>
      </div>
    </div>
  );
};

const Pop = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 20000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="app">
      {/* Your main content goes here */}
      {showPopup && <Popup onClose={closePopup} />}
    </div>
  );
};

export default Pop;