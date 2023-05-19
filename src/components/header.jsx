
import React from 'react'
import {useState} from 'react'
import { FaChevronRight ,FaAlignJustify ,FaTimes } from "react-icons/fa";

export default function Header () {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };

    return (

        <div className='relative'>
            <div className='flex md:gap-6 gap-3 justify-between  w-full bg-[#133d54] p-2 md:p-3'>

                {/* <img src={'./images/forexbrokers.svg.........'} className='w-[50%] md:w-[20%] mx-3' alt='mmmee' /> */}
                <img src={'./logo.png'} className='w-[50%] md:w-[20%] mx-3' alt='mmmee' />
                

                <div className='md:hidden block w-full '>
                            <div className=''>
                            <FaAlignJustify onClick={toggleMenu} className='text-white text-[30px] float-right m-2'/>
                        {isOpen && (
                       <div className='absolute top-[48px] bg-white w-[100%] h-[100%] border '>
                       <FaTimes onClick={toggleMenu} className='text-black text-[30px]  m-2'/>
                        <ul classNam='bg-slate-500 border border-black w-[100%] h-[100%] border '>
                                <li className='text-[14px p-4 border border-black'><a href='/'>Guides</a></li>
                                <li className='text-[14px p-4 border border-black'><a href='/'>Reviews</a></li>
                                <li className='text-[14px p-4 border border-black'><a href='/'>Compare</a></li>
                                <li className='text-[14px p-4 border border-black'><a href='/'>Counties</a></li>
                                <li className='text-[14px p-4 border border-black'><a href='/'>Resources</a></li>
                            </ul>
                       </div>
                )}
                </div>

                </div>

                <div className='hidden md:block'>
                    <div className='max-w-[600px] mx-auto '>
                        <ul className='flex  gap-7  text-white mr-[20px] text-[18px] items-center p-3 my-auto max-w-[600px] '>
                            <li><a href='/'>Guides</a></li>
                            <li><a href='/'>Reviews</a></li>
                            <li><a href='/'>Compare</a></li>
                            <li><a href='/'>Counties</a></li>
                            <li><a href='/'>Resources</a></li>
                        </ul>
                    </div>
                </div>

               
    
            </div>
            <h2 className='md:mx-[150px] mx-2 md:text-[14px] text-[12px] md:p-3 p-2' >ForexBrokers.com is committed to the highest ethical standards and reviews services independently. <a href ='/' className='text-blue-500'>Learn How We Make Money</a> </h2>

            <div className='max-w-[500px] md:gap-1  md:mx-[160px] md:py-1 py-1 flex'>
                <div className='flex flex-row '>
                <a href='/' className='  text-blue-400 text-md p-2 md:text-[20px] font-bold '>Home  <FaChevronRight className='float-right flex  mt-1 md:mt-2 mx-2'/> </a>
                </div>
                <a href='/' className=' text-blue-400 text-md py-2 md:text-[20px] font-bold '>Forex Guides Directory  </a>
               
            </div>

        </div>
    )
}