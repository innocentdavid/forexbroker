


import React, { useState } from 'react';
import Big from '../images/cmc-markets.png'
import star from '../images/5.svg'
import disc from '../images/td-ameritrade.png'
import IKR from '../images/forex.com logo.jpg'



export default function Card2() {
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

    return (


        <div className='flex gap-7 mt-7 flex-col md:flex-row justify-between md:px-3'>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex  justify-between mt-4 mx-2 gap-3'>
                    {/* <img src={Big} className='md:w-[200px] w-[150px] p-2' alt='nextimg' /> */}
                    <img src={`/images/broker_logos/exness-review.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    <div className='mt-2'>
                        <img src={star} className='w-[100px] mx-5 my-2' alt='netimg' />
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
                            Pros/Cons
                        </div>

                    </div>
                    <div className="tab-content">
                        {activesTab === 'summary' &&
                            <div className='px-4 py-2 mb-[100px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Best for customer support</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$1</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>	CySEC, FCA, SFSA</span>
                                </div>
                                

                            </div>
                        }
                        {activesTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'>Exness was established back in 2008, is a leading Forex and CFD broker. Currently licensed by three regulatory authorities.  <a href='/' className='text-blue-500'>Read full review</a></p>}

                        {activesTab === 'overlook' &&

                            <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2'>
                                        <li>Tight spreads</li>
                                        <li>Dealing desk broker</li>
                                        <li>Funds stored in segregated accounts</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                        <li>Multi-currency accounts missing</li>
                                    </ul>
                                </div>

                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    <img src={`/images/broker_logos/hfm_logo.png`} className='w-fit h-[80px] rounded-[15px] p-2' alt='nextimg' />
                    <div className='mt-2'>
                        <img src={star} className='w-[100px] mx-5 my-2' alt='netimg' />
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
                            Pros/Cons
                        </div>

                    </div>

                    <div className="tab-content">
                        {nativeTab === 'summary' &&
                            <div className='px-4 py-2 mb-[150px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Best for automation</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$100</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>CySec, FCA, DFSA, FSCA</span>
                                </div>

                            </div>
                        }
                        {nativeTab === 'review' && 

                        <div className='p-4 mb-[150px] text-[16px] md:text-[18px] h-[200px]'>
                            <p> Minimum Deposit	$100 Trust Score 99 HF Markets is a multi-asset Forex broker that offers Forex and Commodities trading previously known as HotForex. <a href='/' className='text-blue-500'>Read full review</a></p>

                        </div>}

                        {nativeTab === 'overlook' &&

                            <div className='mb-[150px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2'>
                                        <li>Regulated by FCA</li>
                                        <li>Low fees</li>
                                        <li>Founded 2010</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                        <li>International offering done offshore</li>
                                    </ul>
                                </div>


                            </div>
                        }
                    </div>
                </div>

            </div>

            <div className='border rounded-[30px] shadow-lg md:w-[33%] w-full bg-white'>

                <div className='flex justify-between mt-4 mx-2 gap-3'>
                    {/* <img src={IKR} className='md:w-[200px] w-[150px] p-2' alt='nextimg' /> */}
                    <img src={`/images/broker_logos/fxcm_logo.svg`} className='md:w-[150px] w-[150px] h-[80px] p-2' alt='nextimg' />
                    <div className='mt-2'>
                        <img src={star} className='w-[100px] mx-5 my-2' alt='netimg' />
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
                            Pros/Cons
                        </div>

                    </div>

                    <div className="tab-content">
                        {nativedTab === 'summary' &&
                            <div className='px-4 py-2 mb-[100px]  text-[18px] h-[200px]'>
                                <h3 className='mx-5 text-[15px]'>Great for tradingview integration</h3>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Minimum Deposit</h4>
                                    <span className='text-[15px]'>$50</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Trust Score</h4>
                                    <span className='text-[15px]'>99</span>
                                </div>

                                <div className='flex justify-between mt-3 max-w-[240px] mx-4 '>
                                    <h4 className='text-[13px] font-bold mt-1'>Regulation</h4>
                                    <span className='text-[15px]'>FCA, CySEC, ASIC, FSCA</span>
                                </div>

                            </div>
                        }
                        {nativedTab === 'review' && <p className='p-4 mb-[100px] text-[16px] md:text-[18px] h-[200px]'> FXCM  provides a wide range of financial services for traders almost all over the world. The company was founded in 1999.  <a href='/' className='text-blue-500'>Read full review</a></p>}
                        
                        {nativedTab === 'overlook' &&

                            <div className='mb-[100px] my-4 mx-6  h-[200px]'>

                                <div>
                                    <h3 className='text-[15px] md:text-[20px] '>Pros</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2'>
                                        <li>Founded in 1999</li>
                                        <li>Excellent market research</li>
                                        <li>Wide range of markets</li>

                                    </ul>
                                    <h3 className='text-[15px] md:text-[20px]  '>Cons</h3>
                                    <ul className='list-disc text-[14px] mx-[20px] py-2' >
                                        <li>Spreads for Forex and CFDs slightly high</li>

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