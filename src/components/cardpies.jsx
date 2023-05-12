


import React, { useState } from 'react';
import Big from '../images/cmc-markets.png'
import star from '../images/5.svg'
import disc from '../images/td-ameritrade.png'
import IKR from '../images/forex.com logo.jpg'



export default function Card2(){
    const [activesTab, setActivesTab] = useState('summary');

    const handleTabClick = (tab) => {
      setActivesTab(tab);
    };
    const [nativeTab, setnativeTab] = useState('summary');

    const handleTabClicks = (tab) => {
      setnativeTab(tab);
    };

    const [nativedTab, setnativedTab] = useState('summary');

    const handleTabClicked = (tab) => {
      setnativedTab(tab);
    };

    return(

      
        <div className='flex gap-7 mt-7 flex-col md:flex-row justify-between md:px-3'>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex  justify-between mt-4 mx-2 gap-3'>
                    <img src ={Big} className='md:w-[200px] w-[150px] p-2' alt='nextimg'/>
                    <div className='mt-2'>
                    <img src ={star} className='w-[100px] mx-5 my-2' alt='netimg'/>
                    <h4 className='text-center'>5.0 overall</h4>
                    </div>

                </div>

                <div>
                    <div className=" flex justify-between mx-3 border-b my-3 ">

                        <div 
                        className={`tab ${activesTab === 'summary' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`} 
                        onClick={() => handleTabClick('summary')}
                        >
                        Summary
                        </div>

                        <div
                        className={`tab ${activesTab === 'review' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                        onClick={() => handleTabClick('review')}
                        >
                        Review
                        </div>

                        <div
                        className={`tab ${activesTab === 'overlook' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                        onClick={() => handleTabClick('overlook')}
                        >
                        Prons/Cons
                        </div>

                    </div>
                    <div className="tab-content">
                        {activesTab === 'summary' && 
                            <div className='px-4 py-2 mb-[100px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Excellent overall, best platform technology</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$0</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>	12377</span>
                                </div>

                            </div>
                        }
                        {activesTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'>CMC Markets is well-trusted across the globe, and delivers a terrific trading experience thanks to its excellent pricing and selection of over 12,000 tradeable instruments <a href='/' className='text-blue-500'>Read full review</a></p>}
                        {activesTab === 'overlook' && 

                        <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2'>
                                    <li>Low trading costs</li>
                                    <li>Excellent web and mobile platforms</li>
                                    <li>Robust research materials</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                    <li>Educational offering could be improved</li>
                                </ul>
                            </div>

                        </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <img src ={disc} className='md:w-[200px] w-[150px] p-2' alt='nextimg'/>
                    <div className='mt-2'>
                    <img src ={star} className='w-[100px] mx-5 my-2' alt='netimg'/>
                    <h4 className='text-center'>5.0 overall</h4>
                    </div>

                </div>

                <div>
                    <div className=" flex justify-between mx-3 border-b my-3 ">

                                <div 
                                className={`tab ${nativeTab === 'summary' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`} 
                                onClick={() => handleTabClicks('summary')}
                                >
                                Summary
                                </div>

                                <div
                                className={`tab ${nativeTab === 'review' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                                onClick={() => handleTabClicks('review')}
                                >
                                Review
                                </div>

                                <div
                                className={`tab ${nativeTab === 'overlook' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                                onClick={() => handleTabClicks('overlook')}
                                >
                                Prons/Cons
                                </div>

                    </div>

                    <div className="tab-content">
                        {nativeTab === 'summary' && 
                            <div className='px-4 py-2 mb-[150px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Best desktop platform, U.S. only</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$0</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>0</span>
                                </div>

                            </div>
                        }
                        {nativeTab=== 'review' && <div className='p-4 mb-[150px] text-[16px] md:text-[18px] h-[200px]'>    
                            <p> Minimum Deposit	$0 Trust Score 99 Tradeable Symbols (Total)	0 TD Ameritrade’s thinkorswim platform offers over 70 tradeable currency pairs alongside a plethora of impressive tools, research, and education. For traders in the U.S., TD Ameritrade provides the ultimate trading technology experience <a href='/' className='text-blue-500'>Read full review</a></p>

                        </div>}
                        {nativeTab === 'overlook' && 

                        <div className='mb-[150px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2'>
                                    <li>Outstanding platform in thinkorswim</li>
                                    <li>Thorough research offerings</li>
                                    <li>Excellent educational materials</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                    <li>Does not offer copy trading</li>
                                    <li>Forex pricing is slightly higher than industry average</li>
                                </ul>
                            </div>
                           

                        </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <img src ={IKR} className='md:w-[200px] w-[150px] p-2' alt='nextimg'/>
                    <div className='mt-2'>
                        <img src ={star} className='w-[100px] mx-5 my-2' alt='netimg'/>
                        <h4 className='text-center'>5.0 overall</h4>
                    </div>
                </div>

                <div>

                    <div className=" flex justify-between mx-3 border-b my-3 ">

                        <div 
                        className={`tab ${nativedTab === 'summary' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`} 
                        onClick={() => handleTabClicked('summary')}
                        >
                        Summary
                        </div>

                        <div
                        className={`tab ${nativedTab === 'review' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                        onClick={() => handleTabClicked('review')}
                        >
                        Review
                        </div>

                        <div
                        className={`tab ${nativedTab === 'overlook' ? 'active border-b border-black' : ' hover:border-b border-black text-[18px] mx-2'}`}
                        onClick={() => handleTabClicked('overlook')}
                        >
                        Prons/Cons
                        </div>

                    </div>

                    <div className="tab-content">
                        {nativedTab === 'summary' && 
                            <div className='px-4 py-2 mb-[100px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Excellent all-round offering</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$100</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Tradeable Symbols (Total)</h4>
                                    <span className='text-[15px]'>5500</span>
                                </div>

                            </div>
                        }
                        {nativedTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'> FOREX.com is a trusted brand that delivers an excellent trading experience for forex and CFDs traders across the globe. It offers a wide range of markets and provides an impressive suite of proprietary platforms – alongside limited access to MetaTrader. <a href='/' className='text-blue-500'>Read full review</a></p>}
                        {nativedTab === 'overlook' && 

                        <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                            <div>
                                <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2'>
                                    <li>Multiple high-quality platforms</li>
                                    <li>Excellent market research</li>
                                    <li>Wide range of markets</li>
                                    
                                </ul>
                                <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                    <li>Only about 600 instruments are available on the MT5 platform, compared to over 4,500 on non-MetaTrader platforms</li>
                                    
                                </ul>
                            </div>

                        </div>
                        }
                    </div>

                </div>
            </div>
        </div>
    )
}