

import React, { useRef } from 'react';
import { FaChevronRight ,FaAlignJustify ,FaTimes, FaChevronLeft } from "react-icons/fa";

import ig from '../images/ig-group.jpg'
import five from '../images/5.svg'
import four from '../images/4.svg'
import zazo from '../images/Logo Forex Brokers_204x70.png'
import brokers from '../images/interactive-brokers.png'
import cmc from '../images/cmc-markets.png'
import tda from '../images/td-ameritrade.png'
import forex from '../images/forex.com logo.jpg'
import city from '../images/City Index Logo_2022.png'
import xtb from '../images/xtb.png'
import extror from '../images/etoro.png'

export default function Showtable (){

   

    const tableRef = useRef(null);
  
    const scrollTable = (scrollOffset) => {
      const table = tableRef.current;
      table.scrollLeft += scrollOffset;
    };

  return (
    <div className='md:max-w-[1000px] w-full md:mx-auto mt-3'>
  
    <div className="flex gap-6 justify-end my-2">
      <button onClick={() => scrollTable(-100)} className='w-[40px]  flex justify-center items-center h-[40px] border rounded-full bg-slate-700 text-white' ><FaChevronLeft/></button>

      <button  onClick={() => scrollTable(100)} className='w-[40px] flex justify-center items-center  h-[40px] border rounded-full bg-slate-700 text-white' ><FaChevronRight/></button>
    </div>



    <div className='flex  border border-slate-300'>

        <div className='flex gap-[30px]  mt-[100px] flex-col border-r border-slate-800 '>

          
            <img src={ig} alt='mee'  className='border-t border-slate-700' ></img>
            <img src={zazo} alt='mee'   ></img>
            <img src={brokers} alt='mee'  ></img>
            <img src={cmc} alt='mee'   ></img>
            <img src={tda} alt='mee'   ></img>
            <img src={forex} alt='mee'     ></img>
            <img src={city} alt='mee'   ></img>
            <img src={xtb} alt='mee'    ></img>
            <img src={extror} alt='mee'     ></img>

        </div>

        <div className='max-w-[750px] overflow-hidden ' ref={tableRef} >

            <table className=' mt-[25px]  border-slate-700'>

                <thead className='border-b  border-slate-700' >
                    <tr className='mb-7 my-[20px] p-2'>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Overall Rating</td>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Offering of Investments</td>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Commissions & Fees</td>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Platform & Tools</td>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Research</td>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Education</td>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Mobile tdading</td>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Trust Score</td>
                        <td className='mx-4 text-[16px] px-6 text-center font-bold' >Visit Site</td>
                    </tr>
                </thead>

                <tbody >

                    <tr className='my-1  mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>

                    <tr className='my-1  mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>

                    <tr className='my-1 mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>


                    <tr className='my-1 mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>


                    <tr className='my-5 mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>


                    <tr className='my-1  mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>



                    <tr className='my-1 mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>



                    <tr className='my-1  mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>


                    <tr className='my-1  mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>



                    <tr className='my-5  mt-[10px] '>

                        <td className='mx-9 text-[18px] px-1'>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-1  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-5  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={four} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-2  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className=' mx-3  flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 '>
                            <a data-dd="1" href="/">
                            <img  alt="IG logo" loading="lazy"  src={five} title="IG logo" className='mx-4 flex justify-center w-[100px] h-[90px] '></img></a>
                                                                        
                        </td>

                        <td className='mx-9 text-[18px] text-center px-1 mt-9 '>99
                        </td>

                        <td className='mx-9 text-[18px] px-1 mt-9 text-center '>Vist site
                        </td>

                    </tr>

                </tbody>


            </table>
        </div>

    </div>

  </div>
  );
}